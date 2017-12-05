<?
namespace app\web\admin;

class Index extends BaseController{
	public function index(){
		return $this->setblock(true)->setnav(false)->fetch('');
	}
}