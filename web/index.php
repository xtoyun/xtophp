<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
// if ($_SERVER['HTTPS'] != "on" && $_SERVER["SERVER_NAME"]=="www.mmonen.com") {
//        $index = strstr($_SERVER['REQUEST_URI'],"admin.php");
//        if($index){
//            $str = '/admin.php'.preg_replace('/\/admin.php/', '', $_SERVER['REQUEST_URI']);
//            $url = "https://" . $_SERVER["SERVER_NAME"] . $str;
//            header("location:".$url);
//        }
// }
namespace think;
error_reporting(E_ALL);
ini_set('display_errors', '1');
define('WEB_PATH', __DIR__ . DIRECTORY_SEPARATOR);
define('BIND', 'home');
define('APP_PATH', dirname(realpath(__DIR__)) . DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR);

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

// 加载框架引导文件
require APP_PATH . '../thinkphp/base.php';

Container::get('app', [APP_PATH])->run()->send();