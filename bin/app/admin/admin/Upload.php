<?php
namespace app\admin\admin; 

use app\plugins\Oss;

class Upload extends BaseController
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
