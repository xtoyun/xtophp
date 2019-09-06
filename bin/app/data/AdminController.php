<?
namespace app\data;
 
use think\facade\Session; 
use app\data\membership\Users;

class AdminController extends Controller{
	protected $user;

	protected function _init(){
		$userid=Session::get(config('auth_admin_name')); 
 		if ($userid) {
 			$this->user=Users::getuser($userid);
 		} 
 		if(is_null($this->user) || empty($this->user->manager)){
			$this->redirect("/admin.php/admin/login");
		}  		
 		$this->assign('user',$this->user); 
	}
	
	public function getTheme(){
		return 'xui';
	 }
	 
	public function fetch($template = '', $vars = [], $replace = [], $config = []){ 
		if(!strstr($template, ':')){
			$template=$this->getTheme().'/'.(empty($template)?$this->c.'/'.request()->action():$template);
		} 
		return parent::fetch($template,$vars,$replace,$config);
	}
}