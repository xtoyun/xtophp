<?php
namespace app\web\dao;
 
use app\common\data\Model; 


class WebArticleCategory extends Model {
	protected $pk="cateid";  

	// 模型初始化
    protected static function init()
    {
        //TODO:初始化内容
    }

	public function parent()
    { 
        return $this->hasOne('WebArticleCategory','parent_cateid','cateid');
    }
}