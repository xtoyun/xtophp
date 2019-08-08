<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class About extends Model{
	protected $pk='abid';
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

    public function content()
    {  
        return $this->belongsTo('Content','cid','cid');
    } 

	 //直接获取所有数据信息,便于读取
    // static function getinfo($id){
    //     $result=self::find($id);
    //     return array_merge($result->toArray(),($result->content)?$result->content->toArray():[]);
    // }

    //用来分页查询数据源
    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
        return parent::alias('About')->field("*")->where($where)->order($order)
                  //->join('Content','Content.cid=About.cid') 
                  //->join('Nav','Nav.nid=About.nid')
                  ->paginate($pagesize);
      
    }

    // public function save($data = [], $where = [], $sequence = NULL){
    //     //重写内容
    //     //$data['update_time']=fdate();
    //     $content=new Content();
    //     $content->appid=appid();
    //     if (!empty($this->cid)) {
    //         $content=$this->content;
    //     }
    //     $this->appid=appid();
    //     //创建成功后，保存cid
    //     if($content->allowField(true)->save($data)){
    //         $data['cid']=$content->cid;
    //     }
        
    //     return parent::save($data,$where,$sequence);
    // }
}