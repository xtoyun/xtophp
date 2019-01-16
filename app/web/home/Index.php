<?
namespace app\web\home;

use think\facade\Session;

class Index extends BaseController{
	public function _empty(){ 
		return $this->fetch($this->a);
	}
}