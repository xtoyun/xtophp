<?
namespace app\web\admin;
 
use app\data\model\Link as LinkModel;

class Link extends Base{
 

	public function index(){
		$list = LinkModel::where('')->order('lid desc')->paginate(5);

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('友情链接')
				->setDataSource($list)
				->addColumnButton('delete') 
				->addNav('','友情链接',url('link/index')) 
				->addTopButton('','创建',url('link/create'))
				->addColumnButton('','修改',url('link/edit').'?id=$lid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('lid')
				->setColumns([
					['lid', '编号'],
					
					['title', '名称'],
					['url', '地址','link','$url'], 
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('link/create'))
				->addNav('','友情链接',url('link/index'))
				->setTitle('添加友情链接')
				->addFormItems([ 
						['text', 'title', '名称', ''],
						['image', 'img', '图片', ''],
						['text', 'url', '地址', '格式：http://','http://'],

					])
				->submit(url('create_post'),'')
				->fetch();
	}
	public function create_post(){
		if(request()->ispost()){
		 	$title = input('title');
		 	$image = input('image');
		 	$url = input('url');

		 	if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category = new LinkModel();
			$category->title = $title;
			$category->image = $image;
			$category->url = $url;

			$result = $category->save();
			if ($result) {
				return message('添加成功',true);
			}
			return message('添加失败',false);
		 }
	}
	public function delete_post(){
		if(request()->ispost()){
			$lid = input('id');
			$category_item =LinkModel::get( $lid,'sublist'); 

			if ($category_item) {
				$result = $category_item->together('sublist')->delete();
				if ($result) {
					return message('删除成功',true);
				}
				return message('删除失败',false);
			}
		}
	}

	public function edit(){
		$id=input('id'); 
		$category_item = LinkModel::find($id)->toArray();
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('link/edit'),'?id='.$id)
				->addNav('','友情链接',url('link/index'))
				->setTitle('编辑友情链接')
				->addFormItems([
						['text', 'title', '名称', ''],
						['image', 'img', '图片', ''],
						['text', 'url', '地址', '格式：http://','http://'],
					])
				->setDataSource($category_item)
				->setPid('lid',$id)
				->submit(url('edit_post'),'')
				->fetch();
	}

	public function edit_post(){
		if(request()->ispost()){
			$lid = input('lid');
	 		$title = input('title');
	 		$url = input('url');	
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category_item = LinkModel::find($lid);
			if ($category_item) {
				$category_item->title = $title;
				$category_item->url = $url;
				$result = $category_item->force()->save();
				if ($result) {
					return message('修改成功',true);
				}
			}
			return message('修改失败',false);
		}
	}
}