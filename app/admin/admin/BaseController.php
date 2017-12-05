<?
namespace app\admin\admin;

use xto\membership\core\UserRole;
use xto\data\service\ConfigService;

class BaseController extends \xto\template\BaseController 
{ 
	protected $config;
	protected $user; 

	public function _initialize(){ 
		parent::_initialize(); 

		$this->user=$this->context->manager;  
		if(is_null($this->user) || $this->user->userrole!=UserRole::Manager){
			$this->redirect("/admin/login");
		}else{   
			$this->assign('user',$this->user); 
		}
	}  
}