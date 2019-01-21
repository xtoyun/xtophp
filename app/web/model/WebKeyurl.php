<?php

namespace app\web\model;

use app\data\Model;

class WebKeyurl extends Model{
	protected $pk="kid"; 

public function parent(){

	return $this->hasone('WebKeyurl','kid','kid');
}
public function sublist(){

	return $this->hasmany('WebKeyurl','kid','kid');
}
public function ArticleCount(){

	return Db::view('WebKeyurl')->where('kid',$this->kid)->count();
}

}