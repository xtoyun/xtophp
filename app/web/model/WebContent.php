<?php

namespace app\web\model;

use app\data\Model;
use think\Db;

class WebContent extends Model{
	protected $pk="abid"; 
	
	public function parent()
    { 
        return $this->hasOne('WebContent','cid','cid');
    }

    public function sublist()
    { 
        return $this->hasMany('WebContent','cid','cid');
    }

    public function ArticleCount(){
    	return Db::view('WebContent')->where('cid',$this->cid)->count(); 
    }
}