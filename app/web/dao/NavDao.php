<?php
namespace app\web\dao;

use app\common\dao\Sql;
use xto\common\lib\Util;
use app\common\dao\IDao; 
use think\Db;

class NavDao extends IDao{
	protected $table='xto_web_nav';
	protected $pk="nid"; 
	 

	public function select($map = NULL, $order = NULL, $field = '*'){
		$result = Db::view('web_nav a','*')
			->view('web_model b','tablename,controller','a.model_id=b.mid','LEFT')  
			->view('web_nav c','title as ptitle','c.nid=a.pid','LEFT')  
			->order($this->order)
			->where($this->map)
			->whereor($this->map_or)
			->select();
		return $result;
	}

	public function selectpage($pagesize,$map=null,$order=null,$field='*'){
		
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

	public function get_parent_data($pid){
		$map['a.pid']=$pid;
		$result = Db::view('web_nav a','*')
			->view('web_model b','tablename,controller','a.model_id=b.mid','LEFT')  
			->view('web_nav c','title as ptitle','c.nid=a.pid','LEFT')
			->where($map)
			->select();
		return $result;
	}

	public function get_data($pid=0,$issub=false){ 
		$list=$this->get_parent_data($pid);
		$info=[];

		foreach ($list as $key => $value) {
			$link=$value['url'];
			if (!empty($link)) {
				$icon='/app/web/view/admin/res/images/url.gif';
			}else{
				$icon='';
			} 
			switch ($value['tablename']) {
				case 'web_article':
					$link=url('article/index').'?nid='.$value['nid'];
					$icon='/app/web/view/admin/res/images/folder.gif';
					break;
				case 'web_product':
					$link=url('product/index').'?nid='.$value['nid'];
					$icon='/app/web/view/admin/res/images/folder.gif';
					break;
				case 'web_about':
					$link=url('about/edit').'?nid='.$value['nid'];
					$icon='/app/web/view/admin/res/images/file.gif';
					break;
			}
			
			$info[]=[
				'id' 		=> $value['nid'],
				'text' 		=> $value['title'],
				'state' 	=> ["opened" => true],
				'icon' 		=> $icon,
				'link' 		=>$link,
				'children' 	=> $this->get_data($value['nid'],true)//检查是否有子栏目
			];
		}
		return $info;
	}
}