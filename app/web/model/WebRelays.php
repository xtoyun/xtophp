<?php

namespace app\web\model;

use app\data\Model;

class WebRelays extends Model{
	protected $pk="rid"; 

	public function category()
    { 
        return $this->hasOne('WebRelays','rid','rid');
    } 
    public function sublist()
    { 
        return $this->hasMany('WebRelays','rid','rid');
    }

    public function ArticleCount(){
    	return Db::view('WebRelays')->where('rid',$this->rid)->count(); 
    }
}