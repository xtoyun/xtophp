<?
namespace app\platform;
use app\data\IModule;
use app\data\membership\Users;
use think\facade\Session; 

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
		$userid=Session::get(config('auth_admin_name'));
		$user=Users::getuser($userid);
		if($user){
			return $user->is_plat;
		}
		return false;
	}
}