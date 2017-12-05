<?php
namespace app\web\dao;

use xto\data\IDao;
use xto\data\Sql;
use think\Db;

class NavDao extends IDao{
	public function __construct() {
		parent::__construct('web_nav','nid'); 
	}  

	public function select(){
		$result = Db::view('web_nav a','*')
			->view('web_model b','tablename,controller','a.model_id=b.mid','LEFT')  
			->view('web_nav c','title as ptitle','c.nid=a.pid','LEFT')  
			->order($this->order)
			->where($this->map)
			->whereor($this->map_or)
			->select();
		return $result;
	}

	public function selectpage($pagesize){
		$result = Db::view('web_nav a','*')
			->view('web_model b','tablename,controller','a.model_id=b.mid','LEFT')  
			->view('web_nav c','title as ptitle','c.nid=a.pid','LEFT')  
			->order($this->order)
			->where($this->map)
			->whereor($this->map_or)
			->paginate($pagesize);
		return $result;
	}

	public function checksub($pid){
		$mapt['pid']=$pid;

		$result=Sql::count('web_nav',$mapt);
		if($result>0) return true;

		return false;
	}

	public function find($id){
		$result = Db::view('web_nav a','*')
			->view('web_model b','tablename,controller','a.model_id=b.mid','LEFT')  
			->view('web_nav c','title as ptitle','c.nid=a.pid','LEFT')  
			->where(['a.nid'=>$id])
			->find();
		return $result;
	}
}