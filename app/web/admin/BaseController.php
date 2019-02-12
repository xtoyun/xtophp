<?
namespace app\web\admin;

use app\data\App;
use app\data\membership\Users;
use think\facade\Session; 

class BaseController extends \app\data\Controller
{ 
	protected $user; 

	public function __construct(){
		parent::__construct(); 
		if ($this->auth) {
 			$this->user=Users::getuser($this->auth->client_id);
 		} 
	 
		if(is_null($this->user) || empty($this->user->manager)){
			$this->redirect("/admin.php/admin/login");
		}else{   
			$this->assign('user',$this->manager); 
		}
	}
}