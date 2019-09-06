<?
namespace app\web\admin;

use app\data\model\Solution as SolutionModel; 

class Solution extends Base{

		public function index(){ 
		$list = SolutionModel::selectpage(15,'','sid desc'); 

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('方案管理')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','方案',url('index'))
				->addTopButton('','创建',url('create'))
				->addColumnButton('','修改',url('edit').'?sid=$sid','','fa fa-pencil') 
				->setQuickSearch('name','')
				->setPid('sid')
				->setColumns([
					['sid', '编号'],
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
				->addNav('','方案管理',url('index'))
				->setTitle('添加单页')
				->addFormItems([ 						
						['text', 'title', '标题', ''],
						['image', 'img1', '图片', ''],
						['textarea','description','内容'],
						['text', 'link', '链接', ''], 
						['text','author','作者',''],
						['text','order','排序',''], 
						['text','reads','方案数',''],
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
			$about_item = new SolutionModel();
			$about_item->appid=appid();
			$result = $about_item->save($data);
			if ($result) {
				return message('创建成功',true);
			}
			return message('创建失败',false);
		}

	}

	public function edit(){
		$sid = input('sid'); 
		$info = SolutionModel::find($sid)->toarray();  
		$fields=[	
						['text', 'title', '标题', ''],
						['textarea','description','内容'],
						['text', 'link', '链接', ''], 
						['text','author','作者',''],
						['text','order','排序',''], 
						['text','reads','方案数',''],
					];
		return $this->template
				->FormTemplate 
				->setData('modulename','内容管理') 
				->addNav('','编辑',url('edit'),'?nid='.$sid)
				->addNav('','列表',url('index'))
				->setTitle('编辑') 
				->addFormItems($fields)
				->setDataSource($info)
				->setPid('sid',$sid)
				->submit(url('about_update'),'')
				->fetch();
	}
	public function about_update(){
			if (request()->ispost()) {
				$data=$_POST;

				$sid = $data['sid'];
				if (empty($data['title'])) {
					return message('标题不能为空',false);
				}
				$about_item = SolutionModel::find($sid);
				$result = $about_item->force()->save($data);
				if ($result) {
					return message('修改成功',true);
				}
				return message('修改失败',false);

			}
	}
	public function delete_post(){
		if (request()->ispost()) {
			$sid = input('id');
			$about_item = SolutionModel::get($sid);
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