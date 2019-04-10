<?
namespace app\platform\admin;

use app\data\App;
use app\data\membership\Users;
use think\facade\Session; 

class Base extends \app\data\Controller
{  
	protected $user; 

	public function __construct(){ 
		parent::__construct(); 
		$this->_init(); 
 		if ($this->auth && !empty($this->auth->client_id)) {
 			$this->user=Users::getuser($this->auth->client_id);
 		} 

 		if(is_null($this->user) || empty($this->user->manager) || !$this->auth){
			$this->redirect("/admin.php/admin/login");
		}
 		
 		$this->assign('user',$this->user); 
	}
}