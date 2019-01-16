<?php

namespace app\data;
 
use think\Db;

abstract class Model extends \think\Model{ 

 	private static $where=[];
 	private static $appid;

 	protected static function init()
    {
        self::$appid=App::appid();
    }

	static function selectpage($pagesize,$where=null,$order=null,$field='*'){
		return self::where($where)->order($order)->field($field)->paginate($pagesize);
	}

    public function save($data = [], $where = [], $sequence = NULL){
    	if (!isset($data['appid']) || is_null($data['appid'])) {
			$data['appid']=self::$appid;
		} 
    	return parent::save($data,$where,$sequence);
    }

    public function delete($id=null){
    	return parent::delete($id);
    }

    public function saveorupdate($id,$data){
        $isupdate=false;
        if (self::find($id)) {
           $isupdate=true;
        }
       return $this->isUpdate($isupdate)
        ->save($data);
    }
}