<?
namespace addons\cms\admin;

use addons\cms\model\WebArticle as ArticleModel;
use addons\cms\model\WebArticleCategory as ArticleCategoryModel;
use addons\cms\model\WebNav as NavModel;

class Article extends BaseController{

	public function get_article_category_data(){
		$cateid=input('cateid'); 
		if(empty($cateid)) $cateid=-1;

		$condition['parent_cateid']=$cateid;
		if(!empty($current_id)){
			$condition['cateid']=['<>',$current_id]; 
		}
		
		$list=ArticleCategoryModel::where($condition)->select()->toarray();
		$result=[];
		foreach ($list as $key => $value) {
			$count=ArticleCategoryModel::where(['parent_cateid'=>$value['cateid']])->count();
			$result[$key]=[
				'value'=>$value['cateid'],
				'label'=>$value['catename'],
				'haveChildren'=>($count>0?true:false)
			];
		}
		return json($result);
	}
	public function add(){ 
		return $this->fetch('article/add');
	}

	public function lists(){ 
		$this->assign('cates',ArticleCategoryModel::select());
		return $this->fetch('article/lists');
	}
	public function category(){ 
		$this->assign('cates',ArticleCategoryModel::select());
		return $this->fetch('article/category');
	}
	public function data_list(){
		$where=[];
		if(!empty(input('username'))){
			$where['username']=input('username');
		}
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		 
		$result=ArticleModel::selectpage(10,$where,'arid desc')->toarray();//读取数据
	 
		return json($result); 
	}

	public function index(){ 
		return $this->fetch('article/entry'); 
	}

 	public function get_article(){
		if (request()->ispost()) {
			$arid = input('id');

			$article = ArticleModel::find($arid);
			$article['cates']=$article->category->cateid_str;
			if ($article) {
				return json($article);			
			}
		}
	}
	public function delete_post(){
		if (request()->ispost()) {
			$arid = input('id');
			$article = ArticleModel::find($arid);
			if ($article) {
				$result = $article->delete();
				
				if ($result) {
					return message('删除成功',true);
				}
			}
			return message('删除失败',false);
		}
	}
 

	public function article_create(){
		if(request()->ispost()){
			$data=$_POST;
			$validate = new \addons\cms\validate\Article;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
	        }
	        $article = new ArticleModel();

	        if(isset($data['view_time']) && !empty($data['view_time'])){
				$data['view_time']=strtotime($data['view_time']);
			}else{
				$data['view_time']=time();
			}
			
	        $data['appid']=appid();
	        if(isset($data['is_tui']) && $data['is_tui']=='on'){
				$data['is_tui']=1;
			}else{
				$data['is_tui']=0;
			}
			if(isset($data['is_top']) && $data['is_top']=='on'){
				$data['is_top']=1;
			}else{
				$data['is_top']=0;
			}
			if(isset($data['is_home']) && $data['is_home']=='on'){
				$data['is_home']=1;
			}else{
				$data['is_home']=0;
			}
			if(isset($data['is_hot']) && $data['is_hot']=='on'){
				$data['is_hot']=1;
			}  else{
				$data['is_hot']=0;
			} 
	        $result = $article->save($data);
			if ($result) {
				return message('文章创建成功',true);
			}
			return message('文章创建失败',false); 
		}
	}

	public function article_update(){
		if (request()->ispost()) {
			$data=$_POST; 
			$arid = input('arid'); 
			$validate = new \addons\cms\validate\Article;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
	        }

			$article = ArticleModel::find($arid);  

			if(isset($data['view_time']) && !empty($data['view_time'])){
				$data['view_time']=strtotime($data['view_time']);
			}else{
				$data['view_time']=time();
			}
			if(isset($data['is_tui']) && $data['is_tui']=='on'){
				$data['is_tui']=1;
			}else{
				$data['is_tui']=0;
			}
			if(isset($data['is_top']) && $data['is_top']=='on'){
				$data['is_top']=1;
			}else{
				$data['is_top']=0;
			}
			if(isset($data['is_home']) && $data['is_home']=='on'){
				$data['is_home']=1;
			}else{
				$data['is_home']=0;
			}
			if(isset($data['is_hot']) && $data['is_hot']=='on'){
				$data['is_hot']=1;
			}  else{
				$data['is_hot']=0;
			} 
	        
			$result = $article->allowField(true)->save($data);
			if ($result) {
				return message('修改成功',true);
			}
		}
		return message('修改失败',false);
	} 


	public function delete_list_post(){
		$ids=input('ids');
		if($ids){
			foreach ($ids as $key => $value) {
				$info=ArticleModel::find($value['arid']);
				if ($info) {
					$info->delete();				
				}
			}
			return message('删除成功',true); 
		}
		return message('删除失败',false); 
	}

	public function get_category_list(){
		$where=[];
		if(!empty(input('catename'))){
			$where['catename']=input('catename');
		} 
		 
		$result=ArticleCategoryModel::selectpage(99,$where,'cateid desc')->toarray();//读取数据
	 
	 	$res=['code'=>0,
	 	'count'=>$result['total'],
	 	'msg'=>'',
	 	'data'=>$result['data']];
		return json($res); 
	}

	public function create_category_post(){
		if(request()->ispost()){
			$url_name=input('url_name');
			$catename=input('catename');
			$order=input('order');
			$parent_cateid=input('parent_cateid');
			$parent_ids=input('parent_ids');

			if(empty($catename)){
				return message('名称不能为空',false);
			}

			if(ArticleCategoryModel::where('catename',$catename)->count()>0){
				return message('该类别已经存在',false);
			}
			if(empty($parent_cateid)) $parent_cateid=-1;

			$category=new ArticleCategoryModel();
			$category->catename=$catename;
			$category->url_name=$url_name;
			$category->parent_cateid=$parent_cateid;
			$category->order=(empty($order)?0:$order);
			$category->appid=appid();
			$category->parent_ids=$parent_ids;
			
			$result=$category->save(); 

			if($result){
				return message('类别提交成功',true);
			}
		}
		return message('保存失败',false);
	}

	public function edit_category_post(){
		if(request()->ispost()){
			$catename=input('catename');
			$url_name=input('url_name');
			$order=input('order');
			$cateid=input('cateid'); 

			$parent_cateid=input('parent_cateid');
			$parent_ids=input('parent_ids');

			if(ArticleCategoryModel::where("catename='$catename' and cateid<>$cateid")->count()>0){
				return message('该类别已经存在',false);
			}

			$category_item=ArticleCategoryModel::find($cateid);
			if ($category_item) {
				$category_item->url_name=$url_name;
				$category_item->catename=$catename;
				$category_item->order=$order;
				$category_item->parent_ids=$parent_ids;
				$category_item->parent_cateid=$parent_cateid;
				$result=$category_item->force()->save();
				if($result){
					return message('类别修改成功',true);
				}
			} 
		}
		return message('保存失败',false);
	}

	public function delete_category_post(){
		if(request()->ispost()){
			$cateid=input('id');
			$category_item=ArticleCategoryModel::get($cateid,'Articles');
			// if($category_item->articlecount()>0){
			// 	return message('articlecount',false);
			// }
			if ($category_item) {
				$result=$category_item->together('Articles')->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
	}
}