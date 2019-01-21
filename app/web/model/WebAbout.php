<?php

namespace app\web\model;

use app\data\Model;
use think\Db;

class WebAbout extends Model{
	protected $pk="abid"; 
	
	public function parent()
    { 
        return $this->hasOne('WebAbout','abid','parent_abid');
    }

    public function sublist()
    { 
        return $this->hasMany('WebAbout','parent_abid','abid');
    }

    public function ArticleCount(){
    	return Db::view('WebAbout')->where('abid',$this->abid)->count(); 
    }
}