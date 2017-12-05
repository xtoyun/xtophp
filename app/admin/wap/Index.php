<?
namespace app\admin\wap;

class Index extends \xto\template\BaseController{
	public function index(){
		return $this->setblock(true)->setnav(false)->view("index/index");
	}

	public function logout(){
		Session::delete($this->app->manager_auth_name);
		$this->redirect("login/index");
	}
}