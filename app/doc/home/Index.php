<?
namespace app\doc\home;

use think\Controller;
use think\Session;
use think\Request;
use xto\App;

class Index extends BaseController{
	public function index(){
		return view("index/index");
	}

	public function getlist(){
		$id=input('id'); 
		$list=DocHelper::getlist($id);
		$info=array();
		foreach ($list as $key => $value) {
			$info[]=[
				'id' 		=> $value['did'],
				'text' 		=> $value['title'],
				'icon' 		=> $value['type']==1?'/application/doc/view/res/images/file.gif':'/application/doc/view/res/images/folder.gif',
				'state' 	=> ["opened" => true],
				'children' 	=> DocHelper::checksub($value['did'])>=1?true:false
			];
		}
		return json($info);
	}

	public function getdoc(){
		$id=input('id'); 
		$info=DocHelper::getdoc($id);
		if (!empty($info)) {
			return json($info);
		}
	}
}