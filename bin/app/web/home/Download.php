<?
namespace app\web\home;

use app\web\dao\ModelDao;
use app\web\dao\ProductDao;
use app\web\dao\NavDao;

class Download extends BaseController{
 
	public function index(){
		return $this->fetch('download/index');	
	}
}