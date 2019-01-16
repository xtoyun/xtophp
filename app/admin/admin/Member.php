<?
namespace app\admin\admin;

use app\data\membership\Members as MembersModel; 

class Member extends BaseController{
	 

	public function index(){
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		$result=MembersModel::selectpage(20,$where,'userid desc');//读取数据
		return $this->template
				->TableTemplate 
				->setData('modulename','基础管理')
				->setTitle('用户管理')
				->setPager($result->render())
				->setDataSource($result)
				->addColumnButton('delete')
				->addColumnButton('','',url('member/edit').'?id=$userid','','fa fa-pencil')
				->addColumnButton('','',url('member/createpoint').'?id=$userid','','fa fa-btc')
				->addTopButton('','创建',url('member/create'))
				->addNav('','会员列表',url('member/index')) 
				->setPid('userid')
				->setQuickSearch('username,email','请输入关键字')
				->setColumns([
					['userid', '用户编号'],
	                ['username', '用户名'],
	                ['email', '邮件'], 
	                ['mobile', '手机'],
	                ['points', '积分'], 
	                ['wallets', '钱包'],
	                ['realname', '姓名'],
	                ['createdate', '创建日期'],
	                ['is_approved','审核','bool'],
	                ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function createpoint(){
		$id=$_GET['id'];
		$member=$this->dao->getmember($id,'',false);
		$data=[
			'points'=>empty($member->points)?0:$member->points
		];
		return $this->template
				->FormTemplate 
				->setData('modulename','会员管理') 
				->addNav('','添加积分',url('member/createpoint'))
				->addNav('','会员列表',url('member/index'))
				->setTitle('添加积分')
				->addFormItems([
						['static', 'points', '剩余积分', ''],
		                ['text', 'amount', '积分', '请填写大于0'],
					])
				->setDataSource($data)
				->setPid('username',$member->username)
				->submit('createpoint','')
				->fetch();
	}

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加会员',url('member/create'))
				->addNav('','会员列表',url('member/index'))
				->setTitle('添加会员')
				->addFormItems([
						['text', 'username', '用户名', '用户名称'],
						['text', 'tuser', '推荐用户', '系统已经存在的用户'],
						['password', 'loginpwd', '登录密码', '必填，6-20位，默认888888','888888'],  
						['password', 'safepwd', '安全密码', '必填，6-20位，默认888888','888888'],  
		                ['text', 'nickname', '昵称', '可以是中文'],
		                ['text', 'email', '邮箱', '如:abc@b.com']
					])
				->submit(url('member/create_post'),'')
				->fetch();
	}

	public function edit(){
		$id=input('id');
		$user=MembersModel::getinfo($id);
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑会员',url('member/edit'),'?id='.$id)
				->addNav('','会员列表',url('member/index'))
				->setTitle('编辑会员')
				->addFormItems([
						['static', 'username', '用户名', '用户名称'],
						['password', 'loginpwd', '登录密码', '填写新的密码会覆盖现有'],
						['password', 'safepwd', '安全密码', '填写新的密码会覆盖现有'],
		                ['text', 'email', '邮箱', '如:abc@b.com'],
		                ['text', 'realname', '真实姓名', ''],
		                ['text', 'nickname', '呢称', ''],
		                ['text', 'identify_card', '身份证', ''],
		                ['text', 'address', '地址', ''],
		                ['text', 'zipcode', '邮编', ''],
		                ['text', 'phone', '固话', ''],
		                ['text', 'mobile', '手机', ''],
		                ['text', 'qq', 'QQ', ''],
		                ['text', 'wangwang', '旺旺', ''],
		                ['text', 'wechat', '微信号', ''],
		                ['text', 'alipay', '支付宝', ''],
		                ['radio', 'is_approved', '审核','ttt', [
		                	'通过'=>1,
		                	'不通过'=>0
		                ]]
					])
				->setDataSource($user)
				->setPid('userid',$id)
				->submit(url('member/edit_post'),'')
				->fetch();
	}

	public function create_post(){
		if(request()->ispost()){  
			$user=new MemberInfo();
			$username=input('username');
			$tusername=input('tuser');
			$loginpwd=input('loginpwd');
			$safepwd=input('safepwd');
			$nickname=input('nickname');
			$email=input('email');
			if(!empty($username)){
				$tuser=MembersModel::getuser(0,$tusername,false);
				if(!empty($tuser) && $tuser->userrole==UserRole::Member){
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

			$result=MembersModel::createUser($user);
			switch ($result) {
				case UserCreateStatus::Created:
					 
					return message('保存成功'.$email,true);
				case UserCreateStatus::DuplicateUsername:
					return message('用户名已经重复',false);
				default:
					return message('保存失败'.$result,false);
			}
		}
	}

	public function edit_post(){
		if(request()->ispost()){  
			$userid 		=input('userid');
			$loginpwd 	=input('loginpwd');
			$safepwd 	=input('safepwd');

			$user=MembersModel::getuser($userid,'',false);
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
				if(MembersModel::updateUser($user)){
					$re=false;
					if(!empty($loginpwd)){
						$re=$user->changeLoginPassword($loginpwd);//修改密码
					} 
					if(!empty($safepwd)){
						$re=$user->changeSafePassword($safepwd);//修改密码
					} 
					return message('修改成功'.$re,true);
				}
			} 
			return message('修改失败',false);
		}
	}

	public function delete_post(){
		if(request()->ispost()){ 
			$id=input("id");  
			if(MembersModel::deleteUser($id)){
				return message('删除成功',true);
			}
			return message('删除失败',false);
		}
	}
}