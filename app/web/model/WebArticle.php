<?php

namespace app\web\model;

use app\data\Model;

class WebArticle extends Model{
	protected $pk="arid"; 

	public function category()
    { 
        return $this->hasOne('WebArticleCategory','cateid','cateid');
    } 
}