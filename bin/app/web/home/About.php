<?
namespace app\web\home;

use app\data\model\About as AboutModel; 

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
		$info=null;
		if(!empty($rid)){ 
			$info=AboutModel::find($rid); 
		}
		if(!empty($name)){
			$info=AboutModel::where('name',$name)->find();  
		 
		}
		$this->assign('info',$info);
		return $this->fetch('about/'.$action);  
	} 
}