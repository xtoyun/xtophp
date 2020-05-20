<?
namespace addons\cms\admin;
 
use addons\cms\model\WebRelays as RelaysModel;
use addons\cms\model\WebRelaysData as RelayDataModel;

class Relay extends BaseController{

	public function get_relay_items(){
		$rid=input('rid'); 
		$where['rid']=$rid;
		$result=RelayDataModel::selectpage(99,$where,'rid desc')->toarray();//读取数据
		return json($result); 	
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
		 
		$result=RelaysModel::selectpage(10,$where,'rid desc')->toarray();//读取数据
	 
		return json($result); 
	}
  
	public function detail_delete_post(){
		if(request()->ispost()){
			$rdid=input('id');
			$info=RelayDataModel::find($rdid); 
			if ($info) {
				if($info->delete()){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
	}
 

	public function relay_data_create(){
		if(request()->ispost()){
			$rid=input('rid');
			$title=input('title');
			$link=input('link');
			$img=input('img');

			if (empty($title)) {
				return message('标题不能为空',false);
			}
			$info=new RelayDataModel;
			$info->rid=$rid;
			$info->title=$title;
			$info->link=$link;
			$info->img=$img;
			$info->appid=appid();
			if($info->save()){
				return message('成功',true);
			}
		}
		return message('提交失败',false);
	}

	public function relay_data_update(){
		if(request()->ispost()){
			$rdid=input('rdid');
			$title=input('title');
			$link=input('link');
			$img=input('img');

			if (empty($title)) {
				return message('标题不能为空',false);
			}

			$info=RelayDataModel::find($rdid);
			if ($info) {
				$info->title=$title;
				$info->link=$link;
				$info->img=$img;
				if($info->save()){
					return message('成功',true);
				}
			}
			
		}
		return message('提交失败',false);
	}

	public function index(){
		return $this->fetch('relay/index');
	}

	public function create_post(){
		if(request()->ispost()){
			$title = input('title');
			$ename = input('ename');
			$remark = input('remark');
			$items = input('items');

			if(empty($title)){
				return message('名称不能为空',false);
			}
			if(!$items){
				return message('请添加图片',false);
			}

			if(RelaysModel::where(['title'=>$title])->count()>0){
				return message('该名称已经存在',false);
			}
			$category = new RelaysModel();
			$category->title = $title;
			$category->ename = $ename;
			$category->remark = $remark;
			$category->appid=appid();

			$result = $category->save();
			if ($result) {
				foreach ($items as $key => $value) {
					unset($value['rdid']);
					$laydata=new RelayDataModel();
					$laydata->save($value);
				}
				return message('添加成功',true);
			}
			return message('添加失败',false);
		 }
	}

	public function delete_post(){
		if (request()->ispost()) {
			$rid = input('id');
			$category_item = RelaysModel::get($rid,'Items');

			if ($category_item) {
				$result = $category_item->together('Items')->delete();
				if($result){
					return message('删除成功',true);
				}
			} 
		}
		return message('删除失败',false);
 }


	public function edit_post(){
		if(request()->ispost()){
			$rid = input('rid');
	 		$title = input('title');
	 		$remark = input('remark');	
	 		$items = input('items');
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			$relay = RelaysModel::find($rid);
			$relay->title = $title;
			$relay->remark = $remark;

			$result = $relay->force()->save();
			if ($result) {
				RelayDataModel::where(['rid'=>$relay->rid])->delete();
				foreach ($items as $key => $value) {
					unset($value['rdid']);
					$laydata=new RelayDataModel();
					$laydata->appid=appid();
					$laydata->rid=$relay->rid;
					$laydata->save($value);
				}
				return message('修改成功',true);
			}
			return message('修改失败',false);
		}
	}
}