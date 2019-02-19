<?
namespace app\common;

class Module extends \app\data\IModule{
	public function modulePath(){
		return APP_PATH.'common';
	}

	public function getName(){
		return 'common';
	}

	public function getDescription(){

	}

	public function getIcon(){
		
	}

	public function getViewUrl(){
		return url('common/home/index');
	}

	public function install(){
		//安装内容
	}

	public function uninstall(){

	}

	public function getIsShow(){
		return false;
	}
}