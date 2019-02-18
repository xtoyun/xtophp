<?
namespace app\data;

use app\api\facade\Factory;

class Controller extends \xto\template\TemplateController{
	//权限
	public $auth;

	public function __construct(){ 
		parent::__construct();
		$this->_init();  
	}

	private function _init(){
		 $class = Factory::getInstance(config('api')['auth_class']);
		 $baseAuth = Factory::getInstance(\app\api\auth\BaseAuth::class);
		 
		 if (!empty($baseAuth)) {

		 	$result=$baseAuth->getuser($class);  
			 if ($result) {
			 	$this->auth=(object)$baseAuth->getuser($class);
			 }
		 }else{
		 	$this->auth=false;
		 }
		 
	}
}