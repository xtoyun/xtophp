<?
namespace app\web\admin;

use xto\Util;
use app\web\dao\ProductCategoryDao;

class Pcategory extends BaseController{
	private $dao;

	public function __construct(){
		parent::__construct();
		$this->dao=ProductCategoryDao::instance();
	}

	public function index(){ 
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('cateid','desc');
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('产品类别')
				->setDataSource($this->dao->select())
				->addColumnButton('delete') 
				->addNav('','类别',url('pcategory/index')) 
				->addTopButton('','创建',url('pcategory/create'))
				->addColumnButton('','',url('pcategory/edit').'?id=$cateid','','fa fa-pencil')
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
				->addNav('','添加',url('pcategory/create'))
				->addNav('','产品类别',url('pcategory/index'))
				->setTitle('添加类别')
				->addFormItems([
						['select', 'parent_cateid', '上级', '',$data],
						['text', 'catename', '名称', ''],
						['text', 'order', '排序', ''],

					])
				->submit(url('pcategory/product_category_create'),'')
				->fetch();
	}

	public function edit(){
		$id=input('id'); 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('pcategory/edit'),'?id='.$id)
				->addNav('','类别',url('pcategory/index'))
				->setTitle('编辑类别')
				->addFormItems([
						['text', 'catename', '名称', ''],
						['text', 'order', '排序', ''],
					])
				->setDataSource($this->dao->find($id))
				->setPid('cateid',$id)
				->submit(url('pcategory/product_category_update'),'',url('pcategory/index'))
				->fetch();
	}

	public function product_category_create(){
		if(request()->ispost()){
			if(empty(input('catename'))){
				return Util::message('名称不能为空',false);
			}
			$dao=\app\web\dao\ProductCategoryDao::instance();
			$t=request();	 

			if($dao->save($t->param())){
				return Util::message('保存成功',true);
			}
		}
		return Util::message('保存失败',false);
	}

	public function product_category_update(){
		if(request()->ispost()){
			$dao 	=\app\web\dao\ProductCategoryDao::instance();
			$t 		=request();	 
			$id 	=input('cateid');
			$name 	=input('catename');

			if(empty(input('catename'))){
				return Util::message('名称不能为空',false);
			}

			$info=$dao->find($id);
			if (!empty($info)) {
				$info=array_merge($info,$t->param());
			}			
			
			$dao->map="(catename='$name' and cateid<>$id)"; 
			if($dao->update($info)){
				return Util::message('保存成功',true);
			}
		}
		return Util::message('保存失败',false);
	}
}