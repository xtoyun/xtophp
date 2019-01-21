<?php

namespace app\web\model;

use app\data\Model;
use think\Db;

class WebProduct extends Model{
	protected $pk="pid"; 
	
	public function parent()
    { 
        return $this->hasOne('WebProduct','pid','pid');
    }

    public function sublist()
    { 
        return $this->hasMany('WebProduct','pid','pid');
    }

    public function ArticleCount(){
    	return Db::view('WebProduct')->where('pid',$this->pid)->count(); 
    }
}