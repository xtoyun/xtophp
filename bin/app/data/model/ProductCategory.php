<?php

namespace app\data\model;

use app\data\Model;


class ProductCategory extends Model{
	protected $pk="cateid"; 

	public function parent(){

		return $this->hasone('ProductCategory','cateid','parent_cateid');
	}
	public function sublist(){

		return $this->hasmany('ProductCategory','parent_cateid','cateid');
	}
	public function ArticleCount(){

		return Db::view('ProductCategory')->where('cateid',$this->cateid)->count();
	}

	public function Products()
    { 
        return $this->hasMany('Product','cateid','cateid');
    }

}