<?php

namespace app\web\model;

use app\data\Model;

class WebLink extends Model{
	protected $pk="lid"; 

	public function category()
    { 
        return $this->hasOne('WebLink','lid','lid');
    } 
    public function sublist()
    { 
        return $this->hasMany('WebLink','lid','lid');
    }

    public function ArticleCount(){
    	return Db::view('WebLink')->where('lid',$this->lid)->count(); 
    }
}