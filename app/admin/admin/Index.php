<?
namespace app\admin\admin;

use think\Session;
use think\Request;
use xto\App;
use app\admin\Module;
use \xto\module\IModule;
use xto\data\service\HookService;

class Index extends BaseController{
	public function index(){
		return $this->setblock(true)->setnav(false)->view("index/index");
	}

	public function logout(){
		Session::delete($this->app->manager_auth_name);
		$this->redirect("login/index");
	}
}