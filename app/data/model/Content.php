<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class Content extends Model{
	protected $pk='cid';  
	protected $autoWriteTimestamp = 'datetime';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';
    
}