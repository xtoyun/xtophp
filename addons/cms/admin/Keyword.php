<?
namespace addons\cms\admin;
 
use addons\cms\model\WebKeyurl as KeyurlModel;

class Keyword extends BaseController{

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
		 
		$result=KeyurlModel::selectpage(10,$where,'kid desc')->toarray();//读取数据
	 
		return json($result); 
	}
 
	public function index(){
		return $this->fetch('keyword/index');
	}

	public function create_post(){
		if(request()->ispost()){
	 		$title = input('title');
	 		$url = input('url');

 			if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}

	 		$category = new KeyurlModel();
	 		$category->title = $title;
	 		$category->url = $url;
	 		$category->appid=appid();

	 		$result = $category->save();
	 		if($result){
	 			return message('创建成功',true);
	 		}
	 		return message('创建失败',false);
	 	}
	}

	public function delete_post(){
		if (request()->ispost()) {
			$kid = input('id');
			$category_item = KeyurlModel::get($kid);

			if ($category_item) {
				$result = $category_item->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
 }


	public function edit_post(){
		if(request()->ispost()){
			$kid = input('kid');
	 		$title = input('title');
	 		$url = input('url');	
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category_item = KeyurlModel::find($kid);
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