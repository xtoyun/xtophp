<?
namespace app\admin\admin;

use app\common\lib\Util;

use think\Cache;
use think\Request;
use xto\membership\App;
use xto\membership\context\Manager;
use xto\membership\core\UserCreateStatus;
use xto\membership\core\IRole;
use xto\membership\core\UserRole;
use xto\membership\context\Member;
use app\common\dao\ConfigDao;
use app\common\dao\ManagerDao;
use app\common\dao\LogDao;
use app\common\dao\MemberDao;
use app\common\dao\WalletDao;
use app\common\dao\SplittinDao;
use app\common\dao\PayDao;
use app\admin\dao\MessageDao;
use xto\membership\context\Users;

class Api extends BaseController{

	public function sendmsg(){
		$data=request()->post();

		$data['sender']=$this->user->username;
		$data['isread']=false;
		 
		if (empty($data['accepter'])) {
			return Util::message('请确定收件人',false); 
		}
		if (empty($data['title'])) {
			return Util::message('请输入标题',false); 
		}
		if (empty($data['content'])) {
			return Util::message('请输入内容',false); 
		}

		$touser=Users::getuser(0,$data['accepter']);
		if(empty($touser) || $touser->userrole!=UserRole::Member){
			return Util::message('收件人不存在!!',false); 
		} 

		$dao=MessageDao::instance();
		if (empty($data['mbid'])) {
			$result=$dao->save($data);
		}else{
			$result=$dao->update($data);
		}
		
		if($result){
			return Util::message('发送成功',true);
		}
		return Util::message('发送失败',false); 
	}

	public function inbox_index_delete(){
		$id=input("id");
		if(empty($id)){
			return Util::message('请选择记录',false);
		}
		$dao=MessageDao::instance();
		if($dao->delete($id)){
			return Util::message('恭喜，删除成功',true);
		}
		return Util::message('删除失败',false);
	}

	public function inbox_remsg(){
		if(request()->ispost()){
			$data=request()->post();
			$dao 	=MessageDao::instance();
			if($dao->update($data)){
				return Util::message('更新成功',true);
			}
		}
		return Util::message('更新失败',false);
	}

	public function plugs_setpay_delete(){
		$id=input("id");
		if(empty($id)){
			return Util::message('请选择一个支付',false);
		}
		$dao=PayDao::instance();
		if($dao->delete($id)){
			return Util::message('恭喜，会员删除成功',true);
		}
		return Util::message('删除失败',false);
	}

	public function member_index_delete(){
		$id=input("id");
		if(empty($id)){
			return Util::message('请选择一个会员',false);
		}
		$dao=ManagerDao::instance();
		if($dao->delete($id)){
			return Util::message('恭喜，会员删除成功',true);
		}
		return Util::message('删除失败',false);
	}
 
	public function manager_index_delete(){
		$id=input("id");
		$dao=ManagerDao::instance();
		$user=$dao->getmanager($id,'',false);
		if($user->is_admin || $user->username=='admin'){//保留一些不能删除，不然重新安装很麻烦
			return Util::message('超级管理员不能删除',false);
		}
		if($dao->delete($id)){
			return Util::message('删除成功',true);
		}
		return Util::message('删除失败',false);
	}

	public function config(){
		$value=input('value');
		$name=input('name');
		$arr=[
			'name'=>$name,
			'value'=>$value
		];
		$str="用户更新配置";
		App::writelog($str);

		$dao=ConfigDao::instance();
		$result=$dao->save($arr);
		
		return Util::message('恭喜，操作成功',$result);
	}

	public function saveconfig(){
		$dao=ConfigDao::instance();
		$t=request();	 
		foreach ($t->param() as $key => $value) {
			$arr=[
				'name'=>$key,
				'value'=>$value
			];
			$result=$dao->save($arr);
		}
		return Util::message('更新成功',true);
	}

