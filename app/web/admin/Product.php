<?
namespace app\web\admin;

use xto\Util;
use xto\App;
use app\web\dao\FieldDao;
use app\web\dao\ProductDao; 
use app\web\dao\ProductCategoryDao;
use app\web\model\WebProduct; 
use app\web\model\WebProductCategory;

class Product extends BaseController{

	public function index(){
	$list = WebProduct::where(null)->order('pid desc')->paginate(10); 
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('产品管理')
				->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete','删除',url('product/post_delete')) 
				->addColumnButton('','修改',url('product/edit').'?id=$pid','','fa fa-pencil')
				->addNav('','产品列表',url('product/index')) 
				->addTopButton('','创建',url('product/create').'?nid='.input('nid'))
				->setQuickSearch('title','')
				->setPid('pid')
				->setColumns([
					['pid', '编号'],
					['content.title', '标题','link','edit?id=$pid'], 
					['cateid', '产品类别'],
					['version', '版本'],
					// ['price', '价格'],
					// ['spec', '规格'],
					['update_time', '添加时间'], 
                    // ['order', '排序'],
                    ['button', '操作', 'btn']
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
		foreach (WebProductCategory::select() as $key => $value) {
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
						['text', 'nid','栏目id'],
						['tags', 'keywords', '关键字', ''],
						['hr', 'author', '发布者', ''],
						['textarea', 'description', '描述', ''],
						// ['text', 'version', '版本', ''],
						// ['text', 'price', '价格', ''],
						// ['text', 'spec', '规格', ''],

					];

		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addLeftBlock('nav','选择栏目','nav')
				->addNav('','创建产品',url('product/create'))
				->addNav('','产品列表',url('product/index').'?nid='.$nid)
				->setTitle('添加产品')
				// ->addFormItems($fields)
				->submit(url('product/product_create'))
				->setPid('nid',$nid)
				->addFormItems([
					['text','title','产品名称',''],
					['select','cateid','产品类别','选择一个产品类别',$data],
					['text','version','产品版本','请输入产品版本'],
					['image','img','产品图片'],
					// ['ueditor','','产品介绍',''],
					['ueditor','content','产品介绍',''],
					// ['text','price','产品价格',''],
					// ['text','spec','产品规格'],
					['date','update_time','添加时间']
					])
				->fetch();
	}

	public function edit(){
		$pid=input('id'); 
		$product_item = WebProduct::find($pid)->toArray();
		$source = get_home_themes();
		$data=[];
		foreach (WebProductCategory::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		$fields=[
						['checkbox', 'selfin', '自定义', '',[
							'置顶'=>'zd',
							'推荐'=>'tj'
						]],
						['select','cateid','产品类别','',$data],
						['text', 'title', '产品名称', ''],
						['image', 'img', '产品图片', ''],
						['ueditor', 'content', '产品介绍', ''],
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
				->addNav('','编辑产品',url('product/edit'),'?id='.$pid)
				->addNav('','产品列表',url('product/index'))
				->setTitle('编辑产品')
				->addLeftBlock('nav','选择栏目','nav')
				->addFormItems($fields)
				->setDataSource($product_item)
				->setPid('pid',$pid)
				->submit(url('product/product_update'))
				->fetch();
	}


	public function product_create(){
		if(request()->ispost()){
			$title = input('title');
			$cateid = input('cateid');
			$version = input('version');
			$img = input('img');
			$content = input('content');
			$price = input('price');
			$spec = input('spec');
			$update_time = input('update_time');

			if (empty($cateid)){
				return message('请选择一个类别',false);
			}
			if(empty($title)){
				return message('产品名称不能为空',false);
			}
			if (empty($content)) {
				return message('产品介绍不能为空',false);
			} 

			$pcategory_item = new WebProduct();
			$pcategory_item->title = $title;
			$pcategory_item->cateid = $cateid;
			$pcategory_item->version = $version;
			$pcategory_item->img = $img;
			$pcategory_item->content = $content;
			$pcategory_item->price = $price;
			$pcategory_item->spec = $spec;
			$pcategory_item->update_time = $update_time;

			$result = $pcategory_item->save();
			if ($result) {
				return message('产品发布成功',true);
			}
			return message('产品发布失败',false);
		}
			
	}

	public function product_update(){
		if (request()->ispost()) {
			$pid = input('id');
			$title = input('title');
			$cateid = input('cateid');
			$version = input('version');
			$img = input('img');
			$content = input('content');
			$price = input('price');
			$spec = input('spec');
			$update_time = input('update_time');

			if (empty($title)) {
				return message('产品名称不能为空',false);
			}
			if (empty($cateid)) {
				return message('请选择一个类别',false);
			}
			if (empty($content)) {
				return message('产品内容不能为空',false);
			}

			// $content=new WebContent();
			// $content->title=$title;
			// $content->content=$content;

			$product_item = WebProduct::find($pid);
			//$product_item->title = $title;
			$product_item->cateid = $cateid;
			$product_item->version = $version;
			$product_item->img = $img;
			//$product_item->content = $content;
			$product_item->price = $price;
			$product_item->spec = $spec;
			$product_item->update_time = $update_time;

			 
			// $product_item->content()->title=$title;
			// $product_item->content()->content=$content;
			dump($product_item);
			dump($product_item->toArray()->Content);
			//die;

			$result = $product_item->updateProduct();
			if ($result) {
				return message('修改成功',true);
			}
			return message('修改失败',false);
		}
	}
	public function delete_post(){
		if(request()->ispost()){
			$nid = input('id');
			$pcategory_item = WebProduct::get($nid,'sublist');

			if ($pcategory_item) {
				$result = $pcategory_item->delete();
				if ($result) {
					return message('删除成功',true);
				}
			}
			return message('删除失败',false);
		}
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