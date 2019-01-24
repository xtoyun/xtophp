<?php

namespace app\web\model;

use app\data\Model;

class WebModel extends Model{
	protected $pk='mid'; 

	public function category()
    { 
        return $this->hasOne('WebModel','mid','mid');
    } 
    public function sublist()
    { 
        return $this->hasMany('WebModel','mid','mid');
    }

    public function ArticleCount(){
    	return Db::view('WebModel')->where('mid',$this->mid)->count(); 
    }
}