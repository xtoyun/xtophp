<?
namespace app\web\home;

class Index extends BaseController{
	public function _empty(){ 
		return $this->fetch($this->a);
	}
}