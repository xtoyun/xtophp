<?
namespace app\web\home;
 

class Sever extends BaseController{
	public function _empty(){ 
		$action 	=$this->action(); 
		return $this->fetch('sever/'.$action); 		
	}
}