	public function addpay(){
		$payid 	=input('payid');
		$type 	=input('type');
		$name 	=input('name');
		$remark =input('remark');
		if (empty($type)) { 
			return Util::message('类型为空',false);
		}
		if (empty($name)) { 
			return Util::message('请指定显示名称',false);
		}
		$data=\xto\plugins\PayPlugins::instance()->getPlugin($type)->getData();
		foreach ($data as $key => $value) {
			if(is_bool($value)){
				$result[$key]=(boolean)input($key);
			}else{
				$result[$key]=input($key);
			}
		}
		$result=[
			'config'=>json_encode($result),
			'paytype'=>$type,
			'name'=>$name,
			'remark'=>$remark
		];

		$dao=PayDao::instance();

		if(!empty($payid)){
			$result['payid']=$payid;
			if($dao->update($result)){
				return Util::message('更新成功',true);
			}
		}else{
			if($dao->save($result)){
				return Util::message('保存成功',true);
			}
		}
		
		return Util::message('保存失败，或是数据未改动',false);
	}

	public function smstest(){
		$arr = Util::message('发送失败',false);
		$mobile		=input('testmobile');
		$content	=input('testcontent');
		$c=json_decode($this->config['smssender']);
		if (!empty($this->config->smstype)) {
			$p=\xto\plugins\SMSSender::createInstance($this->config->smstype,$c);
	        if (!empty($p)) {
	            $r=$p->send($mobile,$content); 
	            if($r){
		            return Util::message('发送成功',true);
		        }
				
	        } 
	    }
	    return $arr;
	}

	public function smssender(){
		//$c=ConfigService::getConfig();
		$type=input('type');
 		if (empty($type)) { 
			return Util::message('类型为空',false);
		}
		$result=array();
		$data=\xto\plugins\SMSPlugins::instance()->getPlugin($type)->getData();
		foreach ($data as $key => $value) {

			if(is_bool($value)){
				$result[$key]=(boolean)input($key);
			}else{
				$result[$key]=input($key);
			}
		} 
		$h=[
			'name'=>'smssender',
			'value'=>json_encode($result)
		];

		$dao=ConfigDao::instance();
		$dao->save($h);
		$d=[
			'name'=>'smstype',
			'value'=>$type
		];
		$dao->save($d);
		return Util::message('保存成功',true);
	}

	public function emailsender(){
		$type=input('type');
		if (empty($type)) {
			return Util::message('类型为空',false);
		}
		$result=array();
		$data=\xto\plugins\EmailPlugins::instance()->getPlugin($type)->getData();
		foreach ($data as $key => $value) {
			if(is_bool($value)){
				$result[$key]=(boolean)input($key);
			}else{
				$result[$key]=input($key);
			}
		} 
		$h=[
			'name'=>'emailsender',
			'value'=>json_encode($result)
		];
		$dao=ConfigDao::instance();
		$dao->save($h);
		$d=[
			'name'=>'emailtype',
			'value'=>$type
		];
		$dao->save($d);
		return Util::message('保存成功',true);
	}

	public function emailtest(){
		$arr = Util::message('发送失败',false);
		$email		=input('testemail');
		$content	=input('testcontent');
		$c=json_decode($this->config->emailsender);
		if (!empty($this->config->emailtype)) {
			$p=\xto\plugins\EmailSender::createInstance($this->config->emailtype,$c);
	        if (!empty($p)) {
	            $r=$p->send($email,'测试',$content); 
	            if($r){
		            return Util::message('发送成功',true);
		        }
				
	        } 
	    }
	    return $arr;
	}


	public function osssender(){
		$type=input('type');
		if (empty($type)) {
			return Util::message('类型为空',false);
		}
		$result=array();
		$data=\xto\plugins\OSSPlugins::instance()->getPlugin($type)->getData();
		foreach ($data as $key => $value) {
			if(is_bool($value)){
				$result[$key]=(boolean)input($key);
			}else{
				$result[$key]=input($key);
			}
		} 

		$h=[
			'name'=>'osssender',
			'value'=>json_encode($result)
		];
		$dao=ConfigDao::instance();
		$dao->save($h);
		$d=[
			'name'=>'osstype',
			'value'=>$type
		];
		$dao->save($d);
		return Util::message('保存成功',true); 
	}

