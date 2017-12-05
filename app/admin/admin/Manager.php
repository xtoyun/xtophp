<?
namespace app\admin\admin;

use xto\data\dao\ManagerDao;


class Manager extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=ManagerDao::instance();
	}

	public function index(){  
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$source=$this->dao->selectpage(10);//读取数据
		return $this->template
				->TableTemplate 
				->setData('modulename','基础管理')
				->setTitle('用户管理')
				->setDataSource($source)
				->setPager($this->dao->render)
				->addColumnButton('delete')
				->addColumnButton('','',url('manager/edit').'?id=$userid','','fa fa-pencil')
				->addTopButton('','创建',url('manager/create'))
				->addNav('','管理员',url('manager/index'))
				->setPid('userid')
				->setQuickSearch('username,email','请输入关键字')
				->setColumns([
					['userid', '用户编号'],
	                ['username', '用户名'],
	                ['email', '邮件'],
	                ['description', '描述','bool'],
	                ['createdate', '创建日期'],
	                ['last_login_date', '更新日期'],
	                ['is_approved','审核','bool'],
	                ['is_admin','超级管理员','bool'],
	                ['rolename','角色'],
	                ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		$result=[];
		$roles=\xto\membership\core\RoleHelper::getRoles();
		foreach ($roles as $key => $value) {
			$result[$value['name']]=$value['roleid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加管理员',url('manager/create'))
				->addNav('','管理列表',url('manager/index'))
				->setTitle('添加管理员')
				->addFormItems([
						['text', 'username', '用户名', '用户名称'],
						['password', 'password', '密码', '必填，6-20位'],  
						['select', 'funrole', '角色','', $result],
		                ['text', 'nickname', '昵称', '可以是中文'],
		                ['text', 'email', '邮箱', '如:abc@b.com'],
		                ['radio', 'is_admin', '超级管理员', '',[
		                	'开通'=>1
		                ]],
					])
				->submit('createmanager','')
				->fetch();
	}

	public function edit(){
		$id=input('id');
		$result=[];
		$roles=\xto\membership\core\RoleHelper::getRoles();
		foreach ($roles as $key => $value) {
			$result[$value['name']]=$value['roleid'];
		}
		$user=$this->dao->getdbuser($id); 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑管理员',url('manager/edit'),'?id='.$id)
				->addNav('','管理列表',url('manager/index'))
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
		                ]]
					])
				->setDataSource($user)
				->setPid('userid',$id)
				->submit('editmanager','')
				->fetch();
	} 
}