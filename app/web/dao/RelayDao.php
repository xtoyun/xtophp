<?php
namespace app\web\dao;

use app\common\dao\Sql;
use xto\common\lib\Util;
use app\common\dao\IDao; 
use think\Db;

class RelayDao extends IDao{
	protected $table='xto_web_relays';
	protected $pk="rid"; 
 
}