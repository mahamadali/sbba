<?php

namespace Models\Base;

use Bones\Database;
use Bones\Str;
use JollyException\BadMethodException;
use JollyException\DatabaseException;
use Models\Traits\Relation;
use Models\Traits\SelfResolve;

class Model extends Database
{
    use Relation, SelfResolve;

    protected $model;
    protected $table;
    protected $primary_key = 'id';
    protected $db;
    protected $columns = ['*'];
    protected static $returnAs = 'object';
    protected $with = [];
    protected $without = [];
    protected $withDefaults = [];
    protected $has = [];
    protected $attaches = [];
    protected $hidden = [];
    protected $withTrashed = false;
    protected $relationalProps = [];
    protected $dynamicAttributes = [];

    public function __construct()
    {
        $this->model = get_class($this);
        $this->table = (empty($this->table)) ? Str::camelize(Str::pluralize(basename($this->model))) : $this->table;
        $this->db = Database::getInstance();
        Database::$_tableName = $this->table;
    }

    public function ___makeHidden(...$attrs)
    {
        $this->hidden = array_merge($this->hidden, resolveAsArray($attrs));
        $this->makeUnique('hidden');

        return $this; 
    }

    public function ___makeVisible(...$attrs)
    {
        $this->hidden = array_diff($this->hidden, resolveAsArray($attrs));
        $this->makeUnique('hidden');

        return $this; 
    }

    public function ___with(...$attrs)
    {
        $this->with = array_merge($this->with, resolveAsArray($attrs));
        $this->makeUnique('with');

        return $this;
    }

    public function ___withTrashed(bool $trashed = true)
    {
        $this->withTrashed = $trashed;

        return $this;
    }

    public function ___attach(...$attrs)
    {
        $this->attaches = array_merge($this->attaches, resolveAsArray($attrs));
        $this->makeUnique('attaches');

        return $this;
    }

    public function ___hasRelated(...$attrs)
    {
        $this->has = array_merge($this->has, resolveAsArray($attrs));
        
        return $this;
    }

    public function ___selectSet(...$attrs)
    {
        $this->columns = resolveAsArray($attrs);
        
        return $this;
    }

    public function ___select(string $column, string $alias = '')
    {
        $alias = (!empty($alias)) ? ' AS ' . $alias : '';
        
        $this->columns[] = $column . $alias;
        
        return $this;
    }

    public function ___relationalProps(...$attrs)
    {
        $this->relationalProps = resolveAsArray($attrs);

        return $this;
    }

    public function ___insert($insertData)
    {
        if (!empty($this->defaults)) {
            foreach ($this->defaults as $element => $default) {
                if (!array_key_exists($element, $insertData)) 
                    $insertData[$element] = $default;
            }
        }

        $lastInsertedId = $this->db->__insert($insertData, $this->table);

        if ($lastInsertedId > 0) {
            return $this->where($this->primary_key, $lastInsertedId)->first();
        }

        return null;
    }

    public function ___create(array $createData = [])
    {
        $elements = (!empty($this->elements)) ? $this->elements : [];
        if (!empty($elements)) {
            foreach ($elements as $element) {
                if (!array_key_exists($element, $createData)) {
                    if (!Str::empty($this->defaults[$element])) {
                        $insertData[$element] = $this->defaults[$element];
                    } else {
                        throw new DatabaseException('{'.$element.'} presents in '.$this->model.'::elements but not available in arguments Array in method '.__FUNCTION__.'(Array)');
                    }
                } else {
                    $insertData[$element] = $createData[$element];
                }
            }
        } else {
            foreach ($createData as $param => $value) {
                $insertData[$param] = $value;
            }
            if (!empty($this->defaults)) {
                foreach ($this->defaults as $element => $default) {
                    if (!isset($insertData[$element])) 
                        $insertData[$element] = $default;
                }
            }
        }

        return $this->insert($insertData);
    }

    public function ___insertMulti(array $multiInsertData, array $dataKeys = null)
    {
        if (!empty($this->defaults)) {
            foreach ($multiInsertData as $insertPairIndex => $insertData) {
                foreach ($this->defaults as $element => $default) {
                    if (!array_key_exists($element, $insertData)) 
                        $multiInsertData[$insertPairIndex][$element] = $default;
                }
            }
        }

        $lastInsertedIds = $this->db->__insertMulti($multiInsertData, $dataKeys, $this->table);

        if (!empty($lastInsertedIds)) {
            return $this->selectSet($this->elements)->whereIn($this->primary_key, $lastInsertedIds)->get();
        }

        return null;
    }

