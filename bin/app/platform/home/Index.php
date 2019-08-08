<?
namespace app\platform\home;

use think\facade\Session;

class Index extends \think\Controller{
	public function index(){ 
		return $this->fetch('login/index');
	}
}