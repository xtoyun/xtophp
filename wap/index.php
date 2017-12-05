<?php  
// 定义应用目录
define('APP_PATH',str_replace('\wap', '',__DIR__) . '/app/');
define('APP_HOOK', false);
define('BIND', 'wap');
require __DIR__ . '/../thinkphp/base.php';
\think\App::route(false);
\think\App::run()->send();