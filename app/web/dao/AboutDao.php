<?php
namespace app\web\dao;

use app\common\dao\Sql;
use xto\common\lib\Util;
use app\common\dao\IDao; 
use think\Db;

class AboutDao extends IDao{
	protected $table='xto_web_about';
	protected $pk="abid";  

	private $cdao;
	public function __construct() {
		parent::__construct(); 
		$this->cdao=ContentDao::instance();
	} 

	public function save($data=[], $where = [], $sequence = NULL){
		if($this->cdao->save($data)){//读取内容成功
			$data['cid']=$this->cdao->id;
			$data['appid']=$this->app->appid;

			$t=[];
			foreach ($this->getTableFields() as $key => $value) {
				if(isset($data[$value]))
				{
					$t[$value]=$data[$value];
				}
			}
			return parent::save($t);
		}
		return false;
	}

	public function edit($data = [], $where = [], $field = NULL){
		$id=isset($data[$this->pk])?$data[$this->pk]:0;

		if($id==0) return false;
		$info=$this->find($id);
		$info=array_merge($info,$data);
		$result=$this->cdao->edit($info);
		if($result){//读取内容成功
 
			$data['update_time']=Util::getdate();
			$t=[];
			foreach ($this->getTableFields() as $key => $value) {
				if(isset($data[$value]))
				{
					$t[$value]=$data[$value];
				}
			}

			return parent::edit($n);
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
			$result=$this->cdao->edit($info);
		}else{
			$result=$this->cdao->save($data);
			$cid=$this->cdao->id;
		} 
		if($result){
			$this->map['abid']=$abid;
			$data['abid']=$abid;
			$data['cid']=$cid;
			$data['nid']=$nid;
			$data['update_time']=Util::getdate();
			$t=[];
			foreach ($this->getTableFields() as $key => $value) {
				if(isset($data[$value]))
				{
					$t[$value]=$data[$value];
				}
			}
			$result=parent::edit($t);
		}
		return $result;
	}

	public function selectpage($pagesize,$map=null,$order=null,$field='*'){
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

	public function findByTitle($title=null){
		$result = Db::view('web_about a','*')
			->view('web_content c','*','a.cid=c.cid','LEFT')  
			->where(
				['c.title'=>$title]
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