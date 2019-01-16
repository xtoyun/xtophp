<?
namespace app\admin\admin;

use think\Session;
use think\Request;
use app\data\App;
use app\admin\Module;
use \xto\module\IModule;

class Index extends BaseController{
	public function index(){
		return $this->setblock(true)->setnav(false)->view("index/index");
	}

	public function logout(){
		Session::delete($this->app->manager_auth_name);
		$this->redirect("login/index");
	}
}