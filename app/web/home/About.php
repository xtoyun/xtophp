<?
namespace app\web\home;


class About extends BaseController{
	public function _empty(){
		$action ='';
		$rid 	=input('id');//获取文章编号
		$name 	=input('name');//自定义类型

		$action 	=$this->action();//自定义类型
		if(empty($name)){
			$name=$action;
			$action='index';
		}
		
		$this->assign('action',$action);
		return $this->fetch('about/'.$action);  
	} 
}