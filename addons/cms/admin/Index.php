<?
namespace app\admin\admin;

use think\facade\Session; 
use think\facade\Cache; 
use think\Request;
use data\membership\SysMembers as MembersModel;
use data\membership\SysUsers as UsersModel;
use data\model\WebArticle as ArticleModel;
use data\model\WebProduct as ProductModel;
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
 
 		// $this->assign('view_members',MembersModel::getcount());
 		// $this->assign('view_login_time',UsersModel::get_login_count());
 		// $this->assign('view_articles',ArticleModel::get_counts());
 		// $this->assign('view_products',ProductModel::get_counts());

 		$appid=appid();

 		$menus=MenuModel::where("appid=$appid or is_sys=1")->order('sort asc')->select();
 		$this->assign('menu_list',$menus);

		return $this->setblock(true)->setnav(false)->view("index/index");
	}

	public function logout(){
		Session::delete($this->app->manager_auth_name);
		$this->redirect("login/index");
	}

	public function console(){
		$this->assign('view_members',MembersModel::getcount());
 		$this->assign('view_login_time',UsersModel::get_login_count());
 		$this->assign('view_articles',ArticleModel::get_counts());
 		$this->assign('view_products',ProductModel::get_counts());
		return $this->view('index/console');
	}

	public function test(){
		return $this->setblock(true)->setnav(false)->view("index/test");
	}
}