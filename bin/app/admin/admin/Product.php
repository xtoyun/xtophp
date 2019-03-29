<?
namespace app\admin\admin;

use app\data\model\Product as ProductModel; 
use app\data\model\ProductCategory as ProductCategoryModel;
use app\data\model\Content as ContentModel;

class Product extends BaseController{

	public function index(){
	    $where=[];
		if (!empty(input('field'))) {
			$where=[[input('field'),'like',input('keyword').'%']];
		}  
		$where['nid']= input('nid');
		$list = ProductModel::selectpage(10,$where);//直接用selectpage，里面有相关联的表
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('商品管理')
				//->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete','删除',url('product/product_delete')) 
				->addColumnButton('','修改',url('product/edit').'?id=$arid&nid='.input('nid'),'','fa fa-pencil')
				->addNav('','商品列表',url('product/index'),'?nid='.input('nid')) 
				->addTopButton('','创建',url('product/create').'?nid='.input('nid'))
				->setQuickSearch('title','')
				->setPid('pid')
				->setColumns([
					['pid','商品编号'],
					['cateid','上级编号'],
					['version','版本号'],
					['order','排序'],
					['update_time','发布时间'],
					['button','操作','btn'],
				])
				->fetch();
	}

	public function create(){
		$nid=input('nid');
		// if(empty($nid)){
		// 	$this->error('请选择栏目');
		// 	return;
		// }
		$data=[];
		foreach (ProductCategoryModel::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		$fields=[['checkbox', 'selfin', '自定义', '',[
							'推荐'=>'tj',
							'置顶'=>'zd'
							
						],'tj'],
						['select','cateid','商品类别','',$data],
						// ['text', 'title', '标题', ''],
						['image', 'img', '图片', ''],
						['ueditor', 'content', '商品介绍', ''],
						['text', 'order', '排序', ''],
						// ['text', 'nid','栏目id'],
						['tags', 'keywords', '关键字', ''],
						['hr', 'author', '发布者', ''],
						['textarea', 'description', '描述', '']
					];

		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				//->addLeftBlock('nav','选择栏目','nav')
				->addNav('','创建商品',url('product/create'))
				->addNav('','商品列表',url('product/index').'?nid='.input('nid'))
				->setTitle('添加商品')
				->addFormItems($fields)
				->submit(url('product/product_create'))
				->setPid('nid',$nid)
				->addFormItems([
					])
				->fetch();
	}

	public function edit(){
		$pid = input('id'); 
		$product_item = ProductModel::getinfo($pid);

		$data=[];
		foreach (ProductCategoryModel::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		$fields=[['checkbox', 'selfin', '自定义', '',[
							'置顶'=>'zd',
							'推荐'=>'tj'
						]],
						['select','cateid','商品类别','',$data],
						['text', 'title', '商品名称', ''],
						['image', 'img', '商品图片', ''],
						['ueditor', 'content', '商品介绍', ''],
						['text', 'version', '版本', ''],
						// ['text', 'price', '价格', ''],
						// ['text', 'spec', '规格', ''],
						['text', 'order', '排序', ''],
						['tags', 'keywords', '关键字', ''],
						['text', 'author', '发布者', ''],
						['text', 'description', '描述', ''],
						['date','update_time','发布时间','']
					];

		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑商品',url('product/edit'),'?id='.$pid)
				->addNav('','商品列表',url('product/index').'?nid='.input('nid'))
				->setTitle('编辑商品')
				->addLeftBlock('nav','选择栏目','nav')
				->addFormItems($fields)
				->setDataSource($product_item)
				->setPid('pid',$pid)
				->submit(url('product/product_update'))
				->fetch();
	}


	public function product_create(){
		if (request()->ispost()) {
			$data = $_POST;
			$validate = new \app\admin\validate\Product;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
			}
			$product = new ProductModel();
			$result = $product->save($data);
			if ($result) {
				return message('商品添加成功',true);
			}
			return message('商品添加失败',false);
		}	
	}

	public function product_update(){
		if (request()->ispost()) {
			$data = $_POST;
			$pid = input('pid');
			$validate = new \app\admin\validate\Product;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
			}
			$product = new ProductModel();
			$result = $product->allowField(true)->save($data);
			if ($result) {
				return message('修改成功',true);
			}
			return message('修改失败',false);
		}
	}

	public function product_delete(){
		if(request()->ispost()){
			$id 	=input('id'); 
			if($this->dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}
}