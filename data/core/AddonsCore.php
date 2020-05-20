<?php

namespace data\core;
 
use think\Db;
use data\model\SysAddons as AddonsModel;
use data\model\SysMenu as MenuModel;

class AddonsCore{ 
    protected $addons;

	public function get_addons(){
		$addon_dir = ADDON_PATH;
		$dirs = array_map('basename', glob($addon_dir . '*', GLOB_ONLYDIR));
		if ($dirs === FALSE || !file_exists($addon_dir)) {
            $this->error = '插件目录不存在';
            return FALSE;
        }
        $addons = []; 
        $list = AddonsModel::whereIn('name',$dirs)->where(['status'=>1])->order('create_time desc')->select(); 
        foreach ($dirs as $key => $value) {
            if (!isset($addons[$value])) {

                $class = get_addon_class($value);
                if (!class_exists($class)) {
                    // trace($class);
                    // \think\Log::record('插件' . $value . '的入口文件不存在！');
                    continue;
                } 
                $obj = new $class();  
                $uninstall = 0;//没有安装
                $status=0;

                foreach ($list as $key_o => $value_o) {
                	if($obj->name==$value_o['name']){
                		 $uninstall = 1;//已安装
                         $status=1;
                		 break;
                	}
                } 

                $result=[
                    'name'=>$obj->info['name'], 
                    'title' => $obj->info['title'],
                    'description' => $obj->info['description'],
                    'status' => $status,
                    'author' => $obj->info['author'],
                    'version' => $obj->info['version'],
                    'img'=>$obj->info['img'],
                    'icon'=>(isset($obj->info['icon'])?$obj->info['icon']:''),
                    'uninstall'=>$uninstall
                ];
                array_push($addons,$result);
            }
        } 
        $total_count = count($addons);
        $page_count = 1;
        $key_start = 0;
        $key_end = $total_count - 1;
        $res_array['data'] = $addons;
        $res_array['total_count'] = $total_count;
        $res_array['page_count'] = $page_count;
        return $res_array;
	}

    public function uninstall_addons($name){
        $this->addons=AddonsModel::where(['name'=>$name])->find();
        if($this->addons){
            //插件方法
            $class = get_addon_class($name);
            if (class_exists($class)) {
                $result=new $class;
                //删除所有菜单记录
                MenuModel::where(['module'=>$name])->delete();
                $result->uninstall();//执行卸载
            }
            //插入菜单
            return $this->addons->delete();
        }
    }

    public function install_addons($name,$title='',$description='插件',$icon='',$config='',$author='xtophp',$version='0.1',$type=0,$is_sys=0){
        $this->addons=AddonsModel::where(['name'=>$name])->find();
        if(!$this->addons){
            $this->addons=new AddonsModel;
            $this->addons->name=$name;
            $this->addons->description=$description;
            $this->addons->config=$config;
            $this->addons->author=$author;
            $this->addons->version=$version;
            $this->addons->status=1;
            $this->addons->type=$type;
            $this->addons->is_sys=$is_sys;
            $this->addons->title=$title;
            $this->addons->icon=$icon;

            $class = get_addon_class($name);
            if (class_exists($class)) {
                $result=new $class;

                $config_dao=$result->getConfig();
                $menus=$config_dao->menu();
                if($menus){
                    foreach ($menus as $key => $value) {
                        //查找现有菜单
                        $find_menu_info=MenuModel::where(['menu_name'=>$name])->find();
                        if(!$find_menu_info){
                            $menu_info=new MenuModel();
                           
                           if($value['parent']){
                                $parent_menu_info=MenuModel::where($value['parent'])->find();
                                if($parent_menu_info){
                                    $menu_info->parent_id=$parent_menu_info->menu_id;
                                    $menu_info->parent_ids=$parent_menu_info->menu_id;
                                }
                            } 
                            if(empty($menu_info->parent_id)){
                                $menu_info->parent_id=-1;
                            }
                            if(empty($value['module'])){
                                $menu_info->module=$name;
                            }
                            //模块锁定id
                            $menu_info->lock_id=$name;
                            $menu_info->appid=appid();
                            $menu_info->save($value);
                        }
                    }
                }
                
                if(isset($config_dao->exesql)){
                    //执行sql
                    $sql_text=$config_dao->exesql();
                }
                


                $result->install();//执行卸载
            }
            return $this->addons->save();
        }
        return 0;//更新失败
    }
}