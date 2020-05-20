<?
namespace app\admin\admin;

use data\model\SysMenu as MenuModel; 

class Account extends BaseController{

	public function index(){
		return $this->fetch('account/index');
	}
 
 	public function password(){
		return $this->fetch('account/password');
	}

	public function info(){
		return $this->fetch('account/info');
	}
}