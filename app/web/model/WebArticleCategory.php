<?php

namespace app\web\model;

use app\data\Model;
use think\Db;

class WebArticleCategory extends Model{
	protected $pk="cateid"; 
	
	public function parent()
    { 
        return $this->hasOne('WebArticleCategory','cateid','parent_cateid');
    }

    public function sublist()
    { 
        return $this->hasMany('WebArticleCategory','parent_cateid','cateid');
    }

    public function ArticleCount(){
    	return Db::view('WebArticle')->where('cateid',$this->cateid)->count(); 
    }
}