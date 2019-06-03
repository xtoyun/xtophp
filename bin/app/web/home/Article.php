<?
namespace app\web\home;

use app\data\model\Article as ArticleModel; 

class Article extends BaseController{
	public function _empty(){
		$action ='';
		$rid 	=input('id');//获取文章编号
		$title 	=input('title');
		$action 	=$this->action();//自定义类型
		$controller =strtolower($this->controller());//自定义类型
		//文章编号存在，则读取相应的栏目ID
		if(!empty($rid)){ 
			$info=ArticleModel::find((int)$rid);
			if (!empty($info)) {
				$this->assign('article',$info);
				$nid=$info['nid'];//栏目编号
			}
		}
		return $this->fetch('article/'.$action);	
		//读取栏目    
		// if(!empty(input('nid'))){
		// 	$nid=input('nid');
		// }
		// //指定action优先显示
		// if (!empty($action)) { 
		// 	switch ($action) {
		// 		case 'show': 
		// 			return $this->fetch('show/show_article');
		// 		case 'list':
		// 			return $this->fetch('list/list_article');
		// 		case 'category':
		// 			return $this->fetch('category/category_article');
		// 		default:
		// 			return $this->fetch("$controller/$action");
		// 	}
		// }else if(!empty($nid)){//再栏目显示
		// 	$ndao=NavDao::instance();
		// 	$nav=$ndao->find($nid);
		// 	if (!empty($nav)) {
		// 		$action=$nav['type'];
		// 		switch ($action) {
		// 			case 'show':
		// 				$action='show'.DS.str_replace('.html', '',$nav['show_template']);
		// 				return $this->fetch($action);
		// 			case 'list':
		// 				$action='list'.DS.str_replace('.html', '',$nav['list_template']);
		// 				return $this->fetch($action);
		// 			case 'category':
		// 				$action='category'.DS.str_replace('.html', '',$nav['category_template']);
		// 				return $this->fetch($action);
		// 			default:
		// 				$action='show'.DS.str_replace('.html', '',$nav['show_template']);
		// 				return $this->fetch($action);
		// 		}
		// 	} 
		// }
		// return $this->fetch('show/show_article');		
	}
}