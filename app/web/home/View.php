<?
namespace app\web\home;

use app\data\model\About as AboutModel; 

class View extends BaseController{
	public function _empty(){
		$action =''; 
		$action 	=$this->action();//自定义类型
		 
		return $this->fetch('view/'.$action);  
	} 
}