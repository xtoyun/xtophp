<?php
namespace app\web\dao;

use app\common\dao\Sql;
use xto\common\lib\Util;
use app\common\dao\IDao; 
use think\Db;
 
class ModelDao extends IDao{
	protected $table='xto_web_model';
	protected $pk="mid"; 
	
	public function get_by_table($tablename){
		$map['tablename']=$tablename;
		$result = Db::view($this->table,'*') 
			->where($map)
			->find();
		return $result;
	}
}