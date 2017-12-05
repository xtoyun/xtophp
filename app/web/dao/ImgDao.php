<?php
namespace app\web\dao;

use xto\data\Sql;
use xto\App;
use xto\Util;
use xto\membership\context\Users;

use xto\data\IDao;

class ImgDao extends IDao{
	public function __construct() {
		parent::__construct('web_imgs','mgid'); 
	} 

	public function create($img,$url='',$remark=''){
		$data=[
			'img'=>$img,
			'remark'=>$remark,
			'url'=>$url,
			'appid'=>$this->app->appid
		];
		$this->save($data);
		return true;
	}

	public function edit($id,$img,$url='',$remark=''){
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