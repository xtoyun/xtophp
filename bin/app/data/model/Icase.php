<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class Icase extends Model{
	protected $pk='icid';
    protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';
    
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

    //用来分页查询数据源
    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
        return parent::alias('Download')->field("*")->where($where)->order($order) 
                  ->paginate($pagesize);
      
    }
}