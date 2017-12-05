<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\Route;

Route::rule('admin/index','admin/index/index');  

Route::rule('/article/show/:id','index.php/web/article/show'); 
Route::rule('/article/list/:nid','index.php/web/article/list');
Route::rule('/article/category/:nid','index.php/web/article/category');