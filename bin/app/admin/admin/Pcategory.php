<?
namespace app\admin\admin;
 
use app\data\model\ProductCategory as ProductCategoryModel; 

class Pcategory extends BaseController{
	// private $dao;

	// public function __construct(){
	// 	parent::__construct();
	// 	$this->dao=ProductCategoryDao::instance();

	// }

	public function index(){ 
		$list=ProductCategoryModel::where("")->order('cateid desc')->paginate(10);

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('产品类别')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','类别',url('pcategory/index')) 
				->addTopButton('','创建',url('pcategory/create'))
				->addColumnButton('','修改',url('pcategory/edit').'?id=$cateid','','fa fa-pencil')
				->setQuickSearch('name','Search')
				->setPid('cateid')
				->setColumns([
					['cateid', '编号'],
					['catename', '名称'],
					['parent.catename', '上级类别'],
                    ['order', '排序'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){

		 $data=[];
		foreach (ProductCategoryModel::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('pcategory/create'))
				->addNav('','产品类别',url('pcategory/index'))
				->setTitle('添加类别')
				->addFormItems([
						['select', 'parent_cateid', '上级', '选择一个上级类别',$data],
						['text', 'catename', '名称', '输入名称'],
						['text', 'order', '排序', '输入数字'],

					])
				->submit(url('pcategory/create_post'),'')
				->fetch();
	}
	public function create_post(){
		if(request()->ispost()){
			$catename = input('catename');
			$order = input('order');
			$parent_cateid = input('parent_cateid');

			if(empty($catename)){
				return message('名称不能为空',false);
			}

			if(!is_numeric($order)){
				return message('序列号不能为空',false);
			}

			$category = new ProductCategoryModel();
			$category->catename = $catename;
			$category->parent_cateid = $parent_cateid;
			$category->order = (empty($order)?0:$order);

			$result = $category->save();

			if($result){
				return message('保存成功',true);
			}
		}
		return message('保存失败',false);
	}

	public function edit(){
		$id=input('id'); 
		$category_item = ProductCategoryModel::find($id)->toArray();

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
				->setDataSource($category_item)
				->setPid('cateid',$id)
				->submit(url('pcategory/edit_post'),'')
				->fetch();
	}
	public function edit_post(){
        if(request()->ispost()){
 			$catename = input('catename');
 			$order = input('order');
 			$cateid = input('cateid');

 		$category_item = ProductCategoryModel::find($cateid);
 		if ($category_item) {
 			$category_item->catename = $catename;
 			$category_item->order = $order;
 			$result = $category_item->force()->save();
 			if ($result) {
 				return message('保存成功',true);
 			}
 		}
        return message('保存失败',false);
		}
	}

	public function delete_post(){
		if (request()->ispost()) {
			$cateid = input('id');
			$category_item = ProductCategoryModel::get($cateid,'sublist');
			//当存在上下级关系的时候所有删除失败
			// if($category_item->articlecount()>0){
			// 	return message('删除失败',false);
			// }
			if ($category_item) {
				$result = $category_item->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
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