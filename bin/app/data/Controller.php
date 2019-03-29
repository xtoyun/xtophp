<?
namespace app\data;

use app\api\facade\Factory;
use app\data\template\TemplateController;
use app\data\model\Config;

class Controller extends TemplateController{
	//权限
	public $auth;
	public $config;

	public function __construct(){ 
		parent::__construct(); 
		$this->config=Config::getconfigs();
		$this->assign('config',$this->config); 
	} 

	protected function _init(){
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