<?php

namespace addons\cms\model;

use data\Model;
use think\Db;

class WebArticleCategory extends Model{
	protected $pk="cateid"; 
	
	public function parent()
    {    
        return $this::where('cateid',$this->parent_cateid)->find();
        //return $this->belongsTo('WebArticleCategory','cateid','parent_cateid');   
    }

    public function sublist()
    { 
        return $this->hasMany('WebArticleCategory','parent_cateid','cateid');
    }

    public function Articles()
    { 
        return $this->hasMany('WebArticle','cateid','cateid');
    }

    public function ArticleCount(){
    	return Db::view('Article')->where('cateid',$this->cateid)->count(); 
    }

    public function getParentCateidAttr($value)
    {  
        if($value<=0) return -1;
        return $value;
    }

    public function getCateidStrAttr($value)
    {
        return $this->getCates($this);
    }

    private $_cates=[];
    private function getCates($category,$index=0){
        if($category){
            $this->_cates[$index]=$category->cateid;
            $index++;
            $this->getCates($category->parent(),$index);
        } 
        asort($this->_cates); 

        $str="";
        foreach ($this->_cates as $key => $value) {
            $str.=$value.',';
        }
        return substr($str, 0, -1); 
    }
}