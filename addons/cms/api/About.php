<?php
namespace addons\cms\api;

use addons\cms\model\WebAbout;

class About extends Base
{
    public function lists()
    { 
		$page_index = isset($this->params['page_index']) ? $this->params['page_index'] : 1;
		$page_size = isset($this->params['page_size']) ? $this->params['page_size'] : 20;
		$condition = isset($this->params['condition']) ? $this->params['condition'] : "";
		$order = isset($this->params['order']) ? $this->params['order'] : "";
		//条件
		if (!empty($condition) && is_string($condition) && json_decode($condition)) {
			$condition = json_decode($condition, true);
		}

		$result= WebAbout::where($condition)
				->order($order)
				->paginate($page_size,false,[],$page_index);
		
		return $this->outMessage("", $result);
    } 

    public function select()
    { 
		$limit = isset($this->params['limit']) ? $this->params['limit'] : 20;
		$condition = isset($this->params['condition']) ? $this->params['condition'] : "";
		$order = isset($this->params['order']) ? $this->params['order'] : ""; 
		//条件
		if (!empty($condition) && is_string($condition) && json_decode($condition)) {
			$condition = json_decode($condition, true);
		}

		if(!empty($catename)){
			$condition['catename']=$catename;
		}


		$result= WebAbout::where($condition)->alias('a') 
				->order($order)
				->limit($limit)
				->select();
		if($result){
			return $this->outMessage("", $result);
		}
		return $this->outMessage("", $result,-1,'no data');
    }


    public function info(){ 
		$id = isset($this->params['id']) ? $this->params['id'] : 0;
		$title = isset($this->params['title']) ? $this->params['title'] : 0;
		$name = isset($this->params['name']) ? $this->params['name'] : 0;

		$where=[];
		if(!empty($id)){
			$where['lid']=$id;
		}

		if(!empty($title)){
			$where['title']=$title;
		}

		if(!empty($name)){
			$where['name']=$name;
		}

		$result= WebAbout::where($where)->find();
		if($result){
			//明细 
			return $this->outMessage("", $result);
		}
		return $this->outMessage("", $result,-1,'数据不存在');
    }
}
