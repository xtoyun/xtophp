<?
namespace xto\data\dao;

use xto\data\model\ManagerModel; 
use xto\data\IDao;
use xto\data\Sql;
use think\Db;

class PayDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_pays','payid'); 
	} 

	public function getpay($type){
		$map=[
			'appid'=>$this->app->appid,
			'paytype'=>$type
		];
		return Sql::find($this->table,$map); 
	}  
}