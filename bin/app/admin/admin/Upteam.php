<?
namespace app\admin\admin;

use app\data\membership\Members as MembersModel; 
use app\data\membership\Users as UsersModel;

class Upteam extends BaseController{
	public function index(){
		$userid=input('userid'); 
		$username=input('username');
		if (!empty($username)) {
			$user=UsersModel::getuser(0,$username);
			if($user){
				$userid=$user->userid;
			}
		}
		$this->assign('userid',$userid);
		$this->assign('username',$username);
		return $this
				->setData('modulename','代理商管理')
				->setTitle('推荐列表')
				->fetch('upteam/index');
	} 

	public function refer_data(){ 
		$userid=input('userid');
		$userid=(empty($userid)?0:$userid);

		$list=MembersModel::get_refer_list($userid); 

		$newlist=[]; 

		foreach ($list as $key => $value) {
			$username=(!empty($value['mobile'])?$value['mobile']:$value['b_username']);
			$userid=$value['userid'];
 
			$text="$username-$userid";
			$newlist[$key]=array('id' =>$value['userid'],'text'=>$text,'children'=>MembersModel::get_refer_count($value['userid'])>0?true:false );
		}
		return json($newlist);
	}
}