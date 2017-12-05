<?
namespace app\web\home;

use app\web\dao\NavDao;
use app\web\dao\KeywordDao;
use app\web\dao\LinkDao;

class BaseController extends \xto\template\BaseController 
{  
	protected $nav;

	public function _initialize(){
		parent::_initialize(); 
		$this->assign('theme',$this->theme);
	}

	public function fetch($template = '', $vars = [], $replace = [], $config = []){
		$replace=array_merge($replace,['"/res'=>'"/app/web/view/home/'.$this->theme.'/res']);
		$template=$this->theme.DS.(empty($template)?$this->c.DS.$this->a:$template);
		return parent::fetch($template,$vars,$replace,$config);
	}

	public function getTheme(){
		$domain=request()->domain();
		if($domain=='http://blog.demo.xtoyun.net'){
			return 'blog';
		}
		return 'blog';
	}

	//框架内容
	public function getlayout(){
        return APP_PATH."web/view/home/$this->theme/layout.html";  
    }
}