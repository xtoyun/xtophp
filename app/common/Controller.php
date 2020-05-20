<?
namespace app\common;

use app\common\template\TemplateController;
use data\model\SysConfig as ConfigMoel;
use data\membership\SysUsers as UsersModel;

use think\facade\Session; 


class Controller extends TemplateController{
	//权限
	//public $user;
	public $config;
	protected static $initialized = [];

	public function __construct(){ 
		parent::__construct(); 
		$this->config=ConfigMoel::getconfigs();
		$this->assign('config',$this->config); 
		$this->_init();
	} 

	protected function _init()
    {
        if (!isset(static::$initialized[static::class])) {
            static::$initialized[static::class] = true;
            static::init();
        }
    }

	protected static function init(){
		
	} 

	public function sysconfig($name=''){
		if(isset($this->config[$name])){
			return $this->config[$name];
		}
		return '';
	}
}