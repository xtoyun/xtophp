<?php

namespace app\web\model;

use app\data\Model;
use think\Db;

class WebContent extends Model{
	protected $pk='cid';  
	protected $autoWriteTimestamp = 'datetime';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';
    
}