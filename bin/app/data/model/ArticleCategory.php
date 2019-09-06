<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class ArticleCategory extends Model{
	protected $pk="cateid"; 
	
	public function parent()
    { 
        return $this->belongsTo('ArticleCategory','cateid','parent_cateid');
    }

    public function sublist()
    { 
        return $this->hasMany('ArticleCategory','parent_cateid','cateid');
    }

    public function Articles()
    { 
        return $this->hasMany('Article','cateid','cateid');
    }

    public function ArticleCount(){
    	return Db::view('Article')->where('cateid',$this->cateid)->count(); 
    }
}