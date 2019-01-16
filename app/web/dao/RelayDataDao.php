<?php
namespace app\web\dao;

use app\common\dao\Sql;
use xto\common\lib\Util;
use app\common\dao\IDao; 
use think\Db;

class RelayDataDao extends IDao{
	protected $table='xto_web_relays_data';
	protected $pk="rdid"; 

	public function getlist($rid){
		$map['rid']=$rid;
		$result = Db::view('web_relays_data a','*') 
			->where($map)
			->order('rdid','desc')
			->select();
		return $result;
	} 
}