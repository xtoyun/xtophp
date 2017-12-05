<?php
// +----------------------------------------------------------------------
// | zzstudio [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016 http://www.zzstudio.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: Byron Sampson <xiaobo.sun@gzzstudio.net>
// +----------------------------------------------------------------------
namespace app\common\behavior;

use think\Hook;
use xto\data\dao\ModuleDao;


class Hooks
{
    public function run(&$param = [])
    {  
        // 获取当前模块名称
        $module = '';
        $dispatch = request()->dispatch();
        if (isset($dispatch['module'])) {
            $module = $dispatch['module'][0];
        }


        $base_file = request()->baseFile();
        $base_dir  = substr($base_file, 0, strripos($base_file, '/') + 1);

        if(!defined('BIND_MODULE') || strtolower(BIND_MODULE) != 'install'){
            $dao=\xto\data\dao\ModuleDao::instance();
            $addons=$dao->getaddons();
            foreach ($addons as $key => $value) {
                $c=$value['addons'].'\Addons';
                if(class_exists($c)){
                    Hook::add($value['name'], new $c);
                } 
            }
        }
        if(defined('BIND') && BIND == 'admin') {
            config('default_module','admin');
            config('url_controller_layer', 'admin');
            config('url_html_suffix','');
            if(empty($module)){
                $module=config('default_module');
            }
            config('template.view_path', APP_PATH. $module. '/view/admin/');
        }
        else if(defined('BIND') && BIND == 'wap') {
            //config('default_module','wap');
            config('url_controller_layer', 'wap');
            config('url_html_suffix','');
            if(empty($module)){
                $module=config('default_module');

            }
            config('template.view_path', APP_PATH. $module. '/view/wap/');
        }
        else{
            if(empty($module)){
                $module=config('default_module');
            } 
            config('url_controller_layer', 'home');
            config('template.view_path', APP_PATH. $module. '/view/home/');
        }
    }
}