<?
namespace app\admin\admin;

use app\data\model\About as AboutModel;
use app\data\model\Nav as NavModel;
use app\data\model\Content as ContentModel;

class About extends BaseController{

		public function index(){ 
		$list = AboutModel::selectpage(15,'','abid desc'); 

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('页面管理')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','页面管理',url('about/index'))
				->addTopButton('','创建',url('about/create'))
				->addColumnButton('','修改',url('about/edit').'?abid=$abid','','fa fa-pencil') 
				->setQuickSearch('name','')
				->setPid('abid')
				->setColumns([
					['abid', '编号'],
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
				->addNav('','添加单页',url('about/create'))
				->addNav('','页面管理',url('about/index'))
				->setTitle('添加单页')
				->addFormItems([ 
						//['select','nid','栏目','',$navs],
						['text', 'name', '页面名称', ''],
						['text', 'title', '标题', ''],
						['ueditor','content','内容'],
						// ['select', 'tablename', '数据表', '',$this->tables()],
						// ['select', 'controller', '控制器', '',$this->controllers()],
						
						// ['line', '', '', ''],
						// ['web_theme_select', 'default_theme', '可用风格', '',$result],in
						['text','order','排序',''],
						['text', 'description', '描述', ''],
					])
				->submit(url('about/create_post'),'')
				->fetch();

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
			$result = $about_item->save($data);
			if ($result) {
				return message('创建成功',true);
			}
			return message('创建失败',false);
		}

	}

	public function edit(){
		$abid = input('abid'); 
		$info = AboutModel::getinfo($abid);
		// $navs=[];
		// foreach (NavModel::getlist('单页模型') as $key => $value) {
		// 	$navs[$value['title']]=$value['nid'];
		// }  
		$fields=[	
			//['select','nid','栏目','',$navs],
						['text', 'name', '页面名称', ''],
						['text', 'title', '标题', ''],
						['ueditor', 'content', '内容', ''],
						['text', 'order', '排序', ''],
						['tags', 'key', '关键字', ''],
						['textarea', 'description', '描述', ''],
					];
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑单页',url('about/edit'),'?nid='.$abid)
				->addNav('','单页列表',url('about/index'))
				->setTitle('编辑单页')
				//->addLeftBlock('nav','选择栏目','nav')
				->addFormItems($fields)
				->setDataSource($info)
				->setPid('abid',$abid)
				->submit(url('about/about_update'),'')
				->fetch();
	}
	public function about_update(){
			if (request()->ispost()) {
				$data=$_POST;

				$abid = $data['abid'];
				// $title = input('title');
				// $content = input('content');
				// $order = input('order');
				// $key = input('key');
				// $description = input('description');
				
				if (empty($data['title'])) {
					return message('标题不能为空',false);
				}
				$about_item = AboutModel::find($abid);

				// if($about_item->content){
				// 	$about_item->content->title = $title;
				// 	$about_item->content->content = $content;
				// 	$about_item->content->order = $order;
				// 	$about_item->content->key = $key;
				// 	$about_item->content->description = $description;
				// 	$about_item->content->save();
				// }
				
				//$about_item->title=$title;
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
}