<?php
namespace app\admin\admin; 

use data\plugins\Oss;

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

    public function img_layui(){
    	$file = request()->file('file'); 
		if (empty($file)) {
			return message('请选文件',false);
		}
		$oss=new Oss(); 
		$msg=$oss->save($file); 
		$result=["code"=>($msg['success']?0:1),"msg"=>$msg['msg'],"data"=>["src"=>$msg['path']]];
    	return json($result);
    }

    public function msg($uploaded=0,$msg='错误',$filename='',$url=''){
    	$msg=array(
				'uploaded'=> $uploaded,
				"fileName"=>$filename,
				"url"=>$url,
				'error'=> [
					'message'=>$msg
				]
			);
    	return $msg;
    }

    public function ckeditor($ftype = 'image'){ 
    	
    	$callback = input('CKEditorFuncNum');
    	$file = request()->file('upload'); 
		if (empty($file)) {
			return json($this->msg(0,'文件不存在'));
		}
		$oss=new Oss(); 
		$msg=$oss->save($file);
		if($msg && $msg['success']){
			return json($this->msg(1,$msg['msg'],'',$msg['path']));
		}
    	return json($this->msg(0,'上传失败','',''));
    }
}