	public function createmanager(){
		$dao=ManagerDao::instance();
		$username=input('username');
		$password=input('password');
		$nickname=input('nickname');
		$email=input('email');
		$roleid=input('funrole');
		$is_admin=input('is_admin');
		if(!$is_admin){
			if (empty($roleid)) {
				return Util::message('请至少选择一个角色',false);
			}
		} 

		$user=new Manager();
		$user->username 	= $username;
		$user->password 	= $password;
		$user->email 		= $email;
		$user->description 	= $nickname;
		$user->is_approved	= true;
		$user->is_admin 	= $is_admin;
		$user->funrole 		= $roleid;
		$user->salt 		= uniqid();

		$result=$dao->save($user);
		switch ($result) {
			case UserCreateStatus::Created:
				return Util::message('保存成功'.$email,true);
			case UserCreateStatus::DuplicateUsername:
				return Util::message('无效用户名',false);
			default:
				return Util::message('保存失败'.$result,false);
		}
	}

	public function editmanager(){
		$userid=input('userid');
		$password=input('password');
		$email=input('email');
		$is_approved=input('is_approved');
		$is_admin=(bool)input('is_admin');
		$roleid=input('funrole');
		if (empty($email)) {
			return Util::message('邮箱不能为空',false);
		}
		if(!$is_admin){
			if (empty($roleid)) {
				return Util::message('请至少选择一个角色',false);
			}
		} 

		$dao=ManagerDao::instance();
		$user=$dao->getmanager($userid,'',false);

		if (!empty($user)) {
			$user->email 		= $email;
			$user->is_approved 	= $is_approved;
			if($user->username=='admin'){//只要是admin标为管理员
				$user->is_admin=true;
				$user->is_approved=true;
			}else{
				$user->is_admin 	= $is_admin;
			}
			
			if(!empty($password)){
				$user->password =$password;
			}else{
				$user->password ='';
			}
			$user->funrole 		= $roleid;
			if($dao->update($user)){
				$re=false;
				if(!empty($password)){
					$re=$dao->changeLoginPassword($user->userid,$password);
				}
				$dao->deleteUserRoles($user->userid);//先删除所有
				$dao->addUserToRole($user->userid,$roleid);
				return Util::message('修改成功'.$re,true);
			}
		} 
		return Util::message('修改失败',false);
	}

	public function createrole(){
		$name=input('name');
		$description=input('description');
		if(empty($name)){
			return Util::message('名称不能为空',false);
		}
		$role=new IRole();
		$role->name=$name;
		$role->description 	=$description;
		if(ManagerDao::instance()->createRole($role)){
			return Util::message('保存成功',true);
		}
		return Util::message('保存失败',false);
	}

	public function editrole(){

		$roleid 	=input('roleid');
		$name 		=input('name');
		$description=input('description');

		

		$dao 		=ManagerDao::instance();
		$role 		=$dao->getrole($roleid);
		if(!empty($role)){
			$role->name 		=$name;
			$role->description 	=$description;
			if($dao->updateRole($role)){
				return Util::message('保存成功',true);
			}
		}
		return Util::message('保存失败',false);
	}

	public function roles_index_delete(){
		if(request()->ispost()){
			$id=input('id');
			if(\xto\membership\core\RoleHelper::deleteRole($id)){
				return Util::message('删除成功',true);
			}
		} 
		return Util::message('删除失败',false);
	}

	public function uploader(){ 
		$file = request()->file('file'); 
		if (empty($file)) {
			return Util::message('请选文件',false);
		}

		$oss=new \xto\Oss();
		$msg=$oss->save($file);
		return json($msg);  
	}

	public function logs_index_delete(){
		$id=input('id');
		if(LogDao::instance()->delete($id)){
			return Util::message('删除成功',true);
		}
		return Util::message('删除失败',false);
	}


