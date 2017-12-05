<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
function gourl($url,$paras){
	$url=url($url).'?'.$paras;
	header("Location:$url");
	return;
}

/**
 * 获取插件类的类名
 * @param strng $name 插件名
 * @param string $ext 扩展名
 */
function get_addon_class($name, $ext = EXT)
{
    // 初始化命名空间及类名
    $class = "\\addons\\{$name}\\" . ucfirst($name);
    return new $class;
}

/**
 * 处理插件钩子
 * @param string $hook   钩子名称
 * @param mixed $params 传入参数
 * @return void
 */
function hook($hook, $params = [])
{
    // 钩子调用
    \think\Hook::listen($hook, $params);
}