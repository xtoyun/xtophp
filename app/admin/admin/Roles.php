<?
namespace app\admin\admin;

 
use app\data\membership\Roles as RolesModel;
use app\data\membership\Usersinroles;
 

class Roles extends BaseController{
	 

	public function index(){
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		$result=RolesModel::selectpage(20,$where,'roleid desc');//读取数据 
		$del_url=url('roles/delete_post');
		$go_url=url('roles/index');
		return $this->template
				->TableTemplate 
				->setData('modulename','基础设置')
				->setTitle('角色管理')
				->setPager($result->render())
				->setDataSource($result)
				//->addColumnButton('delete','',url('roles/delete_post')) 
				->addColumnButton('','','javascript:app.post(\''.$del_url.'\',{\'roleid\':\'$roleid\'},\''.$go_url.'\')','','fa fa-times','')
				->addTopButton('','创建',url('roles/create')) 
				->addColumnButton('','',url('roles/edit').'?id=$roleid','','fa fa-pencil')
				->addNav('','角色列表',url('roles/index'))
				->setQuickSearch('name|roleid','请输入关键字')
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
				->submit(url('roles/createrole_post'),'',url('roles/index'))
				->fetch();
	}

	public function edit(){
		$id=input('id');
		$role=RolesModel::find($id)->toArray();  
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','修改角色',url('roles/edit')) 
				->setTitle('修改角色')
				->addFormItems([
						['text', 'name', '角名名称', '必填，请输入角色名称'], 
						['textarea', 'description', '描述', ''],
					])
				->submit(url('roles/editrole_post'),'',url('roles/index'))
				->setpid('roleid',$id)
				->setdatasource($role)
				->fetch();
	}

	public function createrole_post(){
	 	if(request()->ispost()){
			$data=new RolesModel();
			$data->name=input('name');
			$data->description=input('description');
			if($data->save()){
				return message('修改成功',true);
			} 
		}
		return message('保存失败',false);
	}

	public function editrole_post(){
	 	if(request()->ispost()){
			$data=RolesModel::get(input('roleid'));
			$data->name=input('name');
			$data->description=input('description');
 
			if($data->save()){
				return message('修改成功',true);
			} 
		}
		return message('保存失败',false);
	}

	public function delete_post(){
		if(request()->ispost()){
			$id=input('roleid');
			$role=RolesModel::find($id);
			if($role->delete()){
				return message('删除成功',true);
			}
		} 
		return message('删除失败',false);
	}
 
	public function allot(){
		$id=input('id'); 
		$role=RolesModel::find($id);  
		$this->assign('role',$role);
		$this->assign('ms',$this->modules($role));
		return $this->setnav(true)
				->setdata('modulename','基础设置')
				->settitle('权限分配')
				->fetch('roles/allot');
	}

	public function allot_post(){
		if(request()->ispost()){
			$ids 	=input("ids");
			$roleid =input("roleid");
			$arr=array_unique(explode(',',$ids)); 
	 
			$model=new Usersinroles();
			$model->roleid=$roleid;


			if($model->addFuns($arr)){
				return message('添加成功',true);
			}
			return message('添加失败',false);
		}
	}

	public function modules($role){
		$fs=[];
		$role_funs=$role->functions->toArray();
		foreach ($role_funs as $key => $value) {
			$fs[$key]=$value['funid'];
		}
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
				'id' 		=> $value->url,
				'text' 		=> $value->name,
				'icon' 		=> '',
				'state' 	=> ["opened" => true],
				'children' 	=> $m
			];
		} 
		return json_encode($info);
	}
}