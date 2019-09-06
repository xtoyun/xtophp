<?
namespace app\web\home;

use app\data\model\About as AboutModel; 

class Show extends BaseController{
	public function _empty(){
		$action 	=$this->action();//自定义类型
		if(empty($action)){ 
			$action='index';
		}
		return $this->fetch('show/'.$action);  
	} 
}