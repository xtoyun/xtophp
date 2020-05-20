<?
namespace app\web\home;
 
use data\model\SysConfig as Config;

class BaseController extends \app\common\Controller
{  
	protected $nav;
	public $config;

	protected $view_path;

	public function __construct(){ 
		parent::__construct(); 
		$this->view_path=config('template.view_path');
		$this->config=Config::getconfigs(); 
		$this->assign('config',$this->config);  
		$this->assign('layout',$this->view_path.'layout.html');//指定母版页面 

	}

	// public function fetch($template = '', $vars = [], $replace = [], $config = []){ 
	// 	$template=$this->getTheme().DS.(empty($template)?$this->c.DS.request()->action():$template);
	// 	return parent::fetch($template,$vars,$replace,$config);
	// } 

	// public function getTheme(){
	// 	if (isset($this->config['web_template'])) {
	// 		$theme=$this->config['web_template'];
	// 	}
	// 	$theme=(empty($theme)?'default':$theme);
 // 		$theme=config('app.web.theme');  
	// 	return $theme;
	// }

	public function action(){  
		return request()->action();
	}

	public function controller(){  
		return request()->controller();
	}

	public function ajaxApi()
	{
		$method = input("method", "");
		$param = input("param", "");
		if (empty($method)) {
			return [
				'title' => "javascript调用api",
				'data' => "",
				'code' => -400,
				'message' => "接口发生错误：method is not empty",
			];
		}
		if (!empty($param)) {
			$param = json_decode($param, true);
		}
		$res = api($method, $param);
		return $res;
	}
}