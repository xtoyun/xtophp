<?php

namespace app\data;
 
use think\Db;

abstract class Model extends \think\Model{ 
 
	static function selectpage($pagesize,$where=null,$order=null,$field='*'){
        $result= self::view('',$field,$where,$order)->paginate($pagesize);
        return $result;
	} 

    static function view($table='',$field="*",$where='',$order='',$joins=[]){
        $instance=new static(); 
        $where=$instance->getc($where); 
        if (empty($table)) {
            $table=$instance->name;
         } 
    
        $g=Db::view($table,$field)->order($order)->where($where);
        foreach ($joins as $key => $value) {
            $g->view($value[0],$value[1],$value[2]); 
        } 
        return $g;
    }

    public function save($data = [], $where = [], $sequence = NULL){
    	return parent::save($data,$where,$sequence);
    }

    public function getc($where,$table=''){
        if (empty($table)) {
            $table=$this->getTable();
        }
        switch (gettype($where)) {
           case 'string':
                if(empty($where)){
                    $where = $table.'.appid='.appid();
                }else{
                    $where .= " and $table.appid=".appid();
                }
               
               break;
           case 'array':
               if (!isset($where['appid']) || is_null($where['appid'])) {
                    $where["$table.appid"]=appid();
                } 
               break;
           default:
               # code...
               break;
       }
       return $where;
    }

    // static function find($id=null){ 
    //     return self::where('')->find($id);
    // }

    // static function get($id=null){
    //     return self::where('')->get($id);
    // }

    static function where($where=[],$is_bin=true){
        if ($is_bin) {
          $instance=new static(); 
          $where=$instance->getc($where); 
        }
       return parent::where($where);
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