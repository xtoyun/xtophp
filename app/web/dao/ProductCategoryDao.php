<?php
namespace app\web\dao;

use app\common\dao\Sql;
use xto\common\lib\Util;
use app\common\dao\IDao; 
use think\Db;

class ProductCategoryDao extends IDao{
	protected $table='xto_web_product_category';
	protected $pk="cateid"; 
	 

	public function select($map = NULL, $order = NULL, $field = '*'){
		$result = Db::view('web_product_category a','*')         
			->view('web_product_category b',['catename as pname'],'a.parent_cateid=b.cateid','LEFT')  
			->order($this->order)
			->where($this->map)
			->whereor($this->map_or) 
			->select();
		return $result;
	}
}