    public function ___update($updateData, $limit = null)
    {
        return $this->db->__update($updateData, $limit, $this->table);
    }

    public function ___delete($limit = null)
    {
        if ($this->hasTrashMask()) {
            return $this->setTrashMask();
        }
        return $this->db->__delete($limit, $this->table);
    }

    public function ___forceDelete($limit = null)
    {
        return $this->db->__delete($limit, $this->table);
    }

    public function ___where($whereProp, $whereValue = 'DBNULL', $operator = '=', $cond = 'AND')
    {
        $this->db->__where($whereProp, $whereValue, $operator, $cond);
        return $this;
    }

    public function ___whereNull($whereProp, $cond = ' AND')
    {
        $this->db->__where($whereProp, NULL, 'IS', $cond);
        return $this;
    }

    public function ___orWhereNull($whereProp)
    {
        $this->db->__where($whereProp, NULL, 'IS', 'OR');
        return $this;
    }

    public function ___whereNotNull($whereProp, $cond = 'AND')
    {
        $this->db->__where($whereProp, NULL, 'IS NOT', $cond);
        return $this;
    }

    public function ___orWhereNotNull($whereProp)
    {
        $this->db->__where($whereProp, NULL, 'IS NOT', 'OR');
        return $this;
    }

    public function ___orWhere($whereProp, $whereValue = 'DBNULL', $operator = '=')
    {
        $this->db->__orWhere($whereProp, $whereValue, $operator);
        return $this;
    }

    public function ___whereLike($whereProp, $whereValue = 'DBNULL', $cond = 'AND')
    {
        $this->db->__where($whereProp, $whereValue, 'LIKE', $cond);
        return $this;
    }

    public function ___orWhereLike($whereProp, $whereValue = 'DBNULL')
    {
        $this->db->__where($whereProp, $whereValue, 'LIKE', 'OR');
        return $this;
    }

    public function ___whereNotLike($whereProp, $whereValue = 'DBNULL', $cond = 'AND')
    {
        $this->db->__where($whereProp, $whereValue, 'NOT LIKE', $cond);
        return $this;
    }

    public function ___orWhereNotLike($whereProp, $whereValue = 'DBNULL')
    {
        $this->db->__where($whereProp, $whereValue, 'NOT LIKE', 'OR');
        return $this;
    }

    public function ___whereIn($whereProp, $rangeSet = [], $cond = 'AND')
    {
        $this->db->__where($whereProp, $rangeSet, 'IN', $cond);
        return $this;
    }

    public function ___orWhereIn($whereProp, $rangeSet = [])
    {
        $this->db->__where($whereProp, $rangeSet, 'IN', 'OR');
        return $this;
    }

    public function ___whereNotIn($whereProp, $rangeSet = [], $cond = 'AND')
    {
        $this->db->__where($whereProp, $rangeSet, 'NOT IN', $cond);
        return $this;
    }

    public function ___orWhereNotIn($whereProp, $rangeSet = [])
    {
        $this->db->__where($whereProp, $rangeSet, 'NOT IN', 'OR');
        return $this;
    }

    public function ___whereBetween($whereProp, $rangeSet = [], $cond = 'AND')
    {
        $this->db->__where($whereProp, $rangeSet, 'BETWEEN', $cond);
        return $this;
    }

    public function ___orWhereBetween($whereProp, $rangeSet = [])
    {
        $this->db->__where($whereProp, $rangeSet, 'BETWEEN', 'OR');
        return $this;
    }

    public function ___whereNotBetween($whereProp, $rangeSet = [], $cond = 'AND')
    {
        $this->db->__where($whereProp, $rangeSet, 'NOT BETWEEN', $cond);
        return $this;
    }
    
    public function ___orWhereNotBetween($whereProp, $rangeSet = [])
    {
        $this->db->__where($whereProp, $rangeSet, 'NOT BETWEEN', 'OR');
        return $this;
    }

    public function ___clearWhere()
    {
        $this->db->__clearWhere();
        return $this;
    }

    public function ___leftJoin($joinTable, $joinCondition)
    {
        $this->db->__joinWhere($joinTable, $joinCondition, 'LEFT');
        return $this;
    }

    public function ___rightJoin($joinTable, $joinCondition)
    {
        $this->db->__joinWhere($joinTable, $joinCondition, 'RIGHT');
        return $this;
    }

    public function ___outerJoin($joinTable, $joinCondition)
    {
        $this->db->__joinWhere($joinTable, $joinCondition, 'OUTER');
        return $this;
    }

