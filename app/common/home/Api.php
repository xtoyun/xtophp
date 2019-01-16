<?
namespace app\common\home;

use xto\Util;

class Api extends \xto\template\BaseController{
	public function uploader(){ 
		$file = request()->file('file'); 
		if (empty($file)) {
			return Util::message('请选文件',false);
		}
		$oss=new \xto\Oss();
		$msg=$oss->save($file);
		return json($msg);  
	}
}