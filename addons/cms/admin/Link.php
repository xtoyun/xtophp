<?
namespace addons\cms\admin;
 
use addons\cms\model\WebLink as LinkModel;

class Link extends BaseController{
  
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
		 
		$result=LinkModel::selectpage(10,$where,'lid desc')->toarray();//读取数据
	 
		return json($result); 
	}

	public function index(){
		return $this->fetch('link/index');
	}

	public function create_post(){
		if(request()->ispost()){
		 	$title = input('title');
		 	$image = input('image');
		 	$url = input('url');

		 	if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category = new LinkModel();
			$category->title = $title;
			$category->image = $image;
			$category->url = $url;
			$category->appid=appid();

			$result = $category->save();
			if ($result) {
				return message('添加成功',true);
			}
			return message('添加失败',false);
		 }
	}
	public function delete_post(){
		if(request()->ispost()){
			$lid = input('id');
			$category_item =LinkModel::get( $lid); 

			if ($category_item) {
				$result = $category_item->delete();
				if ($result) {
					return message('删除成功',true);
				}
				return message('删除失败',false);
			}
		}
	}

	public function edit_post(){
		if(request()->ispost()){
			$lid = input('lid');
	 		$title = input('title');
	 		$url = input('url');	
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category_item = LinkModel::find($lid);
			if ($category_item) {
				$category_item->title = $title;
				$category_item->url = $url;
				$result = $category_item->force()->save();
				if ($result) {
					return message('修改成功',true);
				}
			}
			return message('修改失败',false);
		}
	}
}