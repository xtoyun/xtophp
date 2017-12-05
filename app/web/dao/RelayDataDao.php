<?php
namespace app\web\dao;

use xto\data\Sql;
use xto\App;
use xto\Util;
use xto\membership\context\Users;

use xto\data\IDao;
use think\Db;

class RelayDataDao extends IDao{
	public function __construct() {
		parent::__construct('web_relays_data','rdid'); 
	} 

	public function getlist($rid){
		$map['rid']=$rid;
		$result = Db::view('web_relays_data a','*') 
			->where($map)
			->order('rdid','desc')
			->select();
		return $result;
	} 
}