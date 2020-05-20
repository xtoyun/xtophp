<?php

namespace addons\cms\model;

use data\Model;


class WebProductCategory extends Model{
	protected $pk="cateid"; 

	public function parent(){
        return $this::where('cateid',$this->parent_cateid)->find();
		//return $this->hasone('WebProductCategory','cateid','parent_cateid');
	}
	public function sublist(){
		return $this::where('parent_cateid',$this->cateid)->select();
		//return $this->hasMany('ProductCategory','parent_cateid','cateid');
	}

	//获取所有产品，建议少用
	public function Products()
    { 
        return $this->hasMany('WebProduct','cateid','cateid');
    }

    public function getParentCateidAttr($value)
    {  
        if($value<=0) return -1;
        return $value;
    }


    /*获取所有子id*/
    /*返回：数组*/
    public function getids(){
    	$ids=[];
    	foreach ($this->sublist() as $key => $value) {
    		$ids[$key]=$value['cateid'];
    	}
    	return $ids;
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