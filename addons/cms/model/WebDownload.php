<?php

namespace addons\cms\model;

use data\Model;
use think\Db;

class WebDownload extends Model{
	protected $pk='did';
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