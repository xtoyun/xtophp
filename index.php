<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
namespace think;
error_reporting(E_ALL);
ini_set('display_errors', '1');
// 加载基础文件
require __DIR__ . '/thinkphp/base.php';

// 开启系统行为
define('APP_HOOK', true);
// 检查是否安装
if(!is_file('./data/install.lock')){
    define('BIND_MODULE', 'install');
}

define('APP_PATH', __DIR__ . '/app/');

// 支持事先使用静态方法设置Request对象和Config对象

// 执行应用并响应
//Container::get('app')->run()->send();
Container::get('app', [APP_PATH])->run()->send();