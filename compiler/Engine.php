<?php

namespace Jolly;

use JollyException\FileNotFound;

require_once('ErrorHandler.php');

class Engine
{
    private static $path;
    private static $parameters = [];
    static $blocks = [];
    static $cache_path = __DIR__ . '/../compiler/builds/';
    static $cache_enabled = FALSE;

    public function __construct(array $parameters = [])
    {
        self::$parameters = $parameters;
    }

    public static function render(string $view, array $data = [], bool $return = false): string
    {
        // self::$path = __DIR__.'../../views/';
        self::$path = 'segments/views/';
        return self::load($view, $data, $return);
    }

    private static function load(string $view, array $data, bool $return = false): string
    {
        $file = self::$path . $view . '.jly.php';

        if (!file_exists($file)) {
            return self::error([
                'error' => 'File ' . $file . ' could not be found'
            ]);
        }

        foreach ($data as &$with) {
            if (is_array($with)) {
                $with = json_decode(json_encode($with));
            }
        }

        extract($data);
        $cached_file = self::cache($file);

        if (!$return) {
            ob_start();
            include($cached_file);
            return '';
        } else {
            ob_start();
            include($cached_file);
            $content = ob_get_contents();
            ob_end_clean();
            return $content;
        }
    }

    public static function error(array $data): string
    {
        extract($data);
        ob_start();
        include(__DIR__ . '../../segments/views/defaults/error.jly.php');
        return '';
    }

    public static function get(string $key)
    {
        return self::$parameters[$key] ?? null;
    }

    public static function loadStyles(array $styles)
    {
        if (!empty($styles)) {
            foreach ($styles as $key => $style) {
                if ($key > 0) {
                    echo "\t\t";
                }
                echo "<link rel='stylesheet' href='" . $style . "'>" . PHP_EOL;
            }
        }
    }

    public static function loadScripts(array $scripts)
    {
        if (!empty($scripts)) {
            echo "\n\t\t";
            foreach ($scripts as $key => $script) {
                if ($key > 0) {
                    echo "\n\t\t";
                }
                echo "<script type='text/javascript' src='" . $script . "'></script>";
            }
            echo "\n\n";
        }
    }

    static function cache($file)
    {
        if (!file_exists(self::$cache_path)) {
            mkdir(self::$cache_path, 0744);
        }
        $cached_file = self::$cache_path . str_replace(array('/', '.html'), array('_', ''), $file . '.php');
        if (!self::$cache_enabled || !file_exists($cached_file) || filemtime($cached_file) < filemtime($file)) {
            $code = self::includeFiles($file);
            $code = self::compileCode($code);
            file_put_contents($cached_file, '<?php class_exists(\'' . __CLASS__ . '\') or exit; ?>' . PHP_EOL . $code);
        }
        return $cached_file;
    }

    static function clearCache()
    {
        foreach (glob(self::$cache_path . '*') as $file) {
            unlink($file);
        }
    }

    static function compileCode($code)
    {
        $code = self::sanitizeBlocks($code);
        $code = self::compileBlocks($code);
        $code = self::compileYield($code);
        $code = self::compileEscapedEchos($code);
        $code = self::compileEchos($code);
        $code = self::compilePHP($code);
        $code = self::compileLoops($code);
        $code = self::compileIfElse($code);
        return $code;
    }

    static function includeFiles($file)
    {
        $code = file_get_contents($file);
        $matches = self::possibleParenthesesMatchesOneWay($code, '@(extends|include)');
        foreach ($matches as $value) {
            $value[2] = \Bones\Str::removeWords($value[2], ["'", '"']);
            $file = self::$path . $value[2] . '.jly.php';
            if (!file_exists($file))
                throw new FileNotFound($file . ' could not be found');
            $code = str_replace($value[0], self::includeFiles($file), $code);
        }
        $code = preg_replace('/@(extends|include)\(\'?(.*?)\'\)/i', '', $code);
        $code = preg_replace('/@(extends|include)\("?(.*?)\'\)/i', '', $code);
        $code = preg_replace('/@(extends|include)\(\'?(.*?)"\)/i', '', $code);
        $code = preg_replace('/@(extends|include)\("?(.*?)"\)/i', '', $code);
        return $code;
    }

    static function compilePHP($code)
    {
        return preg_replace('~\@php\s*(.+?)\s*\@endphp~is', '<?php $1 ?>', $code);
    }

