<?
namespace app\platform;
use app\data\IModule;
use app\data\membership\Users;

class Module extends IModule{

	public function modulePath(){
		return APP_PATH.'platform';
	} 

	public function getViewUrl(){
		return url('/platform/siteapp');
	}

	public function install(){
		//安装内容
	}

	public function uninstall(){

	} 

	public function getName(){
		return '平台';
	}

	public function getIsSys(){
		return false;
	}

	public function getIsShow(){ 
		return Users::getauth()->is_plat;
	}
}