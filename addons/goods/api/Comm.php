<?php
namespace addons\goods\api;

use addons\goods\model\Goods;
use addons\goods\model\GoodsCategory;

class Comm extends Base
{
    public function lists()
    { 
		$page_index = isset($this->params['page_index']) ? $this->params['page_index'] : 1;
		$page_size = isset($this->params['page_size']) ? $this->params['page_size'] : PAGE_SIZE;
		$condition = isset($this->params['condition']) ? $this->params['condition'] : "";
		$order = isset($this->params['order']) ? $this->params['order'] : "";
		$cateid = isset($this->params['cateid']) ? $this->params['cateid'] : "";
		$is_top = isset($this->params['is_top']) ? $this->params['is_top'] : "";
		//条件
		if (!empty($condition) && is_string($condition) && json_decode($condition)) {
			$condition = json_decode($condition, true);
		}

		if($cateid){
			$condition['cateid']=$cateid;
		}
		if($is_top){
			$condition['is_top']=$is_top;
		}

		$result= Goods::where($condition)
				->order($order)
				->paginate($page_size,false,[],$page_index);
		$result['page']=$result->render();
		return $this->outMessage("", $result);
    } 

    public function select()
    { 
		$limit = isset($this->params['limit']) ? $this->params['limit'] : PAGE_SIZE;
		$condition = isset($this->params['condition']) ? $this->params['condition'] : "";
		$order = isset($this->params['order']) ? $this->params['order'] : "";
		$cateid = isset($this->params['cateid']) ? $this->params['cateid'] : "";
		$is_top = isset($this->params['is_top']) ? $this->params['is_top'] : "";
		//条件
		if (!empty($condition) && is_string($condition) && json_decode($condition)) {
			$condition = json_decode($condition, true);
		}

		if($cateid){
			$condition['cateid']=$cateid;
		}
		if($is_top){
			$condition['is_top']=$is_top;
		}

		$result= Goods::where($condition)
				->order($order)
				->limit($limit)
				->select();  
		if(count($result)>0){
			return $this->outMessage("", $result);
		}
		return $this->outMessage("", $result,-1,'no data');
    }

    public function categorys()
    { 
		$parent_cateid = isset($this->params['parent_cateid']) ? $this->params['parent_cateid'] : "";
		$limit = isset($this->params['limit']) ? $this->params['limit'] : 99999;
		$condition = isset($this->params['condition']) ? $this->params['condition'] : "";
		$order = isset($this->params['order']) ? $this->params['order'] : "";
		//条件
		if (!empty($condition) && is_string($condition) && json_decode($condition)) {
			$condition = json_decode($condition, true);
		}

		if($parent_cateid!=""){
			$condition['parent_cateid']=$parent_cateid;
		}

		$result= GoodsCategory::where($condition)
				->order($order)
				->limit($limit)
				->select();
		foreach ($result as $key => $value) {
			$value['items']=$value->sublist();
			$value['parent']=$value->parent();
		}
		if($result){ 
			return $this->outMessage("", $result);
		}
		return $this->outMessage("", $result,-1);
    } 

    public function category(){ 
		$id = isset($this->params['id']) ? $this->params['id'] : 0;
		$catename = isset($this->params['catename']) ? $this->params['catename'] : 0;

		$where=[];
		if(!empty($id)){
			$where['cateid']=$id;
		}

		if(!empty($catename)){
			$where['catename']=$catename;
		}

		$result= GoodsCategory::where($where)->find();
		if($result){ 
			return $this->outMessage("", $result,1,'');
		}
		return $this->outMessage("", $result,-1,'数据不存在');
    }

    public function info(){ 
		$id = isset($this->params['id']) ? $this->params['id'] : 0;
		$title = isset($this->params['title']) ? $this->params['title'] : 0;

		$where=[];
		if(!empty($id)){
			$where['pid']=$id;
		}

		if(!empty($title)){
			$where['title']=$title;
		}

		$result= Goods::where($where)->find();
		if($result){
			//明细
			if(isset($result->items)){
				$result['items']=$result->items;
			}

			if(isset($result->category->parent)){
				//$result['parent']=$result->parent;
			}

			if(isset($result->specs)){
				//$result['parent']=$result->parent;
			}
			
			return $this->outMessage("", $result);
		}
		return $this->outMessage("", $result,-1,'数据不存在');
    }
}
