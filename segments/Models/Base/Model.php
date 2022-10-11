<?php

namespace Models\Base;

use Bones\Database;
use Bones\Str;
use Bones\BadMethodException;
use Bones\Set;
use Contributors\Particles\Pagination;
use Exception;
use Models\Traits\Relation;
use Models\Traits\SelfResolve;
use Models\Traits\TrashMask;

class Model
{
    use Relation, SelfResolve, TrashMask;

    public $model;
    protected $table;
    protected $primary_key = 'id';
    protected $db;
    protected $defaults = [];
    protected $elements = [];
    protected $with = [];
    protected $without = [];
    protected $attaches = [];
    protected $hidden = [];
    protected $with_trashed = false;
    protected $dynamic_attributes = [];
    protected $transforms = [];
    protected $skip_relationships = false;
    protected $skip_attaches = false;
    protected $enable_trash_mask = false;
    
    protected $timestamps = false;
    protected $created_at_column = 'created_at';
    protected $updated_at_column = 'updated_at';

    public function __construct()
    {
        $this->model = get_class($this);
        $this->table = (empty($this->table)) ? Str::camelize(Str::pluralize(basename($this->model))) : $this->table;
        $this->db = Database::table($this->table);
        $this->db->setPrimaryKey($this->primary_key);
        $this->db->setTimestampsStatus($this->timestamps, $this->created_at_column, $this->updated_at_column);
        $this->db->setTrashMaskStatus($this->hasTrashMask(), $this->getTrashMaskColumn());
        $this->db->model = $this;
    }

    public function prepareWith(...$attrs)
    {
        $this->with = array_merge($this->with, resolveAsArray($attrs));
        $this->makeUnique('with');

        return $this;
    }

    public function prepareWithout(...$attrs)
    {
        $this->without = resolveAsArray($attrs);
        $this->makeUnique('without');

        return $this;
    }

    public function makeHidden(...$attrs)
    {
        $this->hidden = array_merge($this->hidden, resolveAsArray($attrs));
        $this->makeUnique('hidden');

        return $this;
    }

    public function makeVisible(...$attrs)
    {
        $this->hidden = array_diff($this->hidden, resolveAsArray($attrs));
        $this->makeUnique('hidden');

        return $this;
    }

    public function prepareAttach(...$attrs)
    {
        $this->attaches = array_merge($this->attaches, resolveAsArray($attrs));
        $this->makeUnique('attaches');

        return $this;
    }

    public function skipRelationships($skip_relationships = true)
    {
        $this->skip_relationships = $skip_relationships;

        return $this;
    }

    public function skipAttaches($skip_attaches = true)
    {
        $this->skip_attaches = $skip_attaches;

        return $this;
    }

    public function prepareWithoutGlues()
    {
        return $this->skipRelationships()->skipAttaches();
    }

    public function relationalProps(...$attrs)
    {
        $this->relationalProps = resolveAsArray($attrs);

        return $this;
    }

    public function forceDelete()
    {
        return $this->db->delete(true);
    }

    public function withTrashed(bool $with_trashed = true)
    {
        $this->with_trashed = $with_trashed;

        return $this;
    }

    public function hasWithTrashed()
    {
        return $this->with_trashed;
    }

    public function ignoreForeignKeyChecks($ignore = true)
    {
        $this->rawQuery('SET FOREIGN_KEY_CHECKS=' . (int) !$ignore . ';');
        return $this;
    }

    public function makeUnique($attr)
    {
        $static = new static;
        if (!empty($static->$attr) && is_array($static->$attr)) {
            $static->$attr = array_unique($static->$attr);
        }
    }

    public function excludeAttrs(...$attrs)
    {
        $attrs = resolveAsArray($attrs);

        if (count($attrs) == 0) return $this;
        
        foreach ($attrs as $attr) {
            unset($this->$attr);
        }

        return $this;
    }

    public function removeAttr($attrs, $attr)
    {
        if (($key = array_search($attr, $attrs)) !== false)
            unset($attrs[$key]);

        return $attrs;
    }

    public function hasTrashMask()
    {
        return (isset($this->enable_trash_mask) && $this->enable_trash_mask);
    }

    public function hasTimestamps()
    {
        return $this->timestamps;
    }

    public function reservedProperties()
    {
        return ['_reserved_model_prop_is_only'];
    }

    public function __get($attribute)
    {
        if (empty($attribute) || in_array($attribute, ['attaches', 'with', 'without', 'elements', 'hidden', 'has', 'relationalProps'])) {
            return [];
        }
        $attribute = Str::decamelize($attribute);
        $attributeMehod = 'get' . $attribute . 'Property';

        if (!empty($this) && method_exists($this, $attributeMehod)) {
            return $this->$attributeMehod();
        }

        if (!empty($this->model) && method_exists($this->model, $attributeMehod)) {
            return $this->$attributeMehod();
        }
        
        throw new Exception('Property {' . Str::camelize($attribute) . '} not found in ' . $this->model);
    }

