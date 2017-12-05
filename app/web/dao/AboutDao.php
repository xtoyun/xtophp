<?php
namespace app\web\dao;

use xto\data\Sql;
use xto\App;
use xto\Util;
use xto\membership\context\Users;

use xto\data\IDao; 
use think\Db;

class AboutDao extends IDao{
	private $cdao;
	public function __construct() {
		parent::__construct('web_about','abid'); 
		$this->cdao=ContentDao::instance();
	} 

	public function save($data){
		if($this->cdao->save($data)){//读取内容成功
			$n=[
				'cid' 		=>$this->cdao->id,
				'order' 	=>isset($data['order'])?$data['order']:1,
				'key' 		=>isset($data['key'])?$data['key']:'',
				'appid' 	=>$this->app->appid, 
			];
			return parent::save($n);
		}
		return false;
	}

	public function update($data){
		$id=isset($data['abid'])?$data['abid']:0;

		if($id==0) return false;

		$info=$this->find($id);
		$info=array_merge($info,$data);
		$result=$this->cdao->update($info);
		if($result){//读取内容成功
			$n=[
				'abid' 		=>$id,
				'order' 	=>isset($data['order'])?$data['order']:1,
				'key' 		=>isset($data['key'])?$data['key']:'',
				'update_time'=>Util::getdate(),
				'selfin'=>isset($data['selfin'])?$data['selfin']:''
			];
			return parent::update($n);
		}
		return $result;
	}

	public function saveorupdate($data){
		$abid=0;
		$result=false;
		$nid=isset($data['nid'])?$data['nid']:0;
		$cid=0;
		$info=$this->findByNav($nid);
		if(!empty($info)){
			$cid=isset($info['cid'])?$info['cid']:0;
			$abid=isset($info['abid'])?$info['abid']:0;
			$info=array_merge($info,$data);
			$result=$this->cdao->update($info);
		}else{
			$result=$this->cdao->save($data);
			$cid=$this->cdao->id;
		} 
		if($result){
			$this->map['abid']=$abid;
			$n=[
				'abid' 		=>$abid,
				'cid' 		=>$cid,
				'nid' 		=>$nid,
				'order' 	=>isset($data['order'])?$data['order']:1,
				'key' 		=>isset($data['key'])?$data['key']:'',
				'update_time'=>Util::getdate(),
				'selfin'=>isset($data['selfin'])?$data['selfin']:''
			];
			$result=parent::saveorupdate($n);
		}
		return $result;
	}

	public function selectpage($pagesize){
		if (is_array($this->map)) {
			foreach ($this->map as $key=>&$value) {
				unset($this->map[$key]);//删除原来
				$this->map['a.'.$key]=$value; //新加值全部查a表的记录
			} 
		}else{
			$this->map=str_replace('nid', 'a.nid',$this->map);
		} 
		$result = Db::view('web_about a','*')
			->view('web_content c','*','a.cid=c.cid','LEFT')  
			->view('web_nav n','ename','n.nid=a.nid','LEFT')  
			->order($this->order)
			->where($this->map)
			->whereor($this->map_or)
			->paginate($pagesize);
		return $result;
	}

	public function find($id=null){
		$result = Db::view('web_about a','*')
			->view('web_content c','*','a.cid=c.cid','LEFT')  
			->where(
				['abid'=>$id]
			) 
			->find();
		return $result;
	}

	public function findByNav($nid){
		$result = Db::view('web_about a','*')
			->view('web_content c','*','a.cid=c.cid','LEFT')  
			->where(
				['nid'=>$nid]
			) 
			->find();
		return $result;
	}
}