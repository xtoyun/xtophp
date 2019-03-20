<?
namespace app\web;

class Module extends \app\data\IModule{
	public function modulePath(){
		return APP_PATH.'web';
	}

	public function getName(){
		return 'CMS';
	}

	public function getDescription(){

	}

	public function getIcon(){
		
	}

	public function getViewUrl(){
		return url('web/index/index');
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