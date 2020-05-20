<?
namespace app\admin\admin;

use data\membership\Members as MembersModel; 
use data\membership\SysUsers as UsersModel;

class Member extends BaseController{

	public function entry(){
		return $this->fetch('member/list');
	}

	public function post_state(){
		if(request()->ispost()){  
			$userid=$this->request->param('userid');
			$state=$this->request->param('state');
			$user=UsersModel::find($userid);
			if ($user) {
				if($state){
					$user->is_approved=false;
				}else{
					$user->is_approved=true;
				}
				
				$result=$user->save();
				if($result){
					return message('提交成功',true,200);
				}
			} 
		}
	} 
	public function data_list(){
		$where=[];
		if(!empty(input('username'))){
			$where['username']=input('username');
		}
		if(!empty(input('nickname'))){
			$where['nickname']=input('nickname');
		}
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		 
		$result=MembersModel::selectpage(10,$where,'userid desc')->toarray();//读取数据
	 
		return json($result); 
	} 

	public function create_post(){
		if(request()->ispost()){  
			//$user=new UsersModel();
			$username=input('username');
			$tusername=input('tuser');
			$loginpwd=input('loginpwd');
			$safepwd=input('safepwd');
			$nickname=input('nickname');
			$email=input('email');
			
			 
			$member=new MembersModel();

			//推荐人编号
			if(!empty($tusername)){
				$tuser=UsersModel::getuser(0,$tusername);
				if(!empty($tuser)){
					$member->refer_userid=$tuser->userid;
					$member->refer_username=$tuser->username;
				}
			} 
			$member->username 	= $username;
			$member->password 	= $loginpwd; 
			$member->email 		= $email; 
			$member->is_approved	= true;
			$member->nickname 	= $nickname;
			$member->points=0;
			$member->splittins=0;
			$member->wallets=0;
			$member->trade_password=$safepwd; 
			$result=$member->createmember();
			if ($result->success) {
				return message($result->msg,true,200);
			} 
			return message($result->msg,false);
		}
	}

	public function edit_post(){
		if(request()->ispost()){  
			$userid 		=input('userid');

			$loginpwd 	=input('loginpwd');
			$safepwd 	=input('safepwd');

			$user=UsersModel::getuser($userid,'','',false);
			 
			if (!empty($user)) {
				$user->email 			= input('email');
				if($user->save()){  
					 
				}
				if(!empty($loginpwd)){
					$user->changeLoginPassword($loginpwd);//修改密码
				} 
			} 

			$member=MembersModel::find($userid);
			if ($member) {
				$member->nickname 		= input('nickname');
				$member->realname 		= input('realname');
				$member->identify_card 	= input('identify_card');
				$member->address 			= input('address');
				$member->zipcode 			= input('zipcode');
				$member->phone 			= input('phone');
				$member->mobile 			= input('mobile');
				$member->qq 				= input('qq');
				$member->wangwang 		= input('wangwang');
				$member->wechat 			= input('wechat');
				$member->alipay 			= input('alipay'); 
				
				$result=$member->save();
				if(!empty($safepwd)){
					$member->changeSafePassword($safepwd);//修改密码
				}
			}  
			if ($result) {
				return message('修改成功',true,200);
			}else{
				return message('修改失败',false);
			}
		}
	}

	public function delete_post(){
		if(request()->ispost()){ 
			$id=input("id");  
			$user=UsersModel::find($id);
			if($user->deleteUser()){
				return message('删除成功',true,200);
			}
			return message('删除失败',false);
		}
	}

	public function reset_post(){
		if(request()->ispost()){ 
			$userid 		=input('userid');
			$pwd 	=input('pwd'); 
			$user=UsersModel::getuser($userid,'','',false);
			if (!empty($user)) { 
				if(!empty($pwd)){
					$user->changeLoginPassword($pwd);//修改密码
					return message('重置成功',true,200);
				} 
			} 
			return message('重置失败',false);
		}
	}
}