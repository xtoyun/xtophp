<?
namespace app\doc\admin;

use \think\Controller;
use \think\Url;
use \think\Request;
use xto\membership\context\Context;
use xto\membership\core\UserRole;
use xto\App;
use xto\data\service\ConfigService;

class BaseController extends \xto\template\BaseController 
{ 
	private $manager;

	public function _initialize(){
		parent::_initialize(); 

		$this->manager=$this->context->manager; 
		if(is_null($this->manager) || $this->manager->userrole!=UserRole::Manager){
			$this->redirect("/admin/login");
		}else{   
			$this->assign('user',$this->manager); 
		}
	}
}