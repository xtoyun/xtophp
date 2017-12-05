<?
namespace app\web\admin;

use app\web\dao\ModelDao;
use app\web\core\Utils;

class Model extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=ModelDao::instance();
	}

	public function index(){ 
		$this->dao->setQuickSearch(input('nav'),input('field'));
		$this->dao->setorder('mid','asc');
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('内容模型')
				->setDataSource($this->dao->select())
				->addColumnButton('delete') 
				->addNav('','内容模型',url('model/index')) 
				->addTopButton('','添加模型',url('model/create'))
				->addColumnButton('','',url('model/edit').'?id=$mid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('mid')
				->setColumns([
					['mid', '编号'], 
					['name', '名称','link','edit?id=$mid'],
					['tablename', '数据表'],
					['description', '描述','',''], 
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){ 
		$source=Utils::get_home_themes();
		$result=[];
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
						['text', 'tablename', '数据表', '',''],
						['text', 'controller', '控制器', '',''],
						['text', 'description', '描述', ''],
						['line', '', '', ''],
						['web_theme_select', 'default_theme', '可用风格', '',$result] 
					])
				->submit('model_create','')
				->fetch();
	}

	public function edit(){
		$id=input('id'); 
		$source=Utils::get_home_themes();
		$result=[];
		foreach ($source as $key => $value) {
			$result[$value['theme']['name']]=$key;
		}

		$cageory_template='';
		$list_template='';
		$show_template='';
		$default_theme='';

		$info=$this->dao->find($id);
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
				->setDataSource($this->dao->find($id))
				->setPid('mid',$id)
				->submit('model_update','')
				->fetch();
	}
}