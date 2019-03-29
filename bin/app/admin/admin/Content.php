<?
namespace app\admin\admin;

use app\data\model\ContentCategory as ContentCategoryModel;
use app\data\model\Content as ContentModel;
use app\data\model\Article as ArticleModel;

class Content extends BaseController{

	public function index(){
		//\think\facade\Cache::clear();
		//del_file_dir(APP_ROOT.'Runtime/');
		$list = ContentModel::where(null)->order('cid desc')->paginate();
		return $this->template
				->TableTemplate  
				->addLeftBlock('nav','选择栏目','nav')
				->setNav(true)
				->setOption(false)
				->setData('modulename','内容管理')
				->setTitle('最新内容')
				->setDataSource($list)
				->setPager($list->render())
				//->addTopButton('','创建',url('content/create').'?cid='.input('cid'))
				//->addColumnButton('delete','删除',url('content/delete_post'))
				//->addColumnButton('','修改',url('content/edit').'?id=$arid'.'&arid='.input('arid'),'','fa fa-pencil')
				->setQuickSearch('title','')
				->setPid('cid')
				->setColumns([
					['cid', '内容编号'], 
					['title', '内容标题','link',url('article/index').'?id=$arid'], 
					['author', '作者'], 
					['create_time', '添加时间'],
					//['button','操作','btn']
				])
				->fetch();
	}
        public function create(){
        	$source = get_home_themes();
        	$result = [];
        		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加')
				->addNav('','内容管理',url('content/index'))
				->setTitle('添加内容')
				->addFormItems([ 
						// ['select', 'model_id', '选择模型', '',$models,'','',''], 
						['text', 'title', '标题', ''],
						// ['select', 'pid', '上级栏目', '',$p_nav,'','','','','=作为一级栏目='],
						['image','img','图片',''],
						['text', 'description', '简介', '',''],
						['ueditor','content','内容','',''],
						['text','keywords','关键字',''],
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
 						// ['radio', 'is_view', '是否在导航显示','', [
 						// 	'是'=>true,
 						// 	'否'=>false,
 						// ],true],
					])
				->submit(url('content/create_post'),'')
				->fetch();
}
        public function create_post(){

        }

        public function edit(){
        	dump('edit');
        	die;

        }
        public function delete_post(){
        	if (request()->ispost()) {
        		$cid = input('id');
        		$content_item = WebContent::get($cid,'sublist');
        		if($content_item){
        			$result = $content_item->delete();
        			if ($result) {
        				return message('删除成功',true);
        			}
        		}
        		return message('删除失败',false);
        	}

        }
}