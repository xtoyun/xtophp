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
        return date("Y-m-d H:i:s" ,$value);
    }

    public function getUpdateTimeAttr($value)
    {
        return date("Y-m-d H:i:s" ,$value);
    }

    public function content()
    {  
        return $this->belongsTo('Content','cid','cid');
    } 

	 //直接获取所有数据信息,便于读取
    static function getinfo($id){
        $result=self::find($id);
        return array_merge($result->toArray(),($result->content)?$result->content->toArray():[]);
    }

    //用来分页查询数据源
    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
        $result = Db::view('About',$field)
            ->view('Content','*','About.cid=Content.cid') 
             ->view('Nav','title as n_title','Nav.nid=About.nid')  
            ->order($order)
            ->where($where) 
             ->withAttr('update_time', function($value, $data) {
                return date("Y-m-d H:i:s" ,$value);
            })
             ->withAttr('create_time', function($value, $data) {
                return date("Y-m-d H:i:s" ,$value);
            })
            ->paginate($pagesize);
        return $result;
    }
}