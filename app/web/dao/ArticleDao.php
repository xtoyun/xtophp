<?php
namespace app\web\dao;

use app\common\dao\Sql; 
use app\common\dao\IDao; 
use think\Db;

class ArticleDao extends IDao{
	protected $table='xto_web_article';
	protected $pk="arid"; 
	private $cdao;

	public function __construct() {
		parent::__construct(); 
		$this->cdao=ContentDao::instance();
	} 

	public function save($data=[], $where = [], $sequence = NULL){
		$cateid =isset($data['cateid'])?$data['cateid']:0;
		if($cateid==0) return false;//类别必须选择
		$result=$this->cdao->save($data); 
		if($result){//读取内容成功 
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
		$id 	=isset($data['arid'])?$data['arid']:0;
		$cateid =isset($data['cateid'])?$data['cateid']:0;

		if($id==0) return false;
		if($cateid==0) return false;//类别必须选择

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
			return parent::edit($t);
		}
		return $result;
	}

	public function selectpage($pagesize,$map=null,$order=null,$field='*'){
		$result = Db::view($this->table.' a','*')
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
		$result = Db::view($this->table.' a','*')
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
			$content=str_replace(strtolower($value['title']), '#'.$value['kid'].'#', strtolower($content));
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