<?
namespace app\admin\admin;

use app\data\model\ArticleCategory as ArticleCategoryModel;

class Category extends BaseController{

	public function index(){ 
		$list=ArticleCategoryModel::where('')->order('cateid desc')->paginate(20); 
 
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('文章类别')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','类别',url('category/index'))  
				->addTopButton('','创建',url('category/create'))
				->addColumnButton('','修改',url('category/edit').'?id=$cateid&name=$catename','','fa fa-pencil') 
				->setQuickSearch('name','')
				->setPid('cateid')
				->setColumns([
					['cateid', '编号'],					
					['catename', '类别名称'],
					['url_name', '地址名称'],
					['parent.catename', '上级类别'],
                    ['order', '排序'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){

		$data=[];
		foreach (ArticleCategoryModel::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}  
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('category/create'))
				->addNav('','文章类别',url('category/index'))
				->setTitle('添加类别')
				->addFormItems([
						['select', 'parent_cateid', '上级', 'select ',$data],
						['text', 'catename', '名称', '输入名称'],
						['text', 'url_name', '地址栏', '请输入英文名称'],
						['text', 'order', '排序', '输入排序'],
						 
					])
				->submit(url('category/create_post'),'','')
				->fetch();
	}

	public function create_post(){
		if(request()->ispost()){
			$url_name=input('url_name');
			$catename=input('catename');
			$order=input('order');
			$parent_cateid=input('parent_cateid');

			if(empty($catename)){
				return message('名称不能为空',false);
			}
			if (!is_numeric($order)) {
				return message('is_numeric',false);
			}

			$category=new ArticleCategoryModel();
			$category->catename=$catename;
			$category->url_name=$url_name;
			$category->parent_cateid=$parent_cateid;
			$category->order=(empty($order)?0:$order);
			$category->appid=appid();
			
			$result=$category->save(); 

			if($result){
				return message('保存成功',true);
			}
		}
		return message('保存失败',false);
	}

	public function edit(){
		$id=input('id'); 
		$category_item=ArticleCategoryModel::find($id)->toArray();
		 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('category/edit'),'?id='.$id)
				->addNav('','类别',url('category/index'))
				->setTitle('编辑类别')
				->addFormItems([
						['text', 'catename', '名称', ''],
						['text', 'url_name', '地址栏', '请输入英文名称'],
						['text', 'order', '排序', ''],
					])
				->setDataSource($category_item)
				->setPid('cateid',$id)
				->submit(url('category/edit_post'),'')
				->fetch();
	}

	public function edit_post(){
		if(request()->ispost()){
			$catename=input('catename');
			$url_name=input('url_name');
			$order=input('order');
			$cateid=input('cateid'); 

			$category_item=ArticleCategoryModel::find($cateid);
			if ($category_item) {
				$category_item->url_name=$url_name;
				$category_item->catename=$catename;
				$category_item->order=$order;
				$result=$category_item->force()->save();
				if($result){
					return message('保存成功',true);
				}
			} 
		}
		return message('保存失败',false);
	}

	public function delete_post(){
		if(request()->ispost()){
			$cateid=input('id');
			$category_item=ArticleCategoryModel::get($cateid,'sublist');
			if($category_item->articlecount()>0){
				return message('articlecount',false);
			}
			if ($category_item) {
				$result=$category_item->together('sublist')->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
	}
}