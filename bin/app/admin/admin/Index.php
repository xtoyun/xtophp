<?
namespace app\admin\admin;

use think\facade\Session; 
use think\Request;
use app\data\App;
use app\admin\Module;
use \xto\module\IModule;
use app\data\membership\Members as MembersModel;
use app\data\membership\Users as UsersModel;
use app\data\model\Article as ArticleModel;
use app\data\model\Product as ProductModel;

class Index extends BaseController{
	public function index(){ 
 
 		$this->assign('view_members',MembersModel::getcount());
 		$this->assign('view_login_time',UsersModel::get_login_count());
 		$this->assign('view_articles',ArticleModel::get_counts());
 		$this->assign('view_products',ProductModel::get_counts());

		return $this->setblock(true)->setnav(false)->view("index/index");
	}

	public function logout(){
		Session::delete($this->app->manager_auth_name);
		$this->redirect("login/index");
	}
}