    public function ___innerJoin($joinTable, $joinCondition)
    {
        $this->db->__joinWhere($joinTable, $joinCondition, 'INNER');
        return $this;
    }

    public function ___leftOuterJoin($joinTable, $joinCondition)
    {
        $this->db->__joinWhere($joinTable, $joinCondition, 'LEFT OUTER');
        return $this;
    }

    public function ___rightOuterJoin($joinTable, $joinCondition)
    {
        $this->db->__joinWhere($joinTable, $joinCondition, 'RIGHT OUTER');
        return $this;
    }

    public function ___naturalJoin($joinTable, $joinCondition)
    {
        $this->db->__joinWhere($joinTable, $joinCondition, 'NATURAL');
        return $this;
    }

    public function ___orderBy($column, $direction = 'DESC', $customFieldsOrRegExp = null)
    {
        $this->db->__orderBy($column, $direction, $customFieldsOrRegExp);
        return $this;
    }

    public function ___groupBy(...$columns)
    {
        $this->db->__groupBy(implode(',', resolveAsArray($columns)));
        return $this;
    }

    public function ___setHaving($havingProp, $havingValue = 'DBNULL', $operator = '=', $cond = 'AND')
    {
        $this->db->__having($havingProp, $havingValue, $operator, $cond);
    }

    public function ___having($havingProp, $havingValue = 'DBNULL', $operator = '=')
    {
        $this->___setHaving($havingProp, $havingValue, $operator, 'AND');
        return $this;
    }

    public function ___orHaving($havingProp, $havingValue = 'DBNULL', $operator = '=')
    {
        $this->___setHaving($havingProp, $havingValue, $operator, 'OR');
        return $this;
    }

    public function ___havingIn($havingProp, $rangeSet = [])
    {
        $this->___setHaving($havingProp, $rangeSet, 'IN', 'AND');
        return $this;
    }

    public function ___orHavingIn($havingProp, $rangeSet = [])
    {
        $this->___having($havingProp, $rangeSet, 'IN', 'OR');
        return $this;
    }

    public function ___havingNotIn($havingProp, $rangeSet = [])
    {
        $this->___having($havingProp, $rangeSet, 'NOT IN', 'AND');
        return $this;
    }

    public function ___orHavingNotIn($havingProp, $rangeSet = [])
    {
        $this->___having($havingProp, $rangeSet, 'NOT IN', 'OR');
        return $this;
    }

    public function ___havingBetween($havingProp, $rangeSet = [])
    {
        $this->___having($havingProp, $rangeSet, 'BETWEEN', 'AND');
        return $this;
    }

    public function ___orHavingBetween($havingProp, $rangeSet = [])
    {
        $this->___having($havingProp, $rangeSet, 'BETWEEN', 'OR');
        return $this;
    }

    public function ___havingNotBetween($havingProp, $rangeSet = [])
    {
        $this->___having($havingProp, $rangeSet, 'NOT BETWEEN', 'AND');
        return $this;
    }

    public function ___orHavingNotBetween($havingProp, $rangeSet = [])
    {
        $this->___having($havingProp, $rangeSet, 'NOT BETWEEN', 'OR');
        return $this;
    }

    public function ___get($numRows = null)
    {
        if ($this->hasTrashMask() && !$this->withTrashed) {
            $this->whereNull($this->getTrashMaskColumn());
        }

        $entries = $this->db->__getRows($numRows, $this->columnSet(), $this->table);
        $result = [];
        
        foreach ($entries as $key => $entry) {

            $modelObj = (new $this->model());

            foreach ($entry as $attribute => $value) {
                $modelObj->$attribute = $value;
            }

            foreach ($this->attaches as $attach) {
                $modelObj->$attach = $modelObj->$attach;
            }

            foreach ($this->with as $with) {

                if (in_array($with, $this->without)) continue;
                
                $modelObj->$with = $modelObj->$with();
                if (!empty($executableCallRelated = $modelObj->callRelated($with))) {
                    if (is_object($modelObj->$with)) {
                        $modelObj->$with = $modelObj->$with->$executableCallRelated();
                    }
                }
            }

            if (!empty($this->where_has)) {
                foreach ($this->where_has as $relation => $whereHas) {
                    $modelObj->$relation = $modelObj->$relation();
                    if (!empty($whereHas) && !empty($executableCallRelated = $modelObj->callRelated($relation))) {
                        $modelObj->$relation = call_user_func_array($whereHas, [$modelObj->$relation])->$executableCallRelated();
                        if (empty($modelObj->$relation)) {
                            $modelObj = null;
                        }
                    }
                }
            }

            foreach ($this->hidden as $confidentialAttr) {
                if (isset($modelObj->$confidentialAttr)) 
                    unset($modelObj->$confidentialAttr);
            }
            
            if (!empty($modelObj)) {
                $result[$key] = $modelObj;
            }
        }

        return $result;
    }

