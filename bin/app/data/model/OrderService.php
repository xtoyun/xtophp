<?php

namespace app\data\model;

use app\data\Model;


class OrderService extends Model{
	protected $pk="osid"; 
	protected $autoWriteTimestamp = 'int';
	protected $updateTime = 'update_time';
	protected $createTime = 'create_time';
	
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
}