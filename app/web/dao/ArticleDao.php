<?php
namespace app\web\dao;

use xto\data\Sql;
use xto\App;
use xto\Util;
use xto\membership\context\Users;

use xto\data\IDao; 
use think\Db;

class ArticleDao extends IDao{
	private $cdao;
	public function __construct() {
		parent::__construct('web_article','arid'); 
		$this->cdao=ContentDao::instance();
	} 

	public function save($data){
		$cateid =isset($data['cateid'])?$data['cateid']:0;
		if($cateid==0) return false;//类别必须选择
		
		$result=$this->cdao->save($data);
		if($result){//读取内容成功
			$n=[
				'nid' 		=>isset($data['nid'])?$data['nid']:0,
				'cid' 		=>$this->cdao->id,
				'cateid'    =>isset($data['cateid'])?$data['cateid']:0,
				'order' 	=>isset($data['order'])?$data['order']:1,
				'selfin' 	=>isset($data['selfin'])?$data['selfin']:'',
				'appid' 	=>$this->app->appid, 
			];
			return parent::save($n);
		}
		return false;
	}

	public function update($data){
		$id 	=isset($data['arid'])?$data['arid']:0;
		$cateid =isset($data['cateid'])?$data['cateid']:0;

		if($id==0) return false;
		if($cateid==0) return false;//类别必须选择

		$info=$this->find($id);
		$info=array_merge($info,$data);
		$result=$this->cdao->update($info);
		if($result){//读取内容成功
			$n=[
				'arid' 		=>$id,
				'cateid'    =>isset($data['cateid'])?$data['cateid']:0,
				'order' 	=>isset($data['order'])?$data['order']:0, 
				'update_time'=>Util::getdate(),
				'selfin'=>isset($data['selfin'])?$data['selfin']:''
			];
			return parent::update($n);
		}
		return $result;
	}

	public function selectpage($pagesize){
		$result = Db::view('web_article a','*')
			->view('web_content c','*','a.cid=c.cid','LEFT')  
			->view('web_article_category b','catename','b.cateid=a.cateid','LEFT')  
			->view('web_nav n','ename','n.nid=a.nid','LEFT')  
			->view('web_imgs m','*',"c.mgid=m.mgid",'LEFT')  //默认图片
			->order($this->order)
			->where($this->map)
			->whereor($this->map_or)
			->paginate($pagesize);
		return $result;
	}

	public function find($id){
		$result = Db::view('web_article a','*')
			->view('web_content c','*','a.cid=c.cid','LEFT')  
			->view('web_imgs m','*',"c.mgid=m.mgid",'LEFT')//默认图片
			->view('web_nav n','ename,model_id,category_template,list_template,show_template','n.nid=a.nid','LEFT')  
			->where(
				['arid'=>$id]
			) 
			->find();
		$content=$result['content'];
		$keywords=\think\Db::table('web_keyurl')->select();
		foreach ($keywords as $value) {
			//替换关键字 
			$content=str_replace($value['title'], '#'.$value['kid'].'#', $content);
		}
		foreach ($keywords as $value) {
			$key=$value['title'];
			$url=$value['url'];
			$content=str_replace('#'.$value['kid'].'#', "<a href='$url'>$key</a>", $content);
		}
		$result['content']=$content;
		if(!empty($result)){
			$data=[
				'cid' 	=>$result['cid'],
				'seein' =>$result['seein']+1
			];
			\think\Db::table('web_content')->update($data);
		}
		return $result;
	}
}