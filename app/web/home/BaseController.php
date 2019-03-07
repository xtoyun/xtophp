<?
namespace app\web\home;

use app\web\dao\NavDao;
use app\web\dao\KeywordDao;
use app\web\dao\LinkDao;

class BaseController extends \app\data\Controller 
{  
	protected $nav;

	public function __construct(){
		parent::__construct(); 
		$this->assign('theme',$this->getTheme());
	}

	public function fetch($template = '', $vars = [], $replace = [], $config = []){
		$replace=array_merge($replace,['"/res'=>'"/app/web/view/home/'.$this->getTheme().'/res']);
		$replace=array_merge($replace,['(/res'=>'(/app/web/view/home/'.$this->getTheme().'/res']);
		$template=$this->getTheme().'/'.(empty($template)?$this->c.'/'.request()->action():$template);
		return parent::fetch($template,$vars,$replace,$config);
	}

	public function getTheme(){
		$theme='default';
		if (isset($this->config['web_template'])) {
			$theme=$this->config['web_template'];
		}
		$theme=(empty($theme)?'default':$theme);

 		//$theme='xto';
		return $theme;
	}

	//框架内容
	public function getlayout(){
        return APP_PATH."web/view/home/$this->theme/layout.html";  
    }

}