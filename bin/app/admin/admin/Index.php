<?
namespace app\admin\admin;

use think\facade\Session; 
use think\Request;
use app\data\App;
use app\admin\Module;
use \xto\module\IModule;
use app\data\membership\Members as MembersModel;
use app\data\membership\Users as UsersModel;

class Index extends BaseController{
	public function index(){ 
 		$this->assign('members',MembersModel::getcount());
 		$this->assign('user_login_time',UsersModel::get_login_count());
		return $this->setblock(true)->setnav(false)->view("index/index");
	}

	public function logout(){
		Session::delete($this->app->manager_auth_name);
		$this->redirect("login/index");
	}
}