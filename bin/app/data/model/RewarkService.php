<?php

namespace app\data\model;

use app\data\Model;


class RewarkService extends Model{
	protected $pk="rsid"; 
	protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';
    
}