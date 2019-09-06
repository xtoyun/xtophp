<?
namespace app\web\home;

use app\data\model\Article as ArticleModel; 
use think\Db;

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

				//直接更新阅读数
				$info->reads=(empty($info->reads)?0:$info->reads)+1;
				$info->save(); 
			}
		}
		return $this->fetch('article/'.$action); 	
	}
}