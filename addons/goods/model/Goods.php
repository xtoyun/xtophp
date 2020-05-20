<?php

namespace addons\goods\model;

use data\Model;
use think\Db;

class Goods extends Model{
	 protected $pk="pid"; 
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

    public function u_paras(){ 
      return json_decode($this->paras,true);
    }
 

     

       public function category()
    {  
        return $this->belongsTo('GoodsCategory','cateid','cateid');
    } 

       public function specs()
        {

            return $this->hasMany('GoodsSpecs','pid','pid'); 
        } 

       static function selectpage($pagesize,$where=null,$order=null,$field='*'){
          return parent::alias('a')->field("a.".$field.',b.catename')->where($where)->order($order)
                  ->join('GoodsCategory b','b.cateid=a.cateid')
                  ->paginate($pagesize);
       }  
}