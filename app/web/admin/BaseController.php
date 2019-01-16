<?
namespace app\web\admin;

use app\data\App;
use app\data\membership\Users;
use think\facade\Session; 

class BaseController extends \app\data\Controller
{ 
	private $manager;

	public function __construct(){
		parent::__construct(); 

		$this->user=Users::getuser(0,Session::get(App::manager_auth()));  
	 
		if(is_null($this->user) || empty($this->user->manager)){
			$this->redirect("/admin.php/admin/login");
		}else{   
			$this->assign('user',$this->manager); 
		}
	}
}