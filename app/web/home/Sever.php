<?
namespace app\web\home;
 
use data\model\WebProduct;

class Sever extends BaseController{
	public function _empty(){ 
		$action 	=$this->action(); 
	 
		return $this->fetch('sever/'.$action); 		
	}
}