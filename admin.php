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

// 定义应用目录
define('APP_PATH', __DIR__ . '/app/');
 
// 开启系统行为
define('APP_HOOK', true);
// 检查是否安装
if(!is_file('./data/install.lock')){
    define('BIND_MODULE', 'install');
}
// 定义入口为admin
define('BIND', 'admin');
// 加载框架引导文件
//require __DIR__ . '/thinkphp/start.php';
require __DIR__ . '/thinkphp/base.php';

// 关闭路由
\think\App::route(false);

// 执行应用
\think\App::run()->send();