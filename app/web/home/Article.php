<?
namespace app\web\home;

use think\Db;

class Article extends BaseController{
	public function _empty(){
		$action 	=$this->action();//自定义类型
		return $this->fetch('article/'.$action); 	
	}
}