    static function compileLoops($code)
    {
        $code = preg_replace('~\@foreach\s*\(\s*(.+?)\s*\\):~is', '<?php foreach($1) { ?>', $code);
        $code = preg_replace('~\@endforeach~is', '<?php } ?>', $code);
        $code = preg_replace('~\@for\(\s*(.+?)\s*\\):~is', '<?php for($1) { ?>', $code);
        $code = preg_replace('~\@endfor~is', '<?php } ?>', $code);
        $code = preg_replace('~\@while\(\s*(.+?)\s*\\):~is', '<?php while($1) { ?>', $code);
        $code = preg_replace('~\@endwhile~is', '<?php } ?>', $code);
        $code = preg_replace('~\@do~is', '<?php do { ?>', $code);
        $code = preg_replace('~\@enddowhen\(\s*(.+?)\s*\\)~is', '<?php } while ($1); ?>', $code);
        return $code;
    }

    static function compileIfElse($code)
    {
        $code = preg_replace('~\@if\s*\(\s*(.+?)\s*\\):~is', '<?php if($1) { ?>', $code);
        $code = preg_replace('~\@elseif\(\s*(.+?)\s*\\):~is', '<?php } else if($1) { ?>', $code);
        $code = preg_replace('~\@else~is', '<?php } else { ?>', $code);
        $code = preg_replace('~\@endif~is', '<?php } ?>', $code);
        return $code;
    }

    static function compileEchos($code)
    {
        return preg_replace('~\{{\s*(.+?)\s*\}}~is', '<?php echo $1; ?>', $code);
    }

    static function compileEscapedEchos($code)
    {
        return preg_replace('~\{{{\s*(.+?)\s*\}}}~is', '<?php echo htmlentities($1, ENT_QUOTES, \'UTF-8\') ?>', $code);
    }

    static function sanitizeBlocks($code)
    {
        preg_match_all("/@block\((?:'|\")(.*?)(?:'|\")\)/", $code, $matchKeys, PREG_SET_ORDER);

        foreach ($matchKeys as $matchKey) {
            $matchKeyName = \Bones\Str::removeWords($matchKey[1], ["'", '"']);
            $code = preg_replace("/@block\((?:'|\")".$matchKeyName."(?:'|\")\)/", "@block('" . $matchKeyName . "')", $code);
        }

        return $code;
    }

    static function compileBlocks($code)
    {
        $matches = self::possibleParenthesesMatches($code, '@block', '@endblock');
        foreach ($matches as $value) {
            if (!array_key_exists($value[1], self::$blocks)) self::$blocks[$value[1]] = [];
            self::$blocks[$value[1]][] = trim($value[2]);
            $code = str_replace($value[0], '', $code);
        }
        return $code;
    }

    static function compileYield($code)
    {
        foreach (self::$blocks as $block => $value) {
            $subBlocks = '';
            foreach ($value as $subBlock) {
                $subBlocks .= $subBlock;
            }
            $code = preg_replace('/@plot\(\'' . $block . '\'\)/i', $subBlocks, $code);
            $code = preg_replace('/@plot\("' . $block . '\'\)/i', $subBlocks, $code);
            $code = preg_replace('/@plot\(\'' . $block . '"\)/i', $subBlocks, $code);
            $code = preg_replace('/@plot\("' . $block . '"\)/i', $subBlocks, $code);
        }
        return $code;
    }

    static function possibleParenthesesMatchesOneWay($code, $prefix)
    {
        preg_match_all('/' . $prefix . '\(\'?(.*?)\'\)/i', $code, $matches, PREG_SET_ORDER);

        if (empty($matches))
            preg_match_all('/' . $prefix . '\("?(.*?)"\)/i', $code, $matches, PREG_SET_ORDER);
        if (empty($matches))
            preg_match_all('/' . $prefix . '\(\'?(.*?)"\)/i', $code, $matches, PREG_SET_ORDER);
        if (empty($matches))
            preg_match_all('/' . $prefix . '\("?(.*?)\'\)/i', $code, $matches, PREG_SET_ORDER);

        return $matches;
    }

    static function possibleParenthesesMatches($code, $prefix, $suffix)
    {
        preg_match_all('/' . $prefix . '\(\' ?(.*?) ?\'\)(.*?)' . $suffix . '/is', $code, $matches, PREG_SET_ORDER);

        return $matches;
    }
}