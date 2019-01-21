<?
namespace app\web\admin;

use app\web\model\WebArticleCategory;

class Category extends BaseController{

	public function index(){ 
		$list=WebArticleCategory::where(null)->order('cateid desc')->paginate(20); 
 
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('文章类别')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','类别',url('category/index'))  
				->addTopButton('','创建',url('category/create'))
				->addColumnButton('','edit',url('category/edit').'?id=$cateid&name=$catename','','fa fa-pencil') 
				->setQuickSearch('name','')
				->setPid('cateid')
				->setColumns([
					['cateid', '编号'],					
					['catename', '类别名称'],
					['parent.catename', '上级类别'],
                    ['order', '排序'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){

		$data=[];
		foreach (WebArticleCategory::select() as $key => $value) {
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
						['text', 'catename', '名称', '名称'],
						['text', 'order', '排序', '排序'],
						 
					])
				->submit(url('category/create_post'),'','')
				->fetch();
	}

	public function create_post(){
		if(request()->ispost()){
			$catename=input('catename');
			$order=input('order');
			$parent_cateid=input('parent_cateid');

			if(empty($catename)){
				return message('名称不能为空',false);
			}
			if (!is_numeric($order)) {
				return message('is_numeric',false);
			}

			$category=new WebArticleCategory();
			$category->catename=$catename;
			$category->parent_cateid=$parent_cateid;
			$category->order=(empty($order)?0:$order);
			
			$result=$category->save(); 

			if($result){
				return message('保存成功',true);
			}
		}
		return message('保存失败',false);
	}

	public function edit(){
		$id=input('id'); 
		$category_item=WebArticleCategory::find($id)->toArray();
		 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('category/edit'),'?id='.$id)
				->addNav('','类别',url('category/index'))
				->setTitle('编辑类别')
				->addFormItems([
						['text', 'catename', '名称', ''],
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
			$order=input('order');
			$cateid=input('cateid'); 

			$category_item=WebArticleCategory::find($cateid);
			if ($category_item) {
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
			$category_item=WebArticleCategory::get($cateid,'sublist');
			if($category_item->articlecount()>0){
				return message('articlecount',false);
			}
			if ($category_item) {
				$result=$category_item->together('sublist')->delete();
				if($result){
					return message('保存成功',true);
				}
			}
		}
		return message('保存失败',false);
	}
}