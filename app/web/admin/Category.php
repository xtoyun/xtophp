<?
namespace app\web\admin;

use app\web\dao\CategoryDao;

class Category extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=CategoryDao::instance();
	}

	public function index(){ 
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('cateid','desc');
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('文章类别')
				->setDataSource($this->dao->select())
				->addColumnButton('delete') 
				->addNav('','类别',url('category/index')) 
				->addTopButton('','创建',url('category/create'))
				->addColumnButton('','',url('category/edit').'?id=$cateid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('cateid')
				->setColumns([
					['cateid', '编号'],
					['pname', '上级'],
					['catename', '名称'],
                    ['order', '排序'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		$data=[];
		foreach ($this->dao->select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('category/create'))
				->addNav('','文章类别',url('category/index'))
				->setTitle('添加类别')
				->addFormItems([
						['select', 'parent_cateid', '上级', '',$data],
						['text', 'catename', '名称', ''],
						['text', 'order', '排序', ''],

					])
				->submit('article_category_create','')
				->fetch();
	}

	public function edit(){
		$id=input('id'); 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('category/edit'),'?id='.$id)
				->addNav('','类别',url('category/index'))
				->setTitle('编辑类别')
				->addFormItems([
						['text', 'catename', '名称', ''],
						['text', 'order', '排序', ''],
					])
				->setDataSource($this->dao->find($id))
				->setPid('cateid',$id)
				->submit('article_category_update','')
				->fetch();
	}
}