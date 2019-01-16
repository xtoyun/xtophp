<?php
namespace app\web\dao;

use app\common\dao\Sql;
use xto\common\lib\Util;
use app\common\dao\IDao; 
use think\Db;

class ImgDao extends IDao{
	protected $table='xto_web_imgs';
	protected $pk="mgid"; 


	public function u_create($img,$url='',$remark=''){
		$data=[
			'img'=>$img,
			'remark'=>$remark,
			'url'=>$url,
			'appid'=>$this->app->appid
		];
		$this->save($data);
		return true;
	}

	public function u_edit($id,$img,$url='',$remark=''){
		$data=[
			'mgid' 	=>$id,
			'img' 	=>$img,
			'remark'=>$remark,
			'url' 	=>$url
		];
		$this->update($data);
		return true;
	}
}