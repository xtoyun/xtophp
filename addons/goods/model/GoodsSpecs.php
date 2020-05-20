<?php

namespace addons\goods\model;

use data\Model;
use think\Db;

class GoodsSpecs extends Model{
	 protected $pk="spid"; 
    protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';

    public function getCreateTimeAttr($value)
    {
        if(is_numeric($value)){
            $this->_create_time=$value;
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

    public function Goods()
    { 
        return $this->hasMany('Goods','pid','pid');
    }
}