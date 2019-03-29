<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class Content extends Model{
	protected $pk='cid';  
	protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';

    public function getCreateTimeAttr($value)
    {
        return date("Y-m-d H:i:s" ,$value);
    }

    public function getUpdateTimeAttr($value)
    {
        return date("Y-m-d H:i:s" ,$value);
    }
    
}