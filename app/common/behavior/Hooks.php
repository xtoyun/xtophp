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

use think\facade\App;
use think\facade\Hook;
use think\Db;
use data\model\SysHooks as HooksModel;
use data\model\SysAddons as AddonsModel;
use data\model\SysConfig as Config;
use think\Loader;


class Hooks
{
    public function run($param = [])
    { 
        HooksModel::overall(false)->find(1);
        // 钩子数据
        $data = cache('hooks');
        if (true) {
            $addons_model = new AddonsModel(); 
            $hooks = HooksModel::overall(false)->column('addons', 'name');
            foreach ($hooks as $key => $value) {
                if ($value) {
                    $map['status'] = 1;
                    $names = explode(',', $value);
                    $data = AddonsModel::overall(false)->where($map)->whereIn('name',$names)->column('name', 'id');
                    if ($data) {

                        $addons = array_intersect($names, $data);
     
                        Hook::add($key, array_map('get_addon_class', $addons));
                    }
                }
            } 
            cache('hooks', Hook::get());
        } else {
            Hook::import($data, false);
        } 

        $module='';
        $controller ='';
        $action     ='';
        $pathinfo   = str_replace('admin.php/', '', request()->pathinfo());
        $pathinfo_array = explode('/', $pathinfo);
  
        if(count($pathinfo_array)>=1){ 
            //获取模块
            if(isset($pathinfo_array[0])){
                $module     =$pathinfo_array[0];
            } 
            //获取controller
            if(isset($pathinfo_array[1])){
                $controller =$pathinfo_array[1];
            }
            //获取action
            if(isset($pathinfo_array[2])){
                $action     =$pathinfo_array[2];
            }
        } 

          //初始化模块值
        if (empty($module)) $module     =config('default_module');
        if (empty($controller)) $controller =config('default_controller');//默认控制器名称
        if (empty($action)) $action     =config('default_action');//默认提交名称

        $url_controller_layer='';
        $view_path='';
        $url_html_suffix='';
        $template_view_path='';
        //插件是否存在
        $addons_info=AddonsModel::overall(false)->where(['name'=>$module,'status'=>1])->find();
        if($addons_info){
            $root_app=App::setNamespace(ADDON_DIR); 
            App::setModulePath(ADDON_PATH);
            $template_view_path=ADDON_PATH;
        }else{
            $template_view_path=APP_PATH;
        }  
        switch (BIND) {
            case 'admin':
                $url_controller_layer='admin';
                $view_path=$template_view_path.$module.DS.'view'.DS.$url_controller_layer.DS;
                break; 
            default:
                //加了皮肤处理
              
                $url_controller_layer='home';
                $view_path=$template_view_path.$module.DS.'view'.DS.$url_controller_layer.DS;
                  $theme=config('app.web.theme');
                if($module=='web'){
                     if (isset($this->config['web_template'])) {
                        $theme=$this->config['web_template'];
                    }
                    if(!empty($theme)){
                        $view_path=$view_path.$theme.DS;
                    }
                    //获取相关参数
                    config('app.web.theme',$theme);
                }
               
                break;
        }
        config('url_controller_layer', $url_controller_layer);
        config('url_html_suffix',$url_html_suffix); 
        config('template.view_path', $view_path); 
    }
}