    public function ___getAsArray($numRows = null)
    {
        return objectToArray($this->get($numRows));
    }

    public function ___without(...$attrs)
    {
        $this->without = resolveAsArray($attrs);
        return $this;
    }

    public function ___first()
    {
        if ($this->hasTrashMask() && !$this->withTrashed) {
            $this->whereNull($this->getTrashMaskColumn());
        }

        $entries = $this->db->__getOne($this->columnSet(), $this->table);

        if (empty($entries)) return null;

        $attributes = get_object_vars($entries);

        $modelObj = (new $this->model());

        foreach ($attributes as $attribute => $value) {
            $modelObj->$attribute = $value;
        }

        foreach ($this->attaches as $attach) {
            $modelObj->$attach = $modelObj->$attach;
        }

        foreach ($this->with as $with) {

            if (in_array($with, $this->without)) continue;

            $modelObj->$with = $modelObj->$with();
            if (!empty($executableCallRelated = $modelObj->callRelated($with))) {
                if (is_object($modelObj->$with)) {
                    $modelObj->$with = $modelObj->$with->$executableCallRelated();
                }
            }
        }

        if (!empty($this->where_has)) {
            foreach ($this->where_has as $relation => $whereHas) {
                $modelObj->$relation = $modelObj->$relation();
                if (!empty($whereHas) && !empty($executableCallRelated = $modelObj->callRelated($relation))) {
                    $modelObj->$relation = call_user_func_array($whereHas, [$modelObj->$relation])->$executableCallRelated();
                    if (empty($modelObj->$relation)) {
                        $modelObj = null;
                    }
                }
            }
        }

        foreach ($this->hidden as $confidentialAttr) {
            if (isset($this->$confidentialAttr)) 
                unset($this->$confidentialAttr);
        }

        return $modelObj;
    }

    public function ___find($value)
    {
        return $this->where($this->primary_key, $value)->first();
    }

    public function ___pluck(...$columns)
    {
        return $this->db->__pluck(implode(',', resolveAsArray($columns)));
    }

    public function ___limit(...$limit)
    {
        $this->db->__limit(implode(',', resolveAsArray($limit)));
        return $this;
    }

    public function ___makeUnique($attr)
    {
        if (!empty($this->$attr) && is_array($this->$attr)) {
            $this->$attr = array_unique($this->$attr);
        }
    }

    public function ___hasTrashMask()
    {
        return (isset($this->enable_trash_mask) && $this->enable_trash_mask);
    }

    public function __get($attribute)
    {
        if (empty($attribute) || in_array($attribute, ['attaches', 'with', 'elements', 'hidden', 'withDefaults', 'has', 'relationalProps'])) {
            return [];
        }
        $attribute = Str::decamelize($attribute);
        $attributeMehod = 'get'.$attribute.'Property';
        if (method_exists($this->model, $attributeMehod)) {
            return $this->$attributeMehod();
        }

        throw new BadMethodException('Property {'.Str::camelize($attribute).'} not found in '.$this->model);
    }

    public function __set($attribute, $value)
    {
        $this->$attribute = $value;
        if (!in_array($attribute, $this->with)) {
            $this->dynamicAttributes[] = $attribute;
        }
    }

    public function columnSet()
    {
        if (in_array('*', $this->columns) && count($this->columns) > 1)
            return implode(',', array_diff($this->columns, ['*']));
        
        return implode(',', $this->columns);
    }

    public function ___getWithDefaults($with)
    {
        return (!empty($this->withDefaults[$with])) ? $this->withDefaults[$with] : [];
    }

    public function ___setWithDefaults($relation, $defaultAttrs)
    {
        $this->withDefaults[$relation] = $defaultAttrs;
        
        return $this;
    }

    public static function __callStatic($method, $parameters)
    {
        if (method_exists((new static), '___'.$method)) {
            (new static)->___clearWhere();
            return (new static)->{'___'.$method}(...$parameters);
        }

        throw new BadMethodException('Method {'.$method.'} not found in '.(new static)->model);
    }

    public function __call(string $method, $parameters)
    {
        if (method_exists($this, '___'.$method)) {
            return $this->{'___'.$method}(...$parameters);
        }

        throw new BadMethodException('Method {'.$method.'} not found in '.$this->model);
    }

}