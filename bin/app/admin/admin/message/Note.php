<?
namespace app\admin\admin\message;
 
use app\data\model\MessageNote as MessageNoteModel;
use app\admin\admin\BaseController as Controller;

class Note extends Controller{
	// private $dao;

	// public function __construct(){
	// 	parent::__construct();
	// 	$this->dao=ProductCategoryDao::instance();

	// }

	public function index(){ 
		$list=MessageNoteModel::where("")->order('snid desc')->paginate(10);

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('内部公告')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','公告',url('index')) 
				->addTopButton('','创建',url('create'))
				->addColumnButton('','修改',url('edit').'?id=$snid','','fa fa-pencil')
				->setQuickSearch('name','Search')
				->setPid('snid')
				->setColumns([
					['snid', '编号'],
					['title', '标题'],
					['create_time', '创建时间'],
                    ['order', '排序'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){

		 $data=[];
		foreach (MessageNoteModel::select() as $key => $value) {
			$data[$value['title']]=$value['snid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','消息管理') 
				->addNav('','添加',url('create'))
				->addNav('','内部公告',url('index'))
				->setTitle('添加公告')
				->addFormItems([
						 
						['text', 'title', '标题', '输入标题'],
						['textarea', 'description', '描述', '输入数字'],
						['ueditor', 'content', '公告正文', ''],
						['image', 'img', '图片', '输入标题'],
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
			$description = input('description');

			if(empty($title)){
				return message('标题不能为空',false);
			} 

			$category = new MessageNoteModel();
			$category->title = $title;
			$category->content = $content;
			$category->description = $description;
			$category->order = (empty($order)?0:$order);
			$category->appid=appid();

			$result = $category->save();

			if($result){
				return message('保存成功',true);
			}
		}
		return message('保存失败',false);
	}

	public function edit(){
		$id=input('id'); 
		$category_item = MessageNoteModel::find($id)->toArray();

		return $this->template
				->FormTemplate 
				->setData('modulename','消息管理') 
				->addNav('','编辑',url('edit'),'?id='.$id)
				->addNav('','公告',url('index'))
				->setTitle('编辑公告')
				->addFormItems([
						['text', 'title', '标题', '输入标题'],
						['textarea', 'description', '描述', '输入数字'],
						['ueditor', 'content', '公告正文', ''],
						['image', 'img', '图片', '输入标题'],
						['text', 'order', '排序', '输入数字'],
					])
				->setDataSource($category_item)
				->setPid('snid',$id)
				->submit(url('edit_post'),'')
				->fetch();
	}
	public function edit_post(){
        if(request()->ispost()){
 			$title = input('title');
 			$order = input('order');
 			$img = input('img');
 			$snid = input('snid');
 			$description=input('description');
 			$content = input('content');

 		$category_item = MessageNoteModel::find($snid);
 		if ($category_item) {
 			$category_item->title = $title;
 			$category_item->order = $order;
 			$category_item->description = $description;
 			$category_item->img = $img;
 			$category_item->content = $content;
 			$category_item->appid=appid();
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
			$snid = input('id');
			$info = MessageNoteModel::get($snid);
			if ($info) {
				$result = $info->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
 	}
 
}