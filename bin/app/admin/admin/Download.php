<?
namespace app\admin\admin;

use app\data\model\Download as DownloadModel; 

class Download extends BaseController{

		public function index(){ 
		$list = DownloadModel::selectpage(15,'','did desc'); 

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('下载管理')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','下载列表',url('index'))
				->addTopButton('','创建',url('create'))
				->addColumnButton('','修改',url('edit').'?did=$did','','fa fa-pencil') 
				->setQuickSearch('name','')
				->setPid('did')
				->setColumns([
					['did', '编号'],
					['name', '页面名称'],
                    ['title', '标题'],
                    ['create_time','创建时间'],
                    ['update_time','更新时间'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}
	public function create(){
		// $source = get_home_themes();
		// $result =[];
		// foreach ($source as $key => $value) {
		// 	$result[$value['theme']['name']]=$key;
		// }
		// $navs=[];
		// foreach (NavModel::getlist('单页模型') as $key => $value) {
		// 	$navs[$value['title']]=$value['nid'];
		// }  
		
		return $this->template
				->FormTemplate 
				->setData('modulename','内容设置') 
				->addNav('','添加单页',url('create'))
				->addNav('','下载管理',url('index'))
				->setTitle('添加单页')
				->addFormItems([ 						
						['text', 'title', '标题', ''],
						['image', 'img1', '图片', ''],
						['textarea','description','内容'],
						['text', 'link', '链接', ''], 
						['text','author','作者',''],
						['text','order','排序',''], 
						['text','reads','下载数',''],
					])
				->submit(url('create_post'),'')
				->fetch();

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
			$about_item = new DownloadModel();
			$about_item->appid=appid();
			$result = $about_item->save($data);
			if ($result) {
				return message('创建成功',true);
			}
			return message('创建失败',false);
		}

	}

	public function edit(){
		$did = input('did'); 
		$info = DownloadModel::find($did)->toarray();  
		$fields=[	
						['text', 'title', '标题', ''],
						['textarea','description','内容'],
						['text', 'link', '链接', ''], 
						['text','author','作者',''],
						['text','order','排序',''], 
						['text','reads','下载数',''],
					];
		return $this->template
				->FormTemplate 
				->setData('modulename','内容管理') 
				->addNav('','编辑',url('edit'),'?nid='.$did)
				->addNav('','列表',url('index'))
				->setTitle('编辑') 
				->addFormItems($fields)
				->setDataSource($info)
				->setPid('did',$did)
				->submit(url('about_update'),'')
				->fetch();
	}
	public function about_update(){
			if (request()->ispost()) {
				$data=$_POST;

				$did = $data['did'];
				if (empty($data['title'])) {
					return message('标题不能为空',false);
				}
				$about_item = DownloadModel::find($did);
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
			$about_item = DownloadModel::get($did);
			if ($about_item) {
				$result = $about_item->delete();
				if ($result) {
					return message('删除成功',true);
				}
				return message('删除失败',false);
			}
		}

	}
}