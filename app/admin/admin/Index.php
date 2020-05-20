<?
namespace app\admin\admin;

use think\facade\Session; 
use think\facade\Cache; 
use think\Request;
use data\model\SysMenu as MenuModel;

class Index extends BaseController{

	public function message(){
		return $this->fetch('index/message');
	}
	public function upload(){
		
		return $this->fetch('index/upload');
	}
	public function theme(){
		return $this->fetch('index/theme');
	}
	public function index(){
 		$appid=appid();
 		$menus=MenuModel::where("(appid=$appid or is_sys=1) and is_menu=1")->order('sort asc')->select();
 		$this->assign('menu_list',$menus);
		return $this->setblock(true)->setnav(false)->view("index/index");
	}

	public function logout(){
		Session::delete($this->app->manager_auth_name);
		$this->redirect("login/index");
	}

	public function console(){
		return $this->view('index/console');
	}

	public function test(){
		return $this->setblock(true)->setnav(false)->view("index/test");
	}
}