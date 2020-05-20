<?
namespace app\common;
 
use think\facade\Session; 
use data\membership\SysUsers;

class AdminController extends Controller{
	public function __construct(){ 
		parent::__construct(); 
		$this->checkAdmin();
	} 

	public function checkAdmin(){
		$userid=Session::get('userid'); 
 		if ($userid) {
 			$this->user=SysUsers::getuser($userid);
 		}  
 		if(is_null($this->user) || $this->user->userrole!=2){
			$this->redirect(url('/admin/login'));
		}  		
 		$this->assign('user',$this->user); 
	}
}