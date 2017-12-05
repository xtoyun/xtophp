<?
namespace app\web\admin;

use app\web\dao\ArticleDao;
use app\web\dao\CategoryDao;

class Article extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=ArticleDao::instance('a');
	}

	public function index(){ 
		$this->dao->map['a.nid']=input('nid');
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('arid','desc');
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('文章管理')
				->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($this->dao->selectpage(10))
				->addColumnButton('delete') 
				->addNav('','文章列表',url('article/index')) 
				->addTopButton('','创建',url('article/create').'?nid='.input('nid'))
				->addColumnButton('','',url('article/edit').'?id=$arid','','fa fa-pencil')
				->setQuickSearch('title','')
				->setPid('arid')
				->setColumns([
					['arid', '编号'],
					['catename', '类别'],
					['title', '标题','link','edit?id=$arid'], 
					['createdate', '添加时间'], 
                    ['order', '排序'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		$nid=input('nid');
		if(empty($nid)){
			$this->error('请选择栏目');
			return;
		}
		$c_dao=CategoryDao::instance();
		$data=[];
		foreach ($c_dao->select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addLeftBlock('nav','选择栏目','nav')
				->addNav('','创建文章',url('article/create'))
				->addNav('','文章列表',url('article/index'))
				->setTitle('添加类别')
				->addFormItems([ 
						['checkbox', 'selfin', '自定义', '',[
							'推荐'=>'tj',
							'置顶'=>'zd'
							
						],'tj'],
						['select','cateid','类别','',$data],
						['text', 'title', '标题', ''],
						['image', 'img', '图片', ''],
						['ueditor', 'content', '标题', ''],
						['text', 'order', '排序', ''],
						['tags', 'keywords', '关键字', ''],
						['text', 'author', '作者', ''],
						['textarea', 'description', '描述', ''],
					])
				->submit('article_create','')
				->setPid('nid',$nid)
				->fetch();
	}

	public function edit(){
		$id=input('id'); 
		$c_dao=CategoryDao::instance();
		$data=[];
		foreach ($c_dao->select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑文章',url('article/edit'),'?id='.$id)
				//->addNav('','文章列表',url('article/index'))
				->setTitle('编辑文章')
				->addLeftBlock('nav','选择栏目','nav')
				->addFormItems([
						['checkbox', 'selfin', '自定义', '',[
							'置顶'=>'zd',
							'推荐'=>'tj'
						]],
						['select','cateid','类别','',$data],
						['text', 'title', '标题', ''],
						['image', 'img', '图片', ''],
						['ueditor', 'content', '标题', ''],
						['text', 'order', '排序', ''],
						['tags', 'keywords', '关键字', ''],
						['text', 'author', '作者', ''],
						['textarea', 'description', '描述', ''],
					])
				->setDataSource($this->dao->find($id))
				->setPid('arid',$id)
				->submit('article_update','')
				->fetch();
	}
}