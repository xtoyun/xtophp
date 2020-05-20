<?php

namespace data\model;

use data\Model;
use think\Db;

class SysMenu extends Model{
	protected $pk='menu_id';
    protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';
    protected $is_over=false;
    
    public function getCreateTimeAttr($value)
    {
        if(is_numeric($value)){
            return date("Y-m-d H:i:s" ,(int)$value);
        }else{
            return $value;
        }
    }

    public function getUpdateTimeAttr($value)
    {
        if(is_numeric($value)){
            return date("Y-m-d H:i:s" ,(int)$value);
        }else{
            return $value;
        }
    }

    //上级菜单
    public function parent_menu()
    { 
        return $this->where(['menu_id'=>$this->parent_id])->find();
        //return $this->belongsTo('Menu');
    }

    //下级菜单
    public function sub_menus()
    { 
        return $this->where(['parent_id'=>$this->menu_id])->select(); 
    }
 
}