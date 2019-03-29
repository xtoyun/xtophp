<?
namespace app\admin;
use app\data\IModule;

class Module extends IModule{

	public function modulePath(){
		return APP_PATH.'admin';
	} 

	public function getViewUrl(){
		return url('/admin/index');
	}

	public function install(){
		//安装内容
	}

	public function uninstall(){

	} 

	public function getName(){
		return '系统';
	}

	public function getIsSys(){
		return true;
	}

	public function getIsShow(){
		return true;
	}
}