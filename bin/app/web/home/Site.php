<?
namespace app\web\home;

use app\web\dao\ModelDao;
use app\web\dao\ProductDao;
use app\web\dao\NavDao;

class Site extends BaseController{
	public function _empty($action){ 
		$theme_name=$this->action();
		if($theme_name=='index'){
			$theme_name='default';
		}
		config('web.theme',$theme_name);
		config('appid',10000);
		return $this->fetch('index');	
	} 
}