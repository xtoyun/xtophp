<?
namespace app\data;

use app\data\template\TemplateController;
use app\data\model\Config;
use think\facade\Session; 
use app\data\membership\Users;

class Controller extends TemplateController{
	//权限
	//public $user;
	public $config;
	protected static $initialized = [];

	public function __construct(){ 
		parent::__construct(); 
		$this->config=Config::getconfigs();
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
}