<?
namespace app\web\admin;

// use app\web\dao\ModelDao;
use app\web\core\Utils;
use app\web\model\WebModel;

class Model extends BaseController{

	public function index(){
	$list = WebModel::where(null)->order('mid desc')->paginate(5);  

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('内容模型')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','内容模型',url('model/index')) 
				->addTopButton('','添加模型',url('model/create'))
				->addColumnButton('','edit',url('model/edit').'?mid=$mid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('mid')
				->setColumns([
					['mid', '编号'], 
					['name', '名称','link',url('field/index').'?mid=$mid'],
					['tablename', '数据表名'],
					['description', '描述','',''],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){ 
		$source = new WebModel();
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
						['select', 'tablename', '数据表', '',''],
						['text', 'controller', '控制器', '',''],
						['text', 'description', '描述', ''],
						['line', '', '', ''],
						['web_theme_select', 'default_theme', '可用风格', '',$result] 
					])
				->submit('model_create','')
				->fetch();
	}
	public function delete_post(){
		if (request()->ispost()) {
			$mid = input('id');
			$category_item = WebModel::get($mid,'sublist');
			if ($category_item) {
				$result = $category_item->together('sublist')->delete();
				if ($result) {
					return message('删除成功',true);
				}
				return message('删除失败',false);
			}
		}
	}

	public function edit(){
		$id=input('id'); 
		$category_item = WebModel::find($id)->toArray();
		$result=[];
		// foreach ($source as $key => $value) {
		// 	$result[$value['theme']['name']]=$key;
		// }

		$category_template='';
		$list_template='';
		$show_template='';
		$default_theme='';

		// $info=$this->dao->find($id);
		// if(isset($info['default_theme'])){
		// 	$default_theme=$info['default_theme'];
		// }

		// if(isset($info['category_template'])){
		// 	$category_template=$info['category_template'];
		// }
		// if(isset($info['list_template'])){
		// 	$list_template=$info['list_template'];
		// }
		// if(isset($info['show_template'])){
		// 	$show_template=$info['show_template'];
		// }
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('model/edit'),'?id='.$id)
				->addNav('','内容模型',url('model/index'))
				->setTitle('编辑模型')
				->addFormItems([
						['text', 'name', '模型名称', ''],
						['text', 'tablename', '数据表', '',''],
						['text', 'controller', '控制器', '',''],
						['text', 'description', '描述', ''],
						['line', '', '', ''],
						['web_theme_select', 'default_theme', '可用风格', '',$result,$default_theme,
							$category_template,$list_template,$show_template] 
					])
				->setDataSource($category_item)
				->setPid('mid',$id)
				->submit('model_update','')
				->fetch();
	}
} 