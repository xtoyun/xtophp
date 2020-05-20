<?php
namespace app\api\home;

use app\plugins\Oss;

class Upload extends Base
{
    public function img(){
    	$file = request()->file('file'); 
		if (empty($file)) {
			return message('请选文件',false);
		}
		$oss=new Oss();
		$msg=$oss->save($file); 
    	return json($msg);
    }
}