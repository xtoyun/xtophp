<?
namespace app\web\home;

use app\web\dao\AboutDao;
use app\web\dao\ModelDao;

class About extends BaseController{
	public function _empty(){
		$action ='';
		$rid 	=input('id');//获取文章编号
		$title 	=input('title');//获取文章编号
		$action 	=$this->action();//自定义类型

		//文章编号存在，则读取相应的栏目ID
		$about=array();
		if(!empty($rid)){
			$rdao=AboutDao::instance();
			$info=$rdao->find((int)$rid);
			if (!empty($info)) {
				$about=$info;
				$nid=$info['nid'];//栏目编号
			}
		}
		if(!empty($title)){
			$rdao=AboutDao::instance();
			$info=$rdao->findByTitle($title);
			if (!empty($info)) {
				$about=$info;
				$nid=$info['nid'];//栏目编号
			}
		}
		$this->assign('about',$about);
		//读取栏目
		if(!empty(input('nid'))){
			$nid=input('nid');
		}
		//指定action优先显示
		if (!empty($action)) { 
			switch ($action) {
				case 'show': 
					return $this->fetch('show/show_about');
				case 'list':
					return $this->fetch('list/list_about');
				case 'category':
					return $this->fetch('category/category_about');
			}
		}else if(!empty($nid)){//再栏目显示
			$ndao=NavDao::instance();
			$nav=$ndao->find($nid);
			if (!empty($nav)) {
				$action=$nav['type'];
				switch ($action) {
					case 'show':
						$action='show'.DS.str_replace('.html', '',$nav['show_template']);
						return $this->fetch($action);
					case 'list':
						$action='list'.DS.str_replace('.html', '',$nav['list_template']);
						return $this->fetch($action);
					case 'category':
						$action='category'.DS.str_replace('.html', '',$nav['category_template']);
						return $this->fetch($action);
					default:
						$action='show'.DS.str_replace('.html', '',$nav['show_template']);
						return $this->fetch($action);
				}
			} 
		}
		return $this->fetch('show/show_about');
	} 
}