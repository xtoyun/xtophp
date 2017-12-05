<?
namespace app\web\admin;

use app\web\dao\KeywordDao;

class Keyword extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=KeywordDao::instance();
	}

	public function index(){ 
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('kid','desc');
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('关键字')
				->setDataSource($this->dao->select())
				->addColumnButton('delete') 
				->addNav('','关键字',url('keyword/index')) 
				->addTopButton('','创建',url('keyword/create'))
				->addColumnButton('','',url('keyword/edit').'?id=$kid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('kid')
				->setColumns([
					['kid', '编号'],
					
					['title', '名称'],
					['url', '地址','link','$url'], 
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('keyword/create'))
				->addNav('','关键字',url('keyword/index'))
				->setTitle('添加关键字')
				->addFormItems([ 
						['text', 'title', '名称', ''],
						['text', 'url', '地址', '格式：http://','http://'],

					])
				->submit('keyword_create','')
				->fetch();
	}

	public function edit(){
		$id=input('id'); 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('keyword/edit'),'?id='.$id)
				->addNav('','关键字',url('keyword/index'))
				->setTitle('编辑关键字')
				->addFormItems([
						['text', 'title', '名称', ''],
						['text', 'url', '地址', '格式：http://','http://'],
					])
				->setDataSource($this->dao->find($id))
				->setPid('kid',$id)
				->submit('keyword_update','')
				->fetch();
	}
}