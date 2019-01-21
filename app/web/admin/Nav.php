<?
namespace app\web\admin;

use app\web\dao\NavDao;
use app\web\core\Utils;
use app\web\model\WebNav;

class Nav extends BaseController{
	// private $dao;

	// public function __construct(){
	// 	parent::__construct();
	// 	$this->dao=NavDao::instance();
	// }

	public function index(){
	$list = WebNav::where(null)->order('nid desc')->paginate(10); 

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('栏目')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','栏目',url('nav/index')) 
				->addTopButton('','创建栏目',url('nav/create'))
				->addTopButton('','创建链接',url('nav/clink'))
				->addColumnButton('','edit',url('nav/edit').'?id=$nid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('nid')
				->setColumns([
					['nid', '编号'],  
					['title', '名称'],
					['pid', '上级id'],
					['is_view', '导航中显示','bool'],
					['nav_order', '排序'],
					// ['style', '样式', '',''], 
					['remark', '备注','',''], 
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function clink(){
		$p_nav=[];
		// foreach ($this->dao->select() as $key => $value) {
		// 	$p_nav[$value['title']]=$value['nid'];
		// }
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加自定义',url('nav/clink'))
				->addNav('','栏目管理',url('nav/index'))
				->setTitle('添加栏目')
				->addFormItems([ 
						['text', 'title', '链接名称', ''],
						// ['select', 'pid', '上级栏目', '',$p_nav,'','','','','=作为一级栏目='],
						// ['text', 'nav_order', '排序', ''],
						['text', 'url', '自定义网址', ''],
 						// ['radio', 'is_view', '是否在导航显示','', [
 						// 	'是'=>true,
 						// 	'否'=>false,
 						// ],true],
					])
				->submit('nav_clink','')
				->fetch();
	}

	public function uedit(){
		$id=input('id'); 
		$info=$this->dao->find($id);
		$p_nav=[];
		foreach ($this->dao->select() as $key => $value) {
			$p_nav[$value['title']]=$value['nid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','修改自定义',url('nav/uedit'),"?id=$id")
				->setTitle('添加栏目')
				->addFormItems([ 
						['text', 'title', '栏目名称', ''],
						['select', 'pid', '上级栏目', '',$p_nav,'','','','','=作为一级栏目='],
						['text', 'nav_order', '排序', ''],
						['text', 'url', '自定义网址', ''],
 						['radio', 'is_view', '是否在导航显示','', [
 							'是'=>true,
 							'否'=>false,
 						],true],
					])
				->setPid('nid',$id)
				->setDataSource($info)
				->submit('nav_update','')
				->fetch();
	}

	public function create(){
		$source = new WebNav();
		// $source=Utils::get_home_themes();
		$result=[];
		// foreach ($source as $key => $value) {
		// 	$result[$value['theme']['name']]=$key;
		// }

		$models=[];
		// $m_dao=\app\web\dao\ModelDao::instance();
		// foreach ($m_dao->select() as $key => $value) {
		// 	$models[$value['name']]=$value['mid'];
		// }

		$p_nav=[];
		// foreach ($this->dao->select() as $key => $value) {
		// 	$p_nav[$value['title']]=$value['nid'];
		// }
		//增加页面脚本控制，采用vue技术
		//vue实例读取是按字段名称取,model,如果是select,就可以用model.selected读取取了
		//请务必熟悉vue技术
		$script="
			var model_data={};
			model_data.model_id=model_id.selected;
			app.post('getmodel',model_data,'',function(sender){
				default_theme.selected=sender.default_theme;
	            default_theme.bind(sender.category_template,sender.list_template,sender.show_template);
            });  
		";//增加脚本控制
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('nav/create'))
				->addNav('','栏目管理',url('nav/index'))
				->setTitle('添加栏目')
				->addFormItems([ 
						['text', 'title', '栏目名称', ''],
						['select', 'pid', '上级栏目', '',$p_nav,'','','','','=作为一级栏目='],
						['text', 'ename', '栏目英文', ''],
						['text', 'nav_order', '排序', ''],
						['text', 'style', '样式', '',''], 
						['text', 'description', '描述', '',''],
						['text', 'remark', '备注', '',''],
						['hr','hr',''],
						['select', 'model_id', '选择模型', '',$models,'','','',$script], 
 						['web_theme_select', 'default_theme', '模板设置', '',$result,''],
 						['select', 'type', '默认类型', '',
 						[
 							'栏目首页'=>'category',
 							'样目列表'=>'list',
 							'内容页'=>'show'
 						]
 						,'','','',''], 
 						['radio', 'is_view', '是否在导航显示','', [
 							'是'=>true,
 							'否'=>false,
 						],true],
					])
				->submit('nav_create','')
				->fetch();
	}
		public function delete_post(){
		if (request()->ispost()) {
			$nid = input('id');
			$category_item = WebNav::get($nid,'sublist');

			if ($category_item) {
				$result = $category_item->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
 }

	public function edit(){ 
		$id=input('id'); 
		$category_item=WebNav::find($id)->toArray();
		// $source=Utils::get_home_themes();
		$result=[];
		// foreach ($source as $key => $value) {
		// 	$result[$value['theme']['name']]=$key;
		// }

		$models=[];
		// $m_dao=\app\web\dao\ModelDao::instance();
		// foreach ($m_dao->select() as $key => $value) {
		// 	$models[$value['name']]=$value['mid'];
		// }

		$p_nav=[];
		// foreach ($this->dao->select() as $key => $value) {
		// 	$p_nav[$value['title']]=$value['nid'];
		// }
		
		//增加页面脚本控制，采用vue技术
		//vue实例读取是按字段名称取,model,如果是select,就可以用model.selected读取取了
		//请务必熟悉vue技术
		$script="
			var m_data={};
			m_data.model_id=model_id.selected;
			app.post('getmodel',m_data,'',function(sender){
				default_theme.selected=sender.default_theme;
	            default_theme.bind(sender.category_template,sender.list_template,sender.show_template);
            });  
		";//增加脚本控制

		$category_template='';
		$list_template='';
		$show_template='';
		$default_theme='';

		// $info=$this->dao->find($id);
		// if(!empty($info['url'])){
		// 	$this->redirect("/web/nav/uedit?id=$id");
		// 	return;
		// }

		// if(isset($info['category_template'])){
		// 	$category_template=$info['category_template'];
		// }
		// if(isset($info['list_template'])){
		// 	$list_template=$info['list_template'];
		// }
		// if(isset($info['show_template'])){
		// 	$show_template=$info['show_template'];
		// } 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('nav/edit'),'?id='.$id)
				->addNav('','栏目列表',url('nav/index'))
				->setTitle('编辑栏目')
				->addFormItems([ 
						['text', 'title', '栏目名称', ''],
						['select', 'pid', '上级栏目', '',$p_nav,'','','','','=作为一级栏目='],
						['text', 'ename', '栏目英文', ''],
						['text', 'url', '地址', ''],
						['text', 'nav_order', '排序', ''],
						['text', 'style', '样式', '',''], 
						['text', 'description', '描述', '',''],
						['text', 'remark', '备注', '',''],
						['hr','hr',''],
						['select', 'model_id', '选择模型', '',$models,'','','',$script], 
 						['web_theme_select', 'default_theme', '模板设置', '',$result,'',
 							$category_template,$list_template,$show_template],
 						['select', 'type', '默认类型', '',
 						[
 							'栏目首页'=>'category',
 							'样目列表'=>'list',
 							'内容页'=>'show'
 						]
 						,'','','',''], 
 						['radio', 'is_view', '是否在导航显示','', [
 							'是'=>true,
 							'否'=>false,
 						],true]
					])
				->setDataSource($category_item)
				->setPid('nid',$id)
				->submit('nav_update','')
				->fetch();
	}
}