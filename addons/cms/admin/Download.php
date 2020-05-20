<?
namespace addons\cms\admin;


use addons\cms\model\WebDownload as DownloadInfo;
use addons\cms\model\WebDownloadCategory as DownloadCategory;

class Download extends BaseController{
	public function index(){
		return $this->fetch('download/index');
	}

	public function lists(){
		return $this->fetch('download/index');
	}

	public function config(){
		return $this->fetch('download/config');
	}

	public function category(){
		return $this->fetch('download/category');
	}

	public function get_category_list(){
		$where=[];
		if(!empty(input('catename'))){
			$where['catename']=input('catename');
		} 
		 
		$result=DownloadCategory::selectpage(99,$where,'cateid desc')->toarray();//读取数据
	 
	 	$res=['code'=>0,
	 	'count'=>$result['total'],
	 	'msg'=>'',
	 	'data'=>$result['data']];
		return json($res); 
	} 

	public function get_category_data(){
		$cateid=input('cateid'); 
		if(empty($cateid)) $cateid=-1;

		$condition['parent_cateid']=$cateid;
		if(!empty($current_id)){
			$condition['cateid']=['<>',$current_id]; 
		}
		
		$list=DownloadCategory::where($condition)->select()->toarray();
		$result=[];
		foreach ($list as $key => $value) {
			$count=DownloadCategory::where(['parent_cateid'=>$value['cateid']])->count();
			$result[$key]=[
				'value'=>$value['cateid'],
				'label'=>$value['catename'],
				'haveChildren'=>($count>0?true:false)
			];
		}
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
		 
		$result=DownloadInfo::selectpage(10,$where,'did desc')->toarray();//读取数据
	 
		return json($result); 
	}

	public function create_post(){
		if (request()->ispost()) {
			$data=$_POST;
			if (empty($data['title'])) {
				return message('标题不能为空',false);
			}
			if (empty($data['description'])) {
				return message('内容不能为空',false);
			}
			if (empty($data['link'])) {
				return message('链接不能为空',false);
			}
			$about_item = new DownloadInfo();
			$about_item->appid=appid();
			$result = $about_item->save($data);
			if ($result) {
				return message('创建成功',true);
			}
			return message('创建失败',false);
		}

	}
	public function update_post(){
			if (request()->ispost()) {
				$data=$_POST;

				$did = $data['did'];
				if (empty($data['title'])) {
					return message('标题不能为空',false);
				}
				$about_item = DownloadInfo::find($did);
				$result = $about_item->force()->save($data);
				if ($result) {
					return message('修改成功',true);
				}
				return message('修改失败',false);

			}
	}
	public function delete_post(){
		if (request()->ispost()) {
			$did = input('id');
			$about_item = DownloadInfo::get($did);
			if ($about_item) {
				$result = $about_item->delete();
				if ($result) {
					return message('删除成功',true);
				}
				return message('删除失败',false);
			}
		}

	}

	public function category_create_post(){
		if (request()->ispost()) {
			return message('删除失败',false);
		}
	}
}