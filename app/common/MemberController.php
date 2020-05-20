<?
namespace app\common;

use data\membership\SysUsers as Users;
 

class MemberController extends Controller
{ 
	public $login_url="";

	protected function checkAuth(){
		$redirect = __URL($this->login_url);
		$_SESSION['login_pre_url'] = __URL(__URL__ . $_SERVER['PATH_INFO']);//上一页

		$is_member=false;
		$this->token = session("access_token");
		$this->uid 	 = session('uid'); 
 		if ($this->uid) {
 			$this->user=Users::getuser($this->uid);
 			if($this->user && $this->user->userrole==1){
 				//登录验证token不一样
 				if($this->token!=$this->user->token){
 					$is_member=false;
 				}
 				//过期处理
 				if ((time() - $this->user->time_out > 0) or empty($this->user->time_out)) {
	        		$is_member=false;
	        	} else{
	        		$is_member=true;
	        	}
 			} 
 		}
 		if(!$is_member){
			$this->redirect($redirect);
 		} 
 		$this->assign("uid", $this->uid);
 		$this->assign("user", $this->user->info); 
	}
}