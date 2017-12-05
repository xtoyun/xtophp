<?php
namespace app\web\dao;

use xto\data\Sql;
use xto\App;
use xto\Util;
use xto\membership\context\Users;

use xto\data\IDao;
use think;

class ContentDao extends IDao{
	public function __construct() {
		parent::__construct('web_content','cid'); 
	} 

	public function save($data){
		if(!isset($data['title']) || !isset($data['content'])){
			return false;
		}

		$new_data=[
			'title'=>$data['title'],
			'content'=>$data['content'],
			'author'=>(isset($data['author'])?$data['author']:''),
			'keywords'=>isset($data['keywords'])?$data['keywords']:'',
			'description'=>isset($data['description'])?$data['description']:'',
			'appid'=>$this->app->appid, 
			'createdate'=>Util::getdate()
		];

		//插件一张图片
		if(isset($data['img'])){
			$idao=ImgDao::instance();
			if($idao->create($data['img'])){
				$new_data['mgid']=$idao->id;
			}
		}
		return parent::save($new_data);
	}

	public function update($data){
		if(!isset($data['title']) || !isset($data['content']) || !isset($data['cid'])){
			return false;
		}
		$info=$this->find($data['cid']);
		$new_data=[
			'title'=>$data['title'],
			'content'=>$data['content'],
			'author'=>(isset($data['author'])?$data['author']:''),
			'keywords'=>isset($data['keywords'])?$data['keywords']:'',
			'description'=>isset($data['description'])?$data['description']:'',
			'appid'=>$this->app->appid,
			'cid'=>$data['cid'],
			'update_time'=>Util::getdate()
		];  
		if(!empty($data['img'])){
			$idao=ImgDao::instance();
			if(empty($info['mgid'])){
				if($idao->create($data['img'])){
					$new_data['mgid']=$idao->id;
				}
			}else{
				$idao->edit($info['mgid'],$data['img']);
			}
		}
		$result=parent::update($new_data);
		return $result;
	}

	public function getkeywords(){
		$backdata=[];
		$result=\think\Db::table("web_content")->where("keywords<>''")->limit(100)->select();
		foreach ($result as $value) {
			foreach (explode(',', (string)$value['keywords']) as $str) {
				$backdata[]=$str;
			} 
		}
		return $backdata;
	}
}