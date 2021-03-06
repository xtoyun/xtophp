<?
namespace app\admin\admin;

use data\membership\SysUsers as Users;
use data\membership\Managers as Managers;
use data\membership\SysRoles as Roles;

class Manager extends BaseController{
 	 public function entry(){
 	 	$roles=Roles::select();
		foreach ($roles as $key => $value) {
			$result[$value['name']]=$value['roleid'];
		} 
		$this->assign('roles',$roles);
		return $this->fetch('manager/list');
	}

	public function post_state(){
		if(request()->ispost()){  
			$userid=$this->request->param('userid');
			$state=$this->request->param('state');
			$user=Users::find($userid);
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
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		 
		$result=Managers::selectpage(10,$where,'userid desc')->toarray();//读取数据
	 
		return json($result); 
	}
 	public function detail(){
 		$userid=request()->route('userid');
 		$user=Managers::getinfo($userid); 

 		return $this->template 
 				->ShowTemplate
 				->setTitle('用户管理')
 				->setDataSource($user)
 				->setColumns([ 
					[1,'userid', '用户编号','1'],
	                [1,'username', '用户名','link',url('manager/detail').'/userid/$userid'],
	                [1,'email', '邮件'],
	                [1,'description', '描述','bool'],
	                [1,'createdate', '创建日期'],
	                [2,'last_login_date', '更新日期'],
	                [2,'is_approved','审核','bool'],
	                [2,'is_admin','超级管理员','bool'],
	                [2,'rolename','角色'],
	                [2,'button', '操作', 'btn']
				])
				->fetch(); 
 	}

	public function index(){ 
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		$source=Managers::selectpage(20,$where,'userid desc');//读取数据

		return $this->template
				->TableTemplate 
				->setData('modulename','基础管理')
				->setTitle('用户管理')
				->setDataSource($source)
				//->addLeftBlock('nav','选择栏目','nav')
				->setPager($source->render()) 
				->addColumnButton('delete')
				->addColumnButton('','',url('manager/edit').'?id=$userid','','fa fa-pencil')
				->addTopButton('','创建',url('manager/create'))
				->addNav('','管理员',url('manager/index'))
				->setPid('userid')
				->setQuickSearch('username,email','请输入关键字')
				->setColumns([
					['userid', '用户编号'],
	                ['username', '用户名','link',url('manager/detail').'/userid/$userid'],
	                ['email', '邮件'],
	                ['description', '描述','bool'],
	                ['create_time', '创建日期'],
	                ['update_time', '更新日期'],
	                ['is_approved','审核','bool'],
	                ['is_admin','超级管理员','bool'],
	                ['rolename','角色'],
	                ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){ 
		$roles=Roles::where(null)->select();
		foreach ($roles as $key => $value) {
			$result[$value['name']]=$value['roleid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加管理员',url('create'))
				->addNav('','管理列表',url('index'))
				->setTitle('添加管理员')
				->addFormItems([
						['text', 'username', '用户名', '用户名称'],
						['password', 'password', '密码', '必填，6-20位'],  
						['radio', 'is_admin', '超级管理员', '',['开通'=>1]],
						['select', 'funrole', '角色','', $result],
		                ['text', 'nickname', '昵称', '可以是中文'],
		                ['text', 'email', '邮箱', '如:abc@b.com'],
		             
					])
				->submit(url('create_post'),'')
				->fetch();
	}

	public function edit(){
		$id=input('id');
		$result=[];
		$roles=Roles::select();
		foreach ($roles as $key => $value) {
			$result[$value['name']]=$value['roleid'];
		} 
		$user=Managers::getinfo($id); 
 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑管理员',url('edit'),'?id='.$id)
				->addNav('','管理列表',url('index'))
				->setTitle('编辑管理员')
				->addFormItems([
						['static', 'username', '用户名', '用户名称'],
						['password', 'password', '密码', '填写新的密码会覆盖现有'],
						['select', 'funrole', '角色','', $result],
		                ['email', 'email', '邮箱', '如:abc@b.com'],
		                ['radio', 'is_admin', '超级管理员', '',[
		                	'开通'=>1,
		                	'取消'=>0
		                ]],
		                ['radio', 'is_approved', '审核','', [
		                	'通过'=>1,
		                	'不通过'=>0
		                ]],
		                ['textarea', 'description', '备注', '']
					])
				->setDataSource($user)
				->setPid('userid',$id)
				->submit(url('manager/edit_post'),'')
				->fetch();
	} 

	public function delete_post(){
		if(request()->ispost()){ 
			$id=input("id"); 
			$user=Users::getuser($id,'',false);
			if($user->is_admin || $user->username=='admin'){//保留一些不能删除，不然重新安装很麻烦
				return message('超级管理员不能删除',false);
			}
			if($user->deleteUser($id)){
				return message('删除成功',true);
			}
			return message('删除失败',false);
		}
	}

	public function create_post(){
		if(request()->ispost()){ 
			$username=input('username');
			$password=input('password');
			$nickname=input('nickname');
			$email=input('email');
			$roleid=input('funrole');
			$is_admin=input('is_admin');
			if(!$is_admin){
				if (empty($roleid)) {
					return message('请至少选择一个角色',false);
				}
			} 

			if(Users::where('username',$username)->count()>0){
				return message('请输入其他用户名',false);
			}

			$user=new Managers();
			$user->username 	= $username;
			$user->password 	= $password;
			$user->email 		= $email;
			$user->description 	= $nickname;
			$user->is_approved	= true;
			$user->is_admin 	= (bool)$is_admin;
			$user->funrole 		= $roleid;
			$user->userrole 	= $roleid;
			$user->description='管理员';
			$result=$user->create_manager();
			
			if($result->success){ 
				return message('保存成功',true);
			} 
			return message($result->msg,false);
		}
	}

	public function edit_post(){
		if(request()->ispost()){
			$userid=input('userid');
			$password=input('password');
			$email=input('email');
			//$is_approved=input('is_approved');
			$is_admin=(bool)input('is_admin');
			$roleid=input('funrole');
			if (empty($email)) {
				return message('邮箱不能为空',false);
			}
			if (empty($roleid)) {
					return message('请至少选择一个角色',false);
				} 
			$user=Users::getuser($userid,'','',false); 

			if (!empty($user) && !empty($user->manager)) {
				$user->email 		= $email;
				//$user->is_approved 	= (bool)$is_approved;
				if($user->username=='admin'){//只要是admin标为管理员
					$user->is_admin=true;
					$user->is_approved=true;
				}else{
					$user->is_admin 	= $is_admin;
				} 
				$user->funrole 		= $roleid;
				if($user->save()){ 
					$user->manager->description=input('description');
					$user->manager->save();
					foreach ($user->usersinroles as $role) { 
						$role->delete();
					}  
					$user->addRoles([$roleid]);
					if (!empty($password)) {
						$user->changeLoginPassword($password);
					} 					
					return message('修改成功',true);
				}
			} 
			return message('修改失败',false);
		}
	}
}