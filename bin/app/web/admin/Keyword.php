<?
namespace app\web\admin;
 
use app\data\model\Keyurl as KeyurlModel;

class Keyword extends Base{
 
	public function index(){
		$list = KeyurlModel::where('')->order('kid desc')->paginate(10);

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('关键字')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','关键字',url('keyword/index')) 
				->addTopButton('','创建',url('keyword/create'))
				->addColumnButton('','修改',url('keyword/edit').'?id=$kid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('kid')
				->setColumns([
					['kid', '编号'],
					
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
				->addNav('','添加',url('keyword/create'))
				->addNav('','关键字',url('keyword/index'))
				->setTitle('添加关键字')
				->addFormItems([ 
						['text', 'title', '名称', ''],
						['text', 'url', '地址', '格式：http://','http://'],

					])
				->submit(url('keyword/create_post'),'')
				->fetch();
	}

	public function create_post(){
		if(request()->ispost()){
	 		$title = input('title');
	 		$url = input('url');

 			if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}

	 		$category = new KeyurlModel();
	 		$category->title = $title;
	 		$category->url = $url;

	 		$result = $category->save();
	 		if($result){
	 			return message('创建成功',true);
	 		}
	 		return message('创建失败',false);
	 	}
	}

	public function delete_post(){
		if (request()->ispost()) {
			$kid = input('id');
			$category_item = KeyurlModel::get($kid,'sublist');

			if ($category_item) {
				$result = $category_item->together('sublist')->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
 }

	public function edit(){
		$id=input('id'); 
		$category_item=KeyurlModel::find($id)->toArray();
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('keyword/edit'),'?id='.$id)
				->addNav('','关键字',url('keyword/index'))
				->setTitle('编辑关键字')
				->addFormItems([
						['text', 'title', '名称', ''],
						['text', 'url', '地址', '格式：http://','http://'],
					])
				->setDataSource($category_item)
				->setPid('kid',$id)
				->submit(url('keyword/edit_post'),'')
				->fetch();
	}

	public function edit_post(){
		if(request()->ispost()){
			$kid = input('kid');
	 		$title = input('title');
	 		$url = input('url');	
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category_item = KeyurlModel::find($kid);
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