<?
namespace app\web\admin;

class Index extends BaseController{
	public function index(){ 
		return $this
				->setblock(false)
				->setnav(false)
				->fetch('index/index');
	}
}