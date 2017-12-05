<?
namespace xto\data\dao;

use xto\data\model\ManagerModel; 
use xto\data\IDao;
use xto\Util;
use xto\App;
use think\Db;
use think\Request;
use xto\membership\context\Users;

class RoleDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_roles','roleid'); 
	} 

	public function getroles($pagezie){
		return Db::view('xto_roles','*') 
			->where($this->map)
			->whereor($this->map_or)
			->order($this->order)
			->paginate($pagezie);
	}

	public function getrole_data($roleid){
		return Db::table('xto_roles')
			->where('roleid',$roleid)
			->where('appid',$this->app->appid)
			->find();
	}
}