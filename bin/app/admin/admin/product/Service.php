<?
namespace app\admin\admin\product;
 
use app\data\model\ProductService as ProductServiceModel;
use app\admin\admin\BaseController as Controller;

class Service extends Controller{
	// private $dao;

	// public function __construct(){
	// 	parent::__construct();
	// 	$this->dao=ProductCategoryDao::instance();

	// }

	public function index(){ 
		$list=ProductServiceModel::where("")->order('seid desc')->paginate(10);

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('产品类别')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','服务套餐',url('index')) 
				->addTopButton('','创建',url('create'))
				->addColumnButton('','修改',url('edit').'?id=$seid','','fa fa-pencil')
				->setQuickSearch('name','Search')
				->setPid('seid')
				->setColumns([
					['seid', '编号'],
					['title', '名称'],
					['price', '价格'],
                    ['order', '排序'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){

		 $data=[];
		foreach (ProductServiceModel::select() as $key => $value) {
			$data[$value['catename']]=$value['seid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加套餐',url('create'))
				->addNav('','套餐列表',url('index'))
				->setTitle('添加类别')
				->addFormItems([ 
						['text', 'title', '名称', '输入名称'],
						['text', 'price', '价格', '价格区间1-99999'],
						['ueditor', 'content', '套餐描述', '输入名称'],
						['image', 'img', '图片', '输入名称'],
						['text', 'order', '排序', '输入数字'],
					])
				->submit(url('create_post'),'')
				->fetch();
	}
	public function create_post(){
		if(request()->ispost()){
			$title = input('title');
			$order = input('order'); 
			$content = input('content'); 
			$price = input('price'); 
			$img=input('img');
			if(empty($title)){
				return message('名称不能为空',false);
			} 

			$category = new ProductServiceModel();
			$category->title = $title; 
			$category->price = $price; 
			$category->content = $content; 
			$category->order = (empty($order)?0:$order);
			$category->appid=appid();
			$category->img=$img;

			$result = $category->save();

			if($result){
				return message('保存成功',true);
			}
		}
		return message('保存失败',false);
	}

	public function edit(){
		$id=input('id'); 
		$category_item = ProductServiceModel::find($id)->toArray();

		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('edit'),'?id='.$id)
				->addNav('','类别',url('index'))
				->setTitle('编辑类别')
				->addFormItems([
						['text', 'title', '名称', '输入名称'],
						['text', 'price', '价格', '价格区间1-99999'],
						['ueditor', 'content', '套餐描述', '输入名称'],
						['image', 'img', '图片', '输入名称'],
						['text', 'order', '排序', '输入数字'],
					])
				->setDataSource($category_item)
				->setPid('seid',$id)
				->submit(url('edit_post'),'')
				->fetch();
	}
	public function edit_post(){
        if(request()->ispost()){
        	$seid = input('seid');
 			$title = input('title');
			$order = input('order'); 
			$content = input('content'); 
			$price = input('price'); 
			$img = input('img'); 

	 		$category_item = ProductServiceModel::find($seid);
	 		if ($category_item) {
	 			$category_item->title = $title;
	 			$category_item->content = $content;
	 			$category_item->order = $order;
	 			$category_item->appid=appid();
	 			$category_item->img=$img;
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
			$seid = input('id');
			$category_item = ProductServiceModel::get($seid,'sublist');
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
			$id 	=input('seid');
			$name 	=input('catename');

			if(empty(input('catename'))){
				return Util::message('名称不能为空',false);
			}

			$info=$dao->find($id);
			if (!empty($info)) {
				$info=array_merge($info,$t->param());
			}			
			
			$dao->map="(catename='$name' and seid<>$id)"; 
			if($dao->update($info)){
				return Util::message('保存成功',true);
			}
		}
		return Util::message('保存失败',false);
	}
}