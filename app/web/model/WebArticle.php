<?php

namespace app\web\model;

use app\data\Model;
use think\Db;

class WebArticle extends Model{
	protected $pk="abid"; 
	
	public function parent()
    { 
        return $this->hasOne('WebArticle','arid','arid');
    }

    public function sublist()
    { 
        return $this->hasMany('WebArticle','arid','arid');
    }

    public function ArticleCount(){
    	return Db::view('WebArticle')->where('arid',$this->arid)->count(); 
    }
}