<?
namespace addons\cms\admin;

use addons\cms\model\WebAbout as AboutModel; 

class About extends BaseController{

	public function index(){
		return $this->fetch('about/index');
	}

	public function data_list(){
		$where=[];
		if(!empty(input('title'))){
			$where['title']=input('title');
		}   
		 
		$result=AboutModel::selectpage(10,$where,'abid desc')->toarray();//读取数据
	 
		return json($result); 
	} 
	 
	public function create_post(){
		if (request()->ispost()) {
			$data=$_POST;

			if (empty($data['title'])) {
				return message('标题不能为空',false);
			}
			if (empty($data['content'])) {
				return message('内容不能为空',false);
			}
			$about_item = new AboutModel();
			$about_item->appid=appid();
			$result = $about_item->save($data);
			if ($result) {
				return message('创建成功',true);
			}
			return message('创建失败',false);
		}

	}
 
	public function about_update(){
			if (request()->ispost()) {
				$data=$_POST;

				$abid = $data['abid'];
				
				if (empty($data['title'])) {
					return message('标题不能为空',false);
				}
				$about_item = AboutModel::find($abid);
				$result = $about_item->force()->save($data);
				if ($result) {
					return message('修改成功',true);
				}
				return message('修改失败',false);
			}
	}
	public function delete_post(){
		if (request()->ispost()) {
			$abid = input('id');
			$about_item = AboutModel::get($abid,'content');
			if ($about_item) {
				$result = $about_item->delete();
				if ($result) {
					return message('删除成功',true);
				}
				return message('删除失败',false);
			}
		}
	}

	public function delete_list_post(){
		$ids=input('ids');
		if($ids){
			foreach ($ids as $key => $value) {
				$info=AboutModel::find($value['abid']);
				if ($info) {
					$info->delete();				
				}
			}
			return message('删除成功',true); 
		}
		return message('删除失败',false); 
	}
}