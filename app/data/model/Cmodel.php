<?php

namespace app\data\model;
 

class Cmodel extends \app\data\Model{
	protected $pk='mid'; 

	public function category()
    { 
        return $this->hasOne('Cmodel','mid','mid');
    } 
    public function sublist()
    { 
        return $this->hasMany('Cmodel','mid','mid');
    }

    public function ArticleCount(){
    	return Db::view('Cmodel')->where('mid',$this->mid)->count(); 
    }
}