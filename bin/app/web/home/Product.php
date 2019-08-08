<?
namespace app\web\home;
 
class Product extends BaseController{
	public function _empty(){
		
		$action ='';
		$action 	=$this->action();//自定义类型
		return $this->fetch('product/'.$action); 		
	}
}