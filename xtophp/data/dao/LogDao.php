<?
namespace xto\data\dao;

use xto\data\model\ManagerModel; 
use xto\data\IDao;
use xto\Util;
use xto\App;
use think\Db;
use think\Request;
use xto\membership\context\Users;

class LogDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_logs','logid'); 
	} 

	public function writelog($description){ 
		$data=[
			'ip' 			=> Util::getip(),
			'description'	=> $description,
			'createdate'	=> Util::getdate(),
			'url'			=> Request::instance()->url(true), 
			'appid'			=> App::appid(),
			'username'		=> Users::getLoginUserNameByManager()
			];
		return $this->save($data); 
	}
}