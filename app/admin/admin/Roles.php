<?
namespace app\admin\admin;

use xto\data\dao\ManagerDao;
use xto\data\dao\RoleDao;

class Roles extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=RoleDao::instance();
	}

	public function index(){
		$rdao=RoleDao::instance();
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('roleid','desc');
		$result=$this->dao->getroles(10); 
		return $this->template
				->TableTemplate 
				->setData('modulename','基础设置')
				->setTitle('角色管理')
				->setPager($result->render())
				->setDataSource($result)
				->addColumnButton('delete') 
				->addTopButton('','创建',url('roles/create')) 
				->addColumnButton('','',url('roles/edit').'?id=$roleid','','fa fa-pencil')
				->addNav('','角色列表',url('roles/index'))
				->setQuickSearch('name,roleid','请输入关键字')
				->setPid('roleid')
				->setColumns([
					['roleid', '角色编号'],
	                ['name', '角色名称','link','allot?id=$roleid'],
	                ['description', '描述'],
	                ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加角色',url('roles/create')) 
				->setTitle('添加角色')
				->addFormItems([
						['text', 'name', '角名名称', '必填，请输入角色名称'], 
						['textarea', 'description', '描述', ''],
					])
				->submit('createrole','',url('roles/index'))
				->fetch();
	}

	public function edit(){
		$id=input('id');
		$role=$this->dao->getrole_data($id);
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','修改角色',url('roles/edit')) 
				->setTitle('修改角色')
				->addFormItems([
						['text', 'name', '角名名称', '必填，请输入角色名称'], 
						['textarea', 'description', '描述', ''],
					])
				->submit('editrole','',url('roles/index'))
				->setpid('roleid',$id)
				->setdatasource($role)
				->fetch();
	}
 
	public function allot(){
		$id=(int)input('id'); 
		$role=$this->dao->getrole($id);
		$this->assign('role',$role);
		$this->assign('ms',$this->modules($id));
		return $this->setnav(true)
				->setdata('modulename','基础设置')
				->settitle('权限分配')
				->view('roles/allot');
	}

	public function modules($id){ 
		$fs=$this->dao->getfuns($id);
		$arr=$this->module->modules();
		$info=array();
		foreach ($arr as $key => $value) {
			$m=[];
			foreach ($value->menus as $mkey => $mvalue) {
				$pagelink=[];
				foreach ($mvalue['pagelink'] as $pkey => $pvalue) {
					$fun=[];

					foreach ($pvalue['function'] as $fkey => $fvalue) {
						$fun[]=[
							'id' 		=> $mvalue['url'].','.$pvalue['url'].','.$fvalue['url'],
							'text' 		=> $fvalue['title'],
							'icon' 		=> '',
							'state' 	=> ["opened" => true,'checked'=>in_array($fvalue['url'],$fs)],
							'children' 	=> false
						];
					}
					$pstatus=false;
					if(count($fun)>0){
						$pstatus=false;
					}else if(in_array($pvalue['url'],$fs)){
						$pstatus=true;
					}
					$pagelink[]=[
							'id' 		=> $mvalue['url'].','.$pvalue['url'],
							'text' 		=> $pvalue['title'],
							'icon' 		=> '',
							'state' 	=> ["opened" => true,'checked'=>$pstatus],
							'children' 	=> $fun
						];
				}
				//检查是否存在
				$mstatus=false;
				if(count($pagelink)>0){
					$mstatus=false;
				}else if(in_array($mvalue['url'],$fs)){
					$mstatus=true;
				}
				$m[]=[
					'id' 		=> $mvalue['url'],
					'text' 		=> $mvalue['title'],
					'icon' 		=> '',
					'state' 	=> ["opened" => true,'checked'=>$mstatus ],
					'children' 	=> $pagelink
				];
			}
			$info[]=[
				'id' 		=> 0,
				'text' 		=> $value->name,
				'icon' 		=> '',
				'state' 	=> ["opened" => true],
				'children' 	=> $m
			];
		} 
		return json_encode($info);
	}
}