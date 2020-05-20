<?
namespace app\admin\admin\manager;

 
use data\membership\SysRoles as RolesModel;
use data\membership\SysUsersinroles as Usersinroles;
use app\admin\admin\BaseController as Controller;

class Roles extends Controller{

	public function rlist(){
 
		return $this->fetch('manager/rlist');
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
		 
		$result=RolesModel::selectpage(10,$where,'roleid desc')->toarray();//读取数据
	 
		return json($result); 
	}
	 

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
				->addTopButton('','创建',url('create')) 
				->addColumnButton('','',url('edit').'?id=$roleid','','fa fa-pencil')
				->addNav('','角色列表',url('index'))
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
				->submit(url('roles/createrole_post'),'',url('index'))
				->fetch();
	} 

	public function createrole_post(){
	 	if(request()->ispost()){
			$data=new RolesModel();
			$data->name=input('name');
			$data->appid=appid();//添加全局id
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

	public function role_funs(){ 
		$id=input('roleid'); 
		$role=RolesModel::find($id); 
		$fs=[];
		$role_funs=$role->functions->toArray();
		foreach ($role_funs as $key => $value) {
			$fs[$key]=$value['funid'];
		}
		$info=[];


		// $arr=$this->module->modules();

		// $info=array();
		// foreach ($arr as $key => $value) {
		// 	$m=[]; 
		// 	foreach ($value->menus as $mkey => $mvalue) {
		// 		$pagelink=[];
		// 		foreach ($mvalue['pagelink'] as $pkey => $pvalue) {
		// 			$fun=[];

		// 			foreach ($pvalue['function'] as $fkey => $fvalue) {
		// 				$fun[]=[
		// 					//'id' 		=> $mvalue['url'].','.$pvalue['url'].','.$fvalue['url'],
		// 					'name' 		=> $fvalue['title'],
		// 					'id' 		=> $fvalue['id'],
		// 					//'icon' 		=> '',
		// 					//'state' 	=> ["opened" => true,'checked'=>in_array($fvalue['url'],$fs)],
		// 					'open' 	=> false,
		// 					'checked'=>in_array($fvalue['id'],$fs)
		// 				];
		// 			}
		// 			$pstatus=false;
		// 			if(count($fun)>0){
		// 				$pstatus=false;
		// 			}
		// 			if(in_array($pvalue['id'],$fs)){
		// 				$pstatus=true;
		// 			}
		// 			$pagelink[]=[
		// 					//'id' 		=> $mvalue['url'].','.$pvalue['url'],
		// 					'name' 		=> $pvalue['title'],
		// 					'id' 		=> $pvalue['id'],
		// 					//'icon' 		=> '',
		// 					//'state' 	=> ["opened" => true,'checked'=>$pstatus],
		// 					'children' 	=> $fun,
		// 					'open'=>true,
		// 					'checked'=>$pstatus
		// 				];
		// 		}
		// 		//检查是否存在
		// 		$mstatus=false;
		// 		if(count($pagelink)>0){
		// 			$mstatus=false;
		// 		}
		// 		if(in_array($mvalue['id'],$fs)){
		// 			$mstatus=true;
		// 		}
		// 		$m[]=[
		// 			//'id' 		=> $mvalue['url'],
		// 			'name' 		=> $mvalue['title'],
		// 			'id' 		=> $mvalue['id'],
		// 			//'icon' 		=> '',
		// 			//'state' 	=> ["opened" => true,'checked'=>$mstatus ],
		// 			'children' 	=> $pagelink,
		// 			'open'=>true,
		// 			'checked'=>$mstatus
		// 		];
		// 	}  
		// 	$info[]=[
		// 		//'id' 		=> $value->url,
		// 		'name' 		=> $value->name,
		// 		'id' 		=> $value->id,
		// 		//'icon' 		=> '',
		// 		//'state' 	=> ["opened" => true],
		// 		'children' 	=> $m,
		// 		'checked'=>($role_funs?true:false),
		// 		'open'=>true
		// 	];
		// } 
		return json($info);
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
			//$arr=array_unique(explode(',',$ids)); 
			$arr=json_decode($ids);
	 
			$model=new Usersinroles();
			$model->roleid=$roleid;
			$model->appid=appid(); 

			if($model->addFuns($arr)){
				return message('提交成功',true);
			}
			return message('提交失败',false);
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
					}else if(in_array($pvalue['id'],$fs)){
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
				}else if(in_array($mvalue['id'],$fs)){
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