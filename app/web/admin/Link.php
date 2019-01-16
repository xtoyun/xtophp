<?
namespace app\web\admin;

use app\web\dao\LinkDao;

class Link extends BaseController{
	private $dao;

	public function __construct(){
		parent::__construct();
		$this->dao=LinkDao::instance();
	}

	public function index(){ 
		$this->dao->setQuickSearch(input('link'),input('field'));
		$this->dao->setorder('lid','desc');
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('友情链接')
				->setDataSource($this->dao->select())
				->addColumnButton('delete') 
				->addNav('','友情链接',url('link/index')) 
				->addTopButton('','创建',url('link/create'))
				->addColumnButton('','',url('link/edit').'?id=$lid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('lid')
				->setColumns([
					['lid', '编号'],
					
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
				->addNav('','添加',url('link/create'))
				->addNav('','友情链接',url('link/index'))
				->setTitle('添加友情链接')
				->addFormItems([ 
						['text', 'title', '名称', ''],
						['image', 'img', '图片', ''],
						['text', 'url', '地址', '格式：http://','http://'],

					])
				->submit('link_create','')
				->fetch();
	}

	public function edit(){
		$id=input('id'); 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('link/edit'),'?id='.$id)
				->addNav('','友情链接',url('link/index'))
				->setTitle('编辑友情链接')
				->addFormItems([
						['text', 'title', '名称', ''],
						['image', 'img', '图片', ''],
						['text', 'url', '地址', '格式：http://','http://'],
					])
				->setDataSource($this->dao->find($id))
				->setPid('lid',$id)
				->submit('link_update','')
				->fetch();
	}
}