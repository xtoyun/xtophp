<?
namespace app\web\home;

use app\web\dao\ModelDao;
use app\web\dao\ProductDao;
use app\web\dao\NavDao;

class Page extends BaseController{
	public function _empty($action){  
		return $this->fetch('page/'.$action);		
	}

	public function index(){
		return $this->fetch('index');	
	}
}