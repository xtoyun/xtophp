<?
namespace app\web\admin;

// use xto\Util;
// use xto\App;
// use xto\data\dao\ConfigDao;

use think\Cache;
use think\Request;
use app\web\core\Utils;
use app\web\dao\NavDao;
use app\web\model\WebKeyurl;
use app\web\model\WebLink;
use app\web\model\WebRelays;
use app\web\model\WebModel;
use app\web\model\WebNav;

class Api extends BaseController{
	

	public function getnavs(){
		$id=input('id'); 
		$n_dao=NavDao::instance();
		$map['a.pid']=$id;

		$n_dao->map=$map;
		$list=$n_dao->select();
		$info=array();

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
				'children' 	=> $n_dao->checksub($value['nid'])//检查是否有子栏目
			];
		}
		return json($info);
	}

	public function getmodel(){
		$id=input('model_id');
		$dao 	=\app\web\dao\ModelDao::instance();
		return json($dao->find($id));
	}

	public function model_create(){
		if (request()->ispost()) {
			$name = input('name');
			$tablename = input('tablename');
			$controller = input('controller');
			$description = input('description');
		}
		if (empty($name)) {
			return message('请输入模型名称',false);
		}
		if(empty($tablename)){
			return message('请输入数据表',false);
		}
		if (empty($controller)) {
			return message('请输入控制器',false);
		}

		$category = new WebModel();
		$category->name = $name;
		$category->tablename = $tablename;
		$category->controller = $controller;
		$category->description = $description;

		$result = $category->save();
		if ($result) {
			return message('发布成功',true);
		}
		return message('发布失败',false);
	}
		// if(request()->ispost()){
		// 	$data=request()->post();
		// 	$dao 	=\app\web\dao\ModelDao::instance();
		// 	if($dao->save($data)){
		// 		return WebModel::message('添加成功',true);
		// 	}
		// }
		// return WebModel::message('添加失败',false);

	public function model_update(){
		if (request()->ispost()) {
			$mid = input('id');
			$name = input('name');
			$tablename = input('tablename');
			$controller = input('controller');
			$description = input('description');

			if (empty($name)) {
				return message('名称不能为空',false);
			}
			if (empty($tablename)) {
				return message('数据表不能为空',false);
			}
			if (empty($controller)) {
				return message('控制器不能为空',false);
			}

			$category_item = WebModel::find($mid);
			if ($category_item) {
				$category_item->name = $name;
				$category_item->tablename = $tablename;
				$category_item->controller = $controller;
				$category_item->description = $description;

				$result = $category_item->force()->save();
				if ($result) {
					return message('修改成功',true);
				}
			}
			return message('修改失败',false);
		}
	}

	public function model_index_delete(){
		if(request()->ispost()){
			$id 	=input('id');
			$dao 	=\app\web\dao\ModelDao::instance();

			$info=$dao->find($id);
			if(!empty($info)){
				if($info['is_sys']){
					return Util::message('系统模型不能删除',false);
				}
				if($dao->delete($id)){
					return Util::message('删除成功',true);
				}
			}
		}
		return Util::message('删除失败',false);
	}

	public function home_theme_templates(){
		$theme_name =input('theme');
		$url=config('home_theme_path').$theme_name;

		$categorys 	=Utils::getfiles($url.'/category');
		$shows 		=Utils::getfiles($url.'/show');
		$lists 		=Utils::getfiles($url.'/list');
		$arr 		=array(
				'categorys' 	=> $categorys,
				'lists' 		=> $lists,
				'shows' 		=> $shows
			);
		return json($arr);
	}

	public function config(){
		$value=input('value');
		$name=input('name');
		$arr=[
			'name'=>$name,
			'value'=>$value
		];
		$str="用户更新配置";
		App::writelog($str);
		$dao=ConfigDao::instance();
		$result=$dao->save($arr);
		
		return Util::message('保存成功',$result);
	}

	public function saveconfig(){
		$t=request();	 
		foreach ($t->param() as $key => $value) {
			$arr=[
				'name'=>$key,
				'value'=>$value
			];
			$dao=ConfigDao::instance();
			$result=$dao->save($arr);
		}
		return Util::message('保存成功',true);
	}

	public function article_category_create(){
		if(request()->ispost()){
			if(empty(input('catename'))){
				return Util::message('名称不能为空',false);
			}
			$dao=\app\web\dao\CategoryDao::instance();
			$t=request();	 

			if($dao->save($t->param())){
				return Util::message('保存成功',true);
			}
		}
		return Util::message('保存失败',false);
	}

	public function article_category_update(){
		if(request()->ispost()){
			$dao 	=\app\web\dao\CategoryDao::instance();
			$t 		=request();	 
			$id 	=input('cateid');
			$name 	=input('catename');

			if(empty(input('catename'))){
				return Util::message('名称不能为空',false);
			}

			$info=$dao->find($id);
			if (!empty($info)) {
				$info=array_merge($info,$t->param());
			}			
			
			$dao->map="(catename='$name' and cateid<>$id)"; 
			if($dao->update($info)){
				return Util::message('保存成功',true);
			}
		}
		return Util::message('保存失败',false);
	}

	public function category_index_delete(){
		if(request()->ispost()){
			$id 	=input('id');
			$dao 	=\app\web\dao\CategoryDao::instance();
			if($dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}

	public function relaydata_delete(){
		if(request()->ispost()){
			$id 	=input('id');
			$dao 	=\app\web\dao\RelayDataDao::instance();
			if($dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}

	// public function about_create(){
	// 	if(request()->ispost()){
	// 		$data=request()->post();
	// 		$dao 	=\app\web\dao\AboutDao::instance();
	// 		if($dao->save($data)){
	// 			return Util::message('添加成功',true);
	// 		}
	// 	}
	// 	return Util::message('添加失败',false);
	// }

	// public function keyword_create(){
	// 	if(request()->ispost()){
	// 		$data=request()->post();
	// 		$dao =\app\web\dao\KeywordDao::instance();
	// 		if($dao->save($data)){
	// 			return message('添加成功',true);
	// 		}
	// 	}
	// 	return message('添加失败',false);
	// }
	public function keyword_create(){
	 	if(request()->ispost()){
	 		$title = input('title');
	 		$url = input('url');

 			if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}

	 		$category = new WebKeyurl();
	 		$category->title = $title;
	 		$category->url = $url;

	 		$result = $category->save();
	 		if($result){
	 			return message('创建成功',true);
	 		}
	 		return message('创建失败',false);
	 	}
	 }


	public function keyword_update(){
		if(request()->ispost()){
			$kid = input('kid');
	 		$title = input('title');
	 		$url = input('url');	
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category_item = WebKeyurl::find($kid);
 		if ($category_item) {
 			$category_item->title = $title;
 			$category_item->url = $url;
 			$result = $category_item->force()->save();
 			if ($result) {
 				return message('修改成功',true);
 			}
 		}
        return message('修改失败',false);
		}
	}

	public function keyword_index_delete(){
		if(request()->ispost()){
			$id 	=input('id');
			$dao 	=\app\web\dao\KeywordDao::instance();
			if($dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}


	public function link_create(){
		 if(request()->ispost()){
		 	$title = input('title');
		 	$image = input('image');
		 	$url = input('url');

		 	if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category = new WebLink();
			$category->title = $title;
			$category->image = $image;
			$category->url = $url;

			$result = $category->save();
			if ($result) {
				return message('添加成功',true);
			}
			return message('添加失败',false);
		 }
	}

	public function link_update(){
		if(request()->ispost()){
			$lid = input('lid');
	 		$title = input('title');
	 		$url = input('url');	
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			if(empty($url)){
				return message('地址不能为空',false);
			}
			$category_item = WebLink::find($lid);
			if ($category_item) {
				$category_item->title = $title;
				$category_item->url = $url;
				$result = $category_item->force()->save();
				if ($result) {
					return message('修改成功',true);
				}
			}
			return message('修改失败',false);
		}
	}

	public function link_index_delete(){
		if(request()->ispost()){
			$id 	=input('id');
			$dao 	=\app\web\dao\LinkDao::instance();
			if($dao->delete($id)){
				return WebLink::message('删除成功',true);
			}
		}
		return WebLink::message('删除失败',false);
	}

	public function relay_create(){
		if(request()->ispost()){
			$title = input('title');
			$ename = input('ename');
			$remark = input('remark');

			if(empty($title)){
				return message('名称不能为空',false);
			}
			$category = new WebRelays();
			$category->title = $title;
			$category->ename = $ename;
			$category->remark = $remark;

			$result = $category->save();
			if ($result) {
				return message('添加成功',true);
			}
			return message('添加失败',false);
		 }
	}

	public function relay_data_create(){
		if(request()->ispost()){
			$data=request()->post();
			$dao 	=\app\web\dao\RelayDataDao::instance();
			if($dao->save($data)){
				return Util::message('添加成功',true);
			}
		}
		return Util::message('添加失败',false);
	}

	public function relay_data_update(){
		if(request()->ispost()){
			$data=request()->post();
			$dao 	=\app\web\dao\RelayDataDao::instance();
			if($dao->update($data)){
				return Util::message('更新成功',true);
			}
		}
		return Util::message('更新失败',false);
	}

	public function relay_update(){
		if(request()->ispost()){
			$rid = input('rid');
	 		$title = input('title');
	 		$remark = input('remark');	
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			$category_item = WebRelays::find($rid);
			$category_item->title = $title;
			$category_item->remark = $remark;

			$result = $category_item->force()->save();
			if ($result) {
				return message('修改成功',true);
			}
			return message('修改失败',false);
		}
	}

	public function relay_index_delete(){
		if(request()->ispost()){
			$id 	=input('id');
			$dao 	=\app\web\dao\RelayDao::instance();
			if($dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}

	public function nav_create(){
		// $data[];
		// foreach (WebNav::select() as $key => $value) {
		// 	$data[$value['title']]=$value['nid'];
		// }
		if (request()->ispost()) {
			$title = input('title');
			$ename = input('ename');
			$nav_order = input('nav_order');
			$style = input('style');
			$description = input('description');
			$ptitle = input('ptitle');

			if (empty($title)) {
				return message('请输入栏目名称',false);
			}
			if (empty($nav_order)) {
				return message('请输入排序',false);
			}

			$category = new WebNav();
			$category->title = $title;
			$category->ename = $ename;
			$category->nav_order = $nav_order;
			$category->style = $style;
			$category->description = $description;
			$category->ptitle = $ptitle;

			$result = $category->force()->save();
			if ($result) {
				return message('添加成功',true);
			}
			return message('添加失败',false);
		}
	}
	// public function nav_clink(){
	// 	if (request()->ispost()) {
	// 		$title = input('title');
	// 		$url = input('url');

	// 		if (empty($title)) {
	// 			return message('请输入栏目名称',false);
	// 		}
	// 		if (empty($url)) {
	// 			return message('请输入排序',false);
	// 		}
	// 		$category = new WebNav();
	// 		$category->title = $title;
	// 		$category->url = $url;
	// 		$result = $category->force()->save();
	// 		if($result){
	// 			return message('添加成功',true);
	// 		}
	// 		return message('添加失败',false);
	// 	}
	// }
	public function nav_update(){
		if(request()->ispost()){
			$nid = input('nid');
			$title = input('title');
	 		$ename = input('ename');
	 		$url = input('url');
	 		$nav_order = input('nav_order');
	 		$style = input('style');
	 		$description = input('description');

	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			$category_item = WebNav::find($nid);
			$category_item->ename = $ename;
			$category_item->title = $title;
			$category_item->url = $url;
			$category_item->nav_order = $nav_order;
			$category_item->style = $style;
			$category_item->description = $description;

			$result = $category_item->force()->save();
			if ($result) {
				return message('修改成功',true);
			}
			return message('修改失败',false);
		}
	}
		// if(request()->ispost()){
		// 	$data=request()->post();
		// 	$dao 	=\app\web\dao\NavDao::instance();
		// 	if($dao->update($data)){
		// 		return Util::message('更新成功',true);
		// 	}
		// }
		// return Util::message('更新失败',false);

	public function nav_index_delete(){
		if(request()->ispost()){
			$id 	=input('id');
			$dao 	=\app\web\dao\NavDao::instance();
			if($dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}
}