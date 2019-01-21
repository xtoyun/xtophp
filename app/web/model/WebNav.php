<?php

namespace app\web\model;

use app\data\Model;

class WebNav extends Model{
	protected $pk="nid"; 

	public function category()
    { 
        return $this->hasOne('WebNav','nid','nid');
    } 
    public function sublist()
    { 
        return $this->hasMany('WebNav','nid','nid');
    }

    public function ArticleCount(){
    	return Db::view('WebNav')->where('nid',$this->nid)->count(); 
    }
}