	public function createmember(){
		$dao=MemberDao::instance();
		$user=new Member();
		$username=input('username');
		$tusername=input('tuser');
		$loginpwd=input('loginpwd');
		$safepwd=input('safepwd');
		$nickname=input('nickname');
		$email=input('email');
		if(!empty($username)){
			$tuser=$dao->getmember(0,$tusername,false);
			if($tuser->userrole==UserRole::Member){
				$user->refer_userid=$tuser->userid;
				$user->refer_username=$tuser->username;
			}
		}
		
		$user->username 	= $username;
		$user->password 	= $loginpwd;
		$user->trade_password=$safepwd;
		$user->email 		= $email; 
		$user->is_approved	= true;
		$user->nickname 	=$nickname;

		$result=$dao->save($user);
		switch ($result) {
			case UserCreateStatus::Created:
				$dao->clearUserCache($user);//清除缓存
				return Util::message('保存成功'.$email,true);
			case UserCreateStatus::DuplicateUsername:
				return Util::message('用户名已经重复',false);
			default:
				return Util::message('保存失败'.$result,false);
		}
	}


	public function editmember(){
		$dao=MemberDao::instance();
		$userid 		=input('userid');
		$loginpwd 	=input('loginpwd');
		$safepwd 	=input('safepwd');

		$user=$dao->getmember($userid);
		if (!empty($user)) {
			$user->email 			= input('email');
			$user->nickname 		= input('nickname');
			$user->realname 		= input('realname');
			$user->identify_card 	= input('identify_card');
			$user->address 			= input('address');
			$user->zipcode 			= input('zipcode');
			$user->phone 			= input('phone');
			$user->mobile 			= input('mobile');
			$user->qq 				= input('qq');
			$user->wangwang 		= input('wangwang');
			$user->wechat 			= input('wechat');
			$user->alipay 			= input('alipay'); 
			if(!empty($loginpwd)){
				$user->password =$loginpwd;
			}else{
				$user->password ='';
			}
			if(!empty($safepwd)){
				$user->trade_password =$safepwd;
			}else{
				$user->trade_password ='';
			}
			if($dao->update($user)){
				$re=false;
				if(!empty($loginpwd)){
					$re=$user->changeLoginPassword($loginpwd);//修改密码
				} 
				if(!empty($safepwd)){
					$re=$user->changeSafePassword($safepwd);//修改密码
				} 
				return Util::message('修改成功'.$re,true);
			}
		} 
		return Util::message('修改失败',false);
	}

	public function createwallet(){
		$m_dao 		=MemberDao::instance();
		$dao 		=WalletDao::instance();
		$username 	=input('username');
		$amount 	=input('amount');
		$user=$m_dao->getmember(0,$username,false);
		if ($user->userrole==UserRole::Member) { 
			if($dao->u_create($user->userid,$amount,0,'后台添加')){
				//清理缓存
				$m_dao->clearUserCache($user);
				return Util::message('添加成功',true);
			} 
		}
		return Util::message('添加失败',false);
	}

	public function createpoint(){
		$dao=MemberDao::instance();
		$username 	=input('username');
		$amount 	=input('amount');
		$user=$dao->getmember(0,$username,false);
		if ($user->userrole==UserRole::Member) { 
			if($dao->createPoints($user->userid,$amount,0,'后台添加')){
				$dao->clearUserCache($user);
				return Util::message('添加成功',true);
			} 
		}
		return Util::message('添加失败',false);
	}

	public function createsplittin(){
		$m_dao 		=MemberDao::instance();
		$dao 		=SplittinDao::instance();
		$username 	=input('username');
		$amount 	=input('amount');
		$user=$m_dao->getmember(0,$username,false);
		if ($user->userrole==UserRole::Member) {  
			if($dao->u_create($user->userid,$amount,0,'后台添加')){
				$m_dao->clearUserCache($user);
				return Util::message('添加成功',true);
			} 
		}
		return Util::message('添加失败',false);
	}

	public function allot(){
		$ids 	=input("ids");
		$roleid =input("roleid");
		$arr=array_unique(explode(',',$ids)); 


		if(\xto\membership\core\RoleHelper::addRoleFunctions($roleid,$arr)){
			return Util::message('添加成功',true);
		}
		return Util::message('添加失败',false);
	}
}