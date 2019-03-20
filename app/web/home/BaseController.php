<?
namespace app\web\home;
 
use app\data\model\Config;

class BaseController extends \think\Controller
{  
	protected $nav;
	public $config;

	public function __construct(){
		parent::__construct();  
		$this->config=Config::getconfigs();
		$this->assign('config',$this->config);  
		$this->assign('layout',APP_PATH.'web/view/home/'.$this->getTheme().'/layout.html');//指定母版页面 
	}

	public function fetch($template = '', $vars = [], $replace = [], $config = []){ 
		$template=$this->getTheme().'/'.(empty($template)?$this->c.'/'.request()->action():$template); 
		return parent::fetch($template,$vars,$replace,$config);
	}

	public function getTheme(){
		$theme='default';
		if (isset($this->config['web_template'])) {
			$theme=$this->config['web_template'];
		}
		$theme=(empty($theme)?'default':$theme);

 		$theme=config('theme');
		return $theme;
	}

	public function action(){  
		return request()->action();
	}

	public function controller(){  
		return request()->controller();
	}
}