    public function __set($attribute, $value)
    {
        $this->$attribute = $value;

        if ($attribute === 'relationalProps')
            $this->db->$attribute = $value;
            
        if (!in_array($attribute, array_merge($this->with, $this->reservedProperties()))) {
            $this->dynamic_attributes[] = $attribute;
        }

        $attributeMehod = 'set' . Str::decamelize($attribute) . 'Property';
        if (method_exists($this->model, $attributeMehod)) {
            $this->$attributeMehod($value);
        }
    }

    public function prepareSet($entries, $wrap_as_set = true)
    {
        $result = [];

        foreach ($entries as $key => $entry) {

            $modelObj = (new $this->model());
            $modelObj = $this->build($modelObj, $entry);
            $modelObj->db->model = $modelObj;

            if (!empty($modelObj)) {
                $result[$key] = $modelObj;
            }
        }

        $result = $this->buildWithBlocks($result, $entries);

        if (!$wrap_as_set) return $result;

        return (new Set($result));
    }

    public function prepareOne($result)
    {
        if (empty($result)) return null;

        $attributes = get_object_vars($result);
        
        $modelObj = $this->selfBuild($attributes, $result, true);

        return $this->sanitize($modelObj);
    }

    public function prepareSanitize($modelObj = null)
    {
        if (!empty($modelObj)) 
            return $modelObj;
            
        $modelObj = ($modelObj == null) ? $this : $modelObj;

        return $modelObj->excludeAttrs(array_merge(['db', 'reserved_props', 'relation_captions', 'model', 'attaches', 'with', 'without', 'elements', 'hidden', 'relationalProps'], $modelObj->reserved_props));
    }
    
    public function preparePaginate($page_limit = 0, $query_param = 'page')
    {
        $page = (!empty(request()->get($query_param))) ? request()->get($query_param) : 1;

        return $this->db->paginate($page_limit, $page, $query_param);
    }

    public function wrapPaginated($paginated, $query_param = 'page')
    {
        $wrapped = [];

        foreach ($paginated as $key => $entry) {
            if (Str::contains($key, '__pagination')) {
                $wrapped[$key] = new Pagination($entry, $query_param);
                continue;
            }

            $attributes = (is_object($entry)) ? get_object_vars($entry) : array_keys($entry);

            $modelObj = $this->selfBuild($attributes, $entry, true);

            $wrapped[] = $modelObj;
        }

        return $wrapped;

    }

    public function prepareFirstOrNew($whereData = [], $additionalData = [])
    {
        return $this->conditionalFirst($whereData, $additionalData, 'new');
    }

    public function prepareFirstOrCreate($whereData = [], $additionalData = [])
    {
        return $this->conditionalFirst($whereData, $additionalData, 'create');
    }

    public function prepareUpdateOrCreate($whereData = [], $additionalData = [])
    {
        return $this->conditionalUpdate($whereData, $additionalData, 'create');
    }

    public function prepareFindOrFail($id, $columns = [])
    {
        if (!$found = $this->db->find($id, $columns))
            error(404);
        
        return $found;
    }

    public function prepareFirstOrFail($id, $columns = [])
    {
        if (!$found = $this->db->first($id, $columns))
            error(404);
        
        return $found;
    }

    public function prepareFirstOrNull($id, $columns = [])
    {
        if (!$found = $this->db->first($id, $columns))
            return null;
        
        return $found;
    }

    public function prepareIsLast()
    {
        return ($this->{$this->primary_key} === $this->max($this->primary_key));
    }

    protected function initiate($name, $arguments = [])
    {
        if (!method_exists($this->db, $name)) {
            throw new BadMethodException('Method {' . $name . '} not found in ' . $this->model);
        }

        return $this->db->{$name}(...$arguments);
    }

    public static function __callStatic($name, $arguments)
    {
        $static = (new static);

        if (method_exists($static, 'prepare'.ucfirst($name))) {
            return $static->{'prepare'.ucfirst($name)}(...$arguments);
        }

        if (method_exists($static, 'wrap'.ucfirst($name))) {
            return $static->{'wrap'.ucfirst($name)}(...$arguments);
        }

        return $static->initiate($name, $arguments);

        throw new BadMethodException('Method {' . $name . '} not found in ' . $static->model);
    }

    public function __call($name, $arguments)
    {
        if (method_exists($this, 'prepare'.ucfirst($name))) {
            return $this->{'prepare'.ucfirst($name)}(...$arguments);
        }

        if (method_exists($this, 'wrap'.ucfirst($name))) {
            return $this->{'wrap'.ucfirst($name)}(...$arguments);
        }

        return $this->initiate($name, $arguments);

        throw new BadMethodException('Method {' . $name . '} not found in ' . $this->model);
    }
}