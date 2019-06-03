<?
namespace app\web\admin;

use app\data\model\Nav as NavModel;
use app\data\model\Cmodel;

class Nav extends Base{
	public function index(){
	$list = NavModel::where(null)->order('nid desc')->paginate(10); 

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('栏目管理')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','栏目',url('nav/index')) 
				->addTopButton('','创建栏目',url('nav/create'))
				->addTopButton('','创建链接',url('nav/clink'))
				->addColumnButton('','修改',url('nav/edit').'?id=$nid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('nid')
				->setColumns([
					['nid', '编号'],  
					['title', '栏目名称'],
					['pid', '上级栏目id'],
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
		foreach (NavModel::where(null)->select() as $key => $value) {
			$p_nav[$value['title']]=$value['nid'];
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加自定义',url('nav/clink'))
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
				->submit(url('nav/clink_post'),'')
				->fetch();
	}

	public function clink_post(){
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

			$nav_data = new NavModel();
			$nav_data->title = $title;
			$nav_data->pid = input('pid');
			$nav_data->model_id=0;
			$nav_data->ename = $ename;
			$nav_data->nav_order = $nav_order;
			$nav_data->style = $style;
			$nav_data->description = $description;
			$nav_data->ptitle = $ptitle;

			$result = $nav_data->force()->save();
			if ($result) {
				return message('添加成功',true);
			}
			return message('添加失败',false);
		}
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

	public function get_model(){
		$id=input('model_id');
		return json(Cmodel::find($id)->toArray());
	}

	public function create(){
		//$source = new NavModel();
		$source=get_home_themes(); 
		$result=[];
		foreach ($source as $key => $value) {
			//dump($value);

			$result[$value['theme']['name']]=$key;
		}

		$models=[];
		$m_models=Cmodel::where(null)->select();
		foreach ($m_models as $key => $value) {
			$models[$value['name']]=$value['mid'];
		} 

		$p_nav=[];
		foreach (NavModel::where(null)->select() as $key => $value) {
			$p_nav[$value['title']]=$value['nid'];
		}
		//增加页面脚本控制，采用vue技术
		//vue实例读取是按字段名称取,model,如果是select,就可以用model.selected读取取了
		//请务必熟悉vue技术
		// $get_model_url=url('nav/get_model');
		// $script="
		// 	var model_data={};
		// 	model_data.model_id=model_id.selected;
		// 	app.post('$get_model_url',model_data,'',function(sender){
		// 		default_theme.selected=sender.default_theme;
	 //            default_theme.bind(sender.category_template,sender.list_template,sender.show_template);
  //           });  
		// ";//增加脚本控制
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('nav/create'))
				->addNav('','栏目管理',url('nav/index'))
				->setTitle('添加栏目')
				->addFormItems([ 
						['select', 'model_id', '选择模型', '',$models,'','',''], 
						['text', 'title', '栏目名称', ''],
						['select', 'pid', '上级栏目', '',$p_nav,'','','','','=作为一级栏目='],
						['text', 'ename', '栏目英文', ''],
						['text', 'description', '描述', '',''],
						['ueditor','content','内容','',''],
						['text', 'nav_order', '排序', ''],
						// ['text', 'style', '样式', '',''], 
						// ['text', 'remark', '备注', '',''],
						
 						// ['web_theme_select', 'default_theme', '模板设置', '',$result,''],
 						// ['select', 'type', '默认类型', '',
 						// [
 						// 	'栏目首页'=>'category',
 						// 	'样目列表'=>'list',
 						// 	'内容页'=>'show'
 						// ]
 						// ,'','','',''], 
 						['radio', 'is_view', '是否在导航显示','', [
 							'是'=>true,
 							'否'=>false,
 						],true],
					])
				->submit(url('nav/create_post'),'')
				->fetch();
	}

	public function create_post(){
		// $data[];
		// foreach (NavModel::select() as $key => $value) {
		// 	$data[$value['title']]=$value['nid'];
		// }
		if (request()->ispost()) {
			$title = input('title');
			$ename = input('ename');
			$nav_order = input('nav_order');
			$style = input('style');
			$description = input('description');
			$ptitle = input('ptitle');
			$model_id = input('model_id');
			if (empty($model_id)) {
				return message('请选择模型',false);
			}
			if (empty($title)) {
				return message('请输入栏目名称',false);
			}
			if (empty($nav_order)) {
				return message('请输入排序',false);
			}

			$nav_data = new NavModel();
			$nav_data->title = $title;
			$nav_data->pid = input('pid');
			$nav_data->model_id=$model_id;
			$nav_data->ename = $ename;
			$nav_data->nav_order = $nav_order;
			$nav_data->style = $style;
			$nav_data->description = $description;
			$nav_data->ptitle = $ptitle;

			$result = $nav_data->force()->save();
			if ($result) {
				return message('添加成功',true);
			}
			return message('添加失败',false);
		}
	}

	public function delete_post(){
		if (request()->ispost()) {
			$nid = input('id');
			$category_item = NavModel::get($nid,'sublist');

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
		$nav_item=NavModel::find($id)->toArray();

		$source=get_home_themes();
		$result=[];
		foreach ($source as $key => $value) {
			$result[$value['theme']['name']]=$key;
		}

		$models=[];
		$m_models=Cmodel::where(null)->select();
		foreach ($m_models as $key => $value) {
			$models[$value['name']]=$value['mid'];
		} 

		$p_nav=[];
		foreach (NavModel::where("nid<>$id")->select() as $key => $value) {
			$p_nav[$value['title']]=$value['nid'];
		}
		
		//增加页面脚本控制，采用vue技术
		//vue实例读取是按字段名称取,model,如果是select,就可以用model.selected读取取了
		//请务必熟悉vue技术
		// $script="
		// 	var m_data={};
		// 	m_data.model_id=model_id.selected;
		// 	app.post('getmodel',m_data,'',function(sender){
		// 		default_theme.selected=sender.default_theme;
	 //            default_theme.bind(sender.category_template,sender.list_template,sender.show_template);
  //           });  
		// ";//增加脚本控制

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
					['select', 'model_id', '选择模型', '',$models,'','',''], 
						['text', 'title', '栏目名称', ''],
						['select', 'pid', '上级栏目', '',$p_nav,'','','','','=作为一级栏目='],
						['text', 'ename', '栏目英文', ''],
						['text', 'description', '描述', '',''],
						['ueditor','content','内容'],
						['text', 'url', '地址', ''],
						['text', 'nav_order', '排序', ''],
						// ['text', 'style', '样式', '',''], 
						// ['text', 'remark', '备注', '',''], 
 						// ['web_theme_select', 'default_theme', '模板设置', '',$result,'',
 						// 	$category_template,$list_template,$show_template],
 						// ['select', 'type', '默认类型', '',
 						// [
 						// 	'栏目首页'=>'category',
 						// 	'样目列表'=>'list',
 						// 	'内容页'=>'show'
 						// ]
 						// ,'','','',''], 
 						['radio', 'is_view', '是否在导航显示','', [
 							'是'=>true,
 							'否'=>false,
 						],true]
					])
				->setDataSource($nav_item)
				->setPid('nid',$id)
				->submit(url('nav/edit_post'),'')
				->fetch();
	}

	public function edit_post(){
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
			$nav_item = NavModel::find($nid);
			$nav_item->ename = $ename;
			$nav_item->title = $title;
			$nav_item->url = $url;
			$nav_item->nav_order = $nav_order;
			$nav_item->style = $style;
			$nav_item->description = $description;
			$nav_item->pid = input('pid');
			$nav_item->model_id=input('model_id');

			$result = $nav_item->force()->save();
			if ($result) {
				return message('修改成功',true);
			}
			return message('修改失败',false);
		}
	}
}