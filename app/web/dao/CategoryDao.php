<?php
namespace app\web\dao;

use xto\data\Sql;
use xto\App;
use xto\Util;
use xto\membership\context\Users;

use xto\data\IDao;
use think\Db;

class CategoryDao extends IDao{
	public function __construct() {
		parent::__construct('web_article_category','cateid'); 
	} 

	public function select(){
		$result = Db::view('web_article_category a','*')         
			->view('web_article_category b',['catename as pname'],'a.parent_cateid=b.cateid','LEFT')  
			->order($this->order)
			->where($this->map)
			->whereor($this->map_or) 
			->select();
		return $result;
	}
}