<?
namespace app\doc;

class Module extends \xto\module\IModule{
	public function modulePath(){
		return APP_PATH.'doc';
	}

	public function getName(){
		return '文档';
	}

	public function getDescription(){

	}

	public function getIcon(){
		
	}

	public function getViewUrl(){
		return url('doc/index/index');
	}

	public function install(){
		//安装内容
	}

	public function uninstall(){

	}

	public function getIsShow(){
		return true;
	}
}