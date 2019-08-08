<?
namespace app\platform\home;

use think\facade\Session;

class Reg extends \think\Controller{
	public function index(){ 
		return $this->fetch('reg/index');
	}

	public function reg_post(){
		if (request()->ispost()) {
			return message('test',false);
		}
	}
}