<?php

namespace app\web\model;

use app\data\Model;


class WebProductCategory extends Model{
	protected $pk="cateid"; 

public function parent(){

	return $this->hasone('WebProductCategory','cateid','parent_cateid');
}
public function sublist(){

	return $this->hasmany('WebProductCategory','parent_cateid','cateid');
}
public function ArticleCount(){

	return Db::view('WebProductCategory')->where('cateid',$this->cateid)->count();
}

}