<?
namespace app\admin\admin\message;
 
use data\model\MessageNote as MessageNoteModel;
use app\admin\admin\BaseController as Controller;

class Note extends Controller{

	public function index(){ 
		return $this->fetch('message/node');
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