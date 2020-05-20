<?
namespace app\admin\admin;

use data\model\SysMenu as MenuModel; 

class Menu extends BaseController{

	public function index(){
		return $this->fetch('menu/index');
	}

	public function cate_data(){
		$list=MenuModel::where("")->order('parent_id asc')->select()->toarray();
		return json($list); 
	}

	//获取列表
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
		 
		$result=MenuModel::selectpage(9999,$where,'menu_id asc')->toarray();//读取数据
	 	$res=['code'=>0,
	 	'count'=>$result['total'],
	 	'msg'=>'',
	 	'data'=>$result['data']];
		return json($res);  
	}

	public function create_post(){
	 	if(request()->ispost()){
	 		$post_data=$_POST;
			$menu_model=new MenuModel();
			if(empty($post_data['parent_id'])){
				$post_data['parent_id']=-1;
			}
			if(isset($post_data['is_control_auth']) && $post_data['is_control_auth']=="on"){
					$post_data['is_control_auth']=1;
				}
			$post_data['is_menu']=1;
			$post_data['appid']=appid();
			if($menu_model->save($post_data)){
				return message('保存成功',true);
			} 
		}
		return message('保存失败',false);
	}

	public function menu_list(){
		$id=input('id');
		$current_id=input('current_id');
		if(empty($id)) $id=-1;

		$condition['parent_id']=$id;

		$where="";
		if(!empty($current_id)){
			$where="menu_id<>$current_id";
		}
		
		$list=MenuModel::where($condition)->where($where)->select()->toarray();
		$result=[];
		foreach ($list as $key => $value) {
			$count=MenuModel::where(['parent_id'=>$value['menu_id']])->count();
			$result[$key]=[
				'value'=>$value['menu_id'],
				'label'=>$value['menu_name'],
				'haveChildren'=>($count>0?true:false)
			];
		}
		return json($result);
	}

	public function edit_post(){
	 	if(request()->ispost()){
	 		$post_data=$_POST;
	 		$menu_id=$post_data['menu_id'];
			$data=MenuModel::find($menu_id);
			if($data){ 
				if(empty($post_data['parent_id'])){
					$post_data['parent_id']=-1;
				}
				if(isset($post_data['is_control_auth']) && $post_data['is_control_auth']=="on"){
					$post_data['is_control_auth']=1;
				}
	 
				if($data->save($post_data)){
					return message('修改成功',true);
				} 
			}else{
				return message('数据不存在',false);
			}
		}
		return message('保存失败',false);
	}

	public function delete_post(){
		if(request()->ispost()){
			$menu_id=input('menu_id');
			$menu=MenuModel::find($menu_id);
			if($menu){
				if($menu->delete()){
					return message('删除成功',true);
				}
			}
			
		} 
		return message('删除失败',false);
	}
}