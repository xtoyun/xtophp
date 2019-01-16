<?
namespace app\web\admin;

use xto\Util;
use app\web\dao\ArticleDao;
use app\web\dao\CategoryDao;
use app\web\dao\FieldDao;

class Article extends BaseController{
	private $dao;

	public function __construct(){
		parent::__construct();
		$this->dao=ArticleDao::instance();
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
				->addColumnButton('delete','删除',url('article/article_delete')) 
				->addNav('','文章列表',url('article/index').'?nid='.input('nid')) 
				->addTopButton('','创建',url('article/create').'?nid='.input('nid'))
				->addColumnButton('','',url('article/edit').'?id=$arid'.'&nid='.input('nid'),'','fa fa-pencil')
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

		$fields=[['checkbox', 'selfin', '自定义', '',[
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
					];
		//合并字段
		$f_dao=FieldDao::instance();			
		$fields=array_merge_recursive($fields,$f_dao->get_fields($this->dao->table));
		//去重
		$fields=Util::array_unset_tt($fields,1);
		
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addLeftBlock('nav','选择栏目','nav')
				->addNav('','创建文章',url('article/create'))
				->addNav('','文章列表',url('article/index').'?nid='.input('nid'))
				->setTitle('添加类别')
				->addFormItems($fields)
				->submit(url('article/article_create'),'')
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
		$fields=[['checkbox', 'selfin', '自定义', '',[
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
					];
		//移除数据 
		$f_dao=FieldDao::instance();
		//合并字段
		$fields=array_merge_recursive($fields,$f_dao->get_fields($this->dao->table));
		//去重
		$fields=Util::array_unset_tt($fields,1);
		
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑文章',url('article/edit'),'?id='.$id)
				->addNav('','文章列表',url('article/index').'?nid='.input('nid'))
				->setTitle('编辑文章')
				->addLeftBlock('nav','选择栏目','nav')
				->addFormItems($fields)
				->setDataSource($this->dao->find($id))
				->setPid('arid',$id)
				->submit(url('article/article_update'),'')
				->fetch();
	}

	public function article_create(){
		$nid=input('nid');
		if (empty($nid)) {
			return Util::message('添加异常',false);
		}
		if(empty(input('cateid'))){
			return Util::message('请选择类别',false);
		}
		if(empty(input('title'))){
			return Util::message('文章标题不能为空',false);
		}
		if(request()->ispost()){
			$data=request()->post(); 
			if($this->dao->save($data)){
				return Util::message('添加成功',true);
			}
		}
		return Util::message('添加失败',false);
	}

	public function article_update(){
		if(empty(input('cateid'))){
			return Util::message('请选择类别',false);
		}
		if(empty(input('title'))){
			return Util::message('文章标题不能为空',false);
		}
		if(request()->ispost()){
			$data=request()->post(); 
			if($this->dao->edit($data)){
				return Util::message('更新成功',true);
			}
		}
		return Util::message('更新失败',false);
	}

	public function article_delete(){
		if(request()->ispost()){
			$id 	=input('id'); 
			if($this->dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}
}