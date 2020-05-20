<?php
namespace addons\cms\api;

use addons\cms\model\WebArticle;
use addons\cms\model\WebArticleCategory;

class Article extends Base
{
    public function lists()
    { 
		$page_index = isset($this->params['page_index']) ? $this->params['page_index'] : 1;
		$page_size = isset($this->params['page_size']) ? $this->params['page_size'] : PAGE_SIZE;
		$condition = isset($this->params['condition']) ? $this->params['condition'] : "";
		$order = isset($this->params['order']) ? $this->params['order'] : "view_time desc";
		$keyword = isset($this->params['keyword']) ? $this->params['keyword'] : "";
		$cateid = isset($this->params['cateid']) ? $this->params['cateid'] : "";

		//条件
		if (!empty($condition) && is_string($condition) && json_decode($condition)) {
			$condition = json_decode($condition, true);
		}

		if($keyword){
			$condition['title']=['like',"%$keyword%"];
		}
		if($cateid){
			$condition['a.cateid']=$cateid;
		}


		$result= WebArticle::where($condition)->alias('a')
				->join('WebArticleCategory b','b.cateid=a.cateid','left')
				->order($order)
				->field('a.*,b.catename')
				->paginate($page_size,false,[],$page_index);
		$go_result=$result->toarray();
		$go_result['page']=$result->render();
		//$result->page=$result->render();

		return $this->outMessage("", $go_result);
    } 

    public function categorys()
    { 
		$parent_cateid = isset($this->params['parent_cateid']) ? $this->params['parent_cateid'] : "";
		$limit = isset($this->params['limit']) ? $this->params['limit'] : 99999;
		$condition = isset($this->params['condition']) ? $this->params['condition'] : "";
		$order = isset($this->params['order']) ? $this->params['order'] : "";
		$url_name = isset($this->params['url_name']) ? $this->params['url_name'] : "";

		//条件
		if (!empty($condition) && is_string($condition) && json_decode($condition)) {
			$condition = json_decode($condition, true);
		}

		if($parent_cateid!=""){
			$condition['parent_cateid']=$parent_cateid;
		}

		if($url_name!=""){
			$condition['url_name']=$url_name;
		}

		$result= WebArticleCategory::where($condition)
				->order($order)
				->limit($limit)
				->select();
		foreach ($result as $key => $value) {
			$value['items']=$value->sublist();
			$value['parent']=$value->parent();
		}
		if($result){ 
			return $this->outMessage("", $result,1,'');
		}
		return $this->outMessage("", $result,-1);
    } 

    public function category(){ 
		$id = isset($this->params['id']) ? $this->params['id'] : 0;
		$type = isset($this->params['type']) ? $this->params['type'] : '';
		$catename = isset($this->params['catename']) ? $this->params['catename'] : 0;

		$where=[];
		if(!empty($id)){
			$where['cateid']=$id;
		}

		if(!empty($catename)){
			$where['catename']=$catename;
		}

		if(!empty($type)){
			$where['url_name']=$type;
		}

		$result= WebArticleCategory::where($where)->find();
		if($result){ 
			return $this->outMessage("", $result);
		}
		return $this->outMessage("", $result,-1,'数据不存在');
    }

    public function select()
    { 
		$limit = isset($this->params['limit']) ? $this->params['limit'] : PAGE_SIZE;
		$condition = isset($this->params['condition']) ? $this->params['condition'] : "";
		$order = isset($this->params['order']) ? $this->params['order'] : "view_time desc";
		$cateid = isset($this->params['cateid']) ? $this->params['cateid'] : "";
		$is_home = isset($this->params['is_home']) ? $this->params['is_home'] : "";
		$is_tui = isset($this->params['is_tui']) ? $this->params['is_tui'] : "";
		$is_top = isset($this->params['is_top']) ? $this->params['is_top'] : "";
		$is_hot = isset($this->params['is_hot']) ? $this->params['is_hot'] : "";
		$catename = isset($this->params['catename']) ? $this->params['catename'] : "";
		//条件
		if (!empty($condition) && is_string($condition) && json_decode($condition)) {
			$condition = json_decode($condition, true);
		}

		if($cateid){
			$condition['cateid']=$cateid;
		}
		if($is_home){
			$condition['is_home']=$is_home;
		}
		if($is_tui){
			$condition['is_tui']=$is_tui;
		}
		if($is_top){
			$condition['is_top']=$is_top;
		}
		if($is_hot){
			$condition['is_hot']=$is_hot;
		}

		if(!empty($catename)){
			$condition['catename']=$catename;
		}


		$result= WebArticle::where($condition)->alias('a')
				->join('WebArticleCategory b','b.cateid=a.cateid')
				->order($order)
				->limit($limit)
				->select();
		if($result){
			return $this->outMessage("", $result);
		}
		return $this->outMessage("", $result,-1,'no data');
    }

    public function articleInfo(){ 
		$article_id = isset($this->params['id']) ? $this->params['id'] : 0;

		$result= WebArticle::find($article_id);
		if($result){
			$pre=$result->pre(); 
		    $next=$result->next();
		    $result['pre']=$pre;
		    $result['next']=$next;
		    if(isset($result->category)){
		    	$result['catename']=$result->category->catename;
		    }else{
		    	$result['catename']='资讯';
		    }
		    
		     
			return $this->outMessage("文章", $result);
		}
		
		return $this->outMessage("", $result,-1,'数据不存在');
    }
}
