<?
namespace app\platform\home;

use think\facade\Session;

class Login extends \think\Controller{
	public function index(){ 
		return $this->fetch('login/index');
	}
}