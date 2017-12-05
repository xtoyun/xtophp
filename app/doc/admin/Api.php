<?
namespace app\doc\admin;

use app\doc\model\XtoDoc;
use xto\Util;
use app\doc\core\DocHelper;

class Api extends BaseController{
	public function createdoc(){
		$type=input("type");
		$title=input("title");
		$content=input("content");
		$pid=input("pid");

		$user = XtoDoc::create([
			'type' 		=> $type,
		    'title'  	=> $title,
		    'content' 	=> $content,
		    'pid' 		=> $pid
		]);
		if($user->did>0){
			return Util::message('添加成功',true);
		}
		return Util::message('添加失败',false);
	}

	public function editdoc(){
		$id=input("pid");
		$data=[
			'type' 		=> input("type"),
		    'title'  	=> input("title"),
		    'content' 	=> input("content")
		];
		if(DocHelper::updatedoc($id,$data)){
			return Util::message('更新成功',true);
		}
		return Util::message('更新失败',false);
	}

	public function docer_doclist_delete(){
		$id=input("id");
		if(XtoDoc::get($id)->delete()){
			return Util::message('删除成功',true);
		}
		return Util::message('删除失败',false);
	}
}