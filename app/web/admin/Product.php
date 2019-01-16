<?
namespace app\web\admin;

use xto\Util;
use xto\App;
use app\web\dao\FieldDao;
use app\web\dao\ProductDao; 
use app\web\dao\ProductCategoryDao;

class Product extends BaseController{
	private $dao;

	public function __construct(){
		parent::__construct();
		$this->dao=ProductDao::instance();
	}

	public function index(){ 
		$this->dao->map['a.nid']=input('nid');
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('pid','desc');
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('产品管理')
				->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($this->dao->selectpage(10))
				->addColumnButton('delete','删除',url('product/post_delete')) 
				->addColumnButton('','',url('product/edit').'?id=$pid','','fa fa-pencil')
				->addNav('','产品列表',url('product/index')) 
				->addTopButton('','创建',url('product/create').'?nid='.input('nid'))
				->setQuickSearch('title','')
				->setPid('pid')
				->setColumns([
					['pid', '编号'],
					['catename', '类别'],
					['title', '标题','link','edit?id=$pid'], 
					['version', '版本'],
					['price', '价格'],
					['spec', '规格'],
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
		$c_dao=ProductCategoryDao::instance();
		$data=[];
		foreach ($c_dao->select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		$fields=[ 
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
						['hr',''],
						['text', 'version', '版本', ''],
						['text', 'price', '价格', ''],
						['text', 'spec', '规格', ''],

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
				->addNav('','创建产品',url('product/create'))
				->addNav('','产品列表',url('product/index').'?nid='.$nid)
				->setTitle('添加类别')
				->addFormItems($fields)
				->submit(url('product/product_create'))
				->setPid('nid',$nid)
				->fetch();
	}

	public function edit(){
		$id=input('id'); 
		$c_dao=ProductCategoryDao::instance();
		$data=[];
		foreach ($c_dao->select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		$fields=[
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
						['hr', 'author', '作者', ''],
						['text', 'version', '版本', ''],
						['text', 'price', '价格', ''],
						['text', 'spec', '规格', ''],
					];
		//合并字段
		$f_dao=FieldDao::instance();			
		$fields=array_merge_recursive($fields,$f_dao->get_fields($this->dao->table));

		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑产品',url('product/edit'),'?id='.$id)
				//->addNav('','产品列表',url('product/index'))
				->setTitle('编辑产品')
				->addLeftBlock('nav','选择栏目','nav')
				->addFormItems($fields)
				->setDataSource($this->dao->find($id))
				->setPid('pid',$id)
				->submit(url('product/product_update'))
				->fetch();
	}


	public function product_create(){
		$nid=input('nid');
		if (empty($nid)) {
			return Util::message('添加异常',false);
		}
		if(empty(input('cateid'))){
			return Util::message('请选择类别',false);
		}
		if(empty(input('title'))){
			return Util::message('标题不能为空',false);
		}
		if(request()->ispost()){
			$data=request()->post();
			if($this->dao->save($data)){
				return Util::message('添加成功',true);
			}
		}
		return Util::message('添加失败',false);
	}

	public function product_update(){
		if(empty(input('cateid'))){
			return Util::message('请选择类别',false);
		}
		if(empty(input('title'))){
			return Util::message('标题不能为空',false);
		}
		if(request()->ispost()){
			$data=request()->post(); 
			if($this->dao->edit($data)){
				return Util::message('更新成功',true);
			}
		}
		return Util::message('更新失败',false);
	}

	public function post_delete(){
		if(request()->ispost()){
			$id 	=input('id'); 
			if($this->dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}
}