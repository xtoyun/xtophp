<?
namespace app\admin\admin;
 
use app\data\model\Cmodel;

class Model extends BaseController{

	public function index(){
	$list = Cmodel::where(null)->order('mid desc')->paginate(10);  

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('内容模型')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','内容模型',url('model/index')) 
				->addTopButton('','添加模型',url('model/create'))
				->addColumnButton('','修改',url('model/edit').'?mid=$mid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('mid')
				->setColumns([
					['mid', '编号'], 
					['name', '模型名称','link',url('field/index').'?mid=$mid'],
					['tablename', '数据表名'],
					['description', '描述','',''],
					['createdate','创建时间'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function home_theme_templates(){
		$theme_name =input('theme');
		$url=config('home_theme_path').$theme_name;

		$categorys 	=getfiles($url.'/category');
		$shows 		=getfiles($url.'/show');
		$lists 		=getfiles($url.'/list');
		$arr 		=array(
				'categorys' 	=> $categorys,
				'lists' 		=> $lists,
				'shows' 		=> $shows
			);
		return json($arr);
	}

	public function create(){ 
		$source = get_home_themes();
		$result =[];
		foreach ($source as $key => $value) {
			$result[$value['theme']['name']]=$key;
		}
		
		return $this->template
				->FormTemplate 
				->setData('modulename','内容设置') 
				->addNav('','添加模型',url('model/create'))
				->addNav('','内容模型',url('model/index'))
				->setTitle('添加模型')
				->addFormItems([ 
						['text', 'name', '模型名称', ''],
						['select', 'tablename', '数据表', '',$this->tables()],
						['select', 'controller', '控制器', '',$this->controllers()],
						
						['line', '', '', ''],
						['web_theme_select', 'default_theme', '可用风格', '',$result],
						['text', 'description', '描述', ''],
						['date','createdate','创建时间']
					])
				->submit(url('model/create_post'),'')
				->fetch();
	}

	public function create_post(){
		if (request()->ispost()) {
			$name = input('name');
			$tablename = input('tablename');
			$controller = input('controller');
			$description = input('description');
			$createdate = input('createdate');
		
			if (empty($name)) {
				return message('请输入模型名称',false);
			}
			if(empty($tablename)){
				return message('请输入数据表',false);
			}
			if (empty($controller)) {
				return message('请输入控制器',false);
			}

			$model_item = new Cmodel();
			$model_item->name = $name;
			$model_item->tablename = $tablename;
			$model_item->controller = $controller;
			$model_item->description = $description;
			$model_item->default_theme = input('default_theme');
			$model_item->category_template = input('category_template');
			$model_item->list_template = input('list_template');
			$model_item->show_template = input('show_template');
			$model_item->createdate=getdate();

			$result = $model_item->save();
			if ($result) {
				return message('保存成功',true);
			}
		}
		return message('保存失败',false);
	}
	public function delete_post(){
		if (request()->ispost()) {
			$mid = input('id');
			$category_item = Cmodel::get($mid,'sublist');
			if ($category_item) {
				$result = $category_item->together('sublist')->delete();
				if ($result) {
					return message('删除成功',true);
				}
				return message('删除失败',false);
			}
		}
	}

	private function tables(){
		$tables=[
			'文章表'=>'article',
			'产品表'=>'product',
			'单页表'=>'about',
		];
		return $tables;
	}

	private function controllers(){
		$tables=[
			'文章控制器'=>'article',
			'产品控制器'=>'product',
			'单页控制器'=>'about',
		];
		return $tables;
	}

	public function edit(){
		$mid=input('mid'); 
		$source=get_home_themes();
		$result=[];
		foreach ($source as $key => $value) {
			$result[$value['theme']['name']]=$key;
		}

		$category_template='';
		$list_template='';
		$show_template='';
		$default_theme='';

		$info=Cmodel::find($mid)->toArray();
		if(isset($info['default_theme'])){
			$default_theme=$info['default_theme'];
		}

		if(isset($info['category_template'])){
			$category_template=$info['category_template'];
		}
		if(isset($info['list_template'])){
			$list_template=$info['list_template'];
		}
		if(isset($info['show_template'])){
			$show_template=$info['show_template'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('model/edit'),'?id='.$mid)
				->addNav('','内容模型',url('model/index'))
				->setTitle('编辑模型')
				->addFormItems([
						['text', 'name', '模型名称', ''],
						['select', 'tablename', '数据表', '',$this->tables()],
						['select', 'controller', '控制器', '',$this->controllers()],
						
						['line', '', '', ''],
						['web_theme_select', 'default_theme', '可用风格', '',$result,$default_theme,
							$category_template,$list_template,$show_template],
							['text', 'description', '描述', ''],
					])
				->setDataSource($info)
				->setPid('mid',$mid)
				->submit(url('model/edit_post'),'')
				->fetch();
	}

	public function edit_post(){
		if (request()->ispost()) {
			$mid = input('id');
			$name = input('name');
			$tablename = input('tablename');
			$controller = input('controller');
			$description = input('description');

			if (empty($name)) {
				return message('名称不能为空',false);
			}
			if (empty($tablename)) {
				return message('数据表不能为空',false);
			}
			if (empty($controller)) {
				return message('控制器不能为空',false);
			}

			$model_item = Cmodel::find($mid);
			if ($model_item) {
				$model_item->name = $name;
				$model_item->tablename = $tablename;
				$model_item->controller = $controller;
				$model_item->description = $description;
				$model_item->default_theme = input('default_theme');
				$model_item->category_template = input('category_template');
				$model_item->list_template = input('list_template');
				$model_item->show_template = input('show_template');

				$result = $model_item->force()->save();
				if ($result) {
					return message('修改成功',true);
				}
			}
			return message('修改失败',false);
		} 
	}
} 