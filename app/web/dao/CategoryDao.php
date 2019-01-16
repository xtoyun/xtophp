<?php
namespace app\web\dao;

// use app\common\dao\Sql;
// use xto\common\lib\Util;
// use app\common\dao\IDao; 
// use app\common\data\Model; 
// use think\Db;

class CategoryDao extends \think\Model {
	//protected $table='xto_web_article_category';
	//protected $pk="cateid";  
 	
 	// public function getcateid(){

 	// }

	public function select($map = NULL, $order = NULL, $field = '*'){
		return CategoryDao::where($this->map)->select();
		// $result = Db::view('web_article_category a','*')         
		// 	->view('web_article_category b',['catename as pname'],'a.parent_cateid=b.cateid','LEFT')  
		// 	->order($this->order)
		// 	->where($this->map)
		// 	->whereor($this->map_or) 
		// 	->select();
		// return $result;
	}
}