<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class About extends Model{
	protected $pk='abid'; 
	
	public function parent()
    { 
        return $this->hasOne('WebAbout','abid','abid');
    }

    public function sublist()
    { 
        return $this->hasMany('WebAbout','abid','abid');
    }

    public function ArticleCount(){
    	return Db::view('About')->where('abid',$this->abid)->count(); 
    }

    //用来分页查询数据源
    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
        $result = Db::view('About',$field)
            ->view('Content','*','About.cid=Content.cid')  
            ->order($order)
            ->where($where) 
            ->paginate($pagesize);
        return $result;
    }
}