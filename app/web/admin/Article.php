<?
namespace app\web\admin;

use xto\Util;
use app\web\dao\ArticleDao;
use app\web\dao\CategoryDao;
use app\web\dao\FieldDao;
use app\web\model\WebArticle;
use app\web\model\WebArticleCategory;

class Article extends BaseController{
	// private $dao;

	// public function __construct(){
	// 	parent::__construct();
	// 	$this->dao=ArticleDao::instance();
	// }

	public function index(){
		$list = WebArticle::where(null)->order('arid desc')->paginate(10);
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('文章管理')
				->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete','删除',url('article/article_delete')) 
				->addNav('','文章列表',url('article/index').'?arid='.input('arid')) 
				->addTopButton('','创建',url('article/create').'?arid='.input('arid'))
				->addColumnButton('','edit',url('article/edit').'?id=$arid'.'&arid='.input('arid'),'','fa fa-pencil')
				->setQuickSearch('title','')
				->setPid('arid')
				->setColumns([
					['arid', '编号'],
					// ['cateid', '类别编号'],
					['catename', '标题','link','edit?id=$arid'], 
                    ['nid', '栏目编号'],
					['update_time', '发布时间'], 
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		$nid=input('nid');
		// if(empty($nid)){
		// 	$this->error('请选择栏目');
		// 	return;
		// }
		// $c_dao=CategoryDao::instance();
		$data=[];
		foreach (WebArticleCategory::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}  

		$fields=[['checkbox', 'selfin', '自定义', '',[
							'推荐'=>'tj',
							'置顶'=>'zd'
							
						],'tj'],
						['select','cateid','类别','',$data],
						['text', 'title', '标题', ''],
						['image', 'img', '图片', ''],
						['ueditor', 'content', '标题', ''],
						['text', 'order', '排序', ''],
						['tags', 'keywords', '关键字', ''],
						['text', 'author', '作者', ''],
						['textarea', 'description', '描述', ''],
					];
		// //合并字段
		// // $f_dao=FieldDao::instance();			
		// // $fields=array_merge_recursive($fields,$f_dao->get_fields($this->dao->table));
		// // //去重
		// // $fields=Util::array_unset_tt($fields,1);
		
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				// ->addLeftBlock('nav','选择栏目','nav')
				->addNav('','创建文章',url('article/create'))
				->addNav('','文章列表',url('article/index').'?nid='.input('nid'))
				->setTitle('添加文章')
				// ->addFormItems($fields)
				->submit(url('article/article_create'),'')
				->setPid('nid',$nid)
				->addFormItems([
					['text','cid','文章名称'],
					['text','cateid','类别编号'],
					['select','catename','文章类别','',$data],
					['text','order','排序'],
					])
				->fetch();
	}
	public function delete_post(){
		// if(request()->ispost()){
		// 	$arid=input('id');
		// 	$category_item=WebArticle::get($arid,'sublist');
		// 	if ($category_item) {
		// 		$result=$category_item->delete();
		// 		if($result){
		// 			return message('保存成功',true);
		// 		}
		// 	}
		// }
		// return message('保存失败',false);
	}

	public function edit(){
		// $id=input('id'); 
		// $category_item = WebArticle::find('id')->toArray();
		// // $c_dao=CategoryDao::instance();
		// $data=[];
		// // foreach ($c_dao->select() as $key => $value) {
		// // 	$data[$value['catename']]=$value['cateid'];
		// // }
		// $fields=[['checkbox', 'selfin', '自定义', '',[
		// 					'置顶'=>'zd',
		// 					'推荐'=>'tj'
		// 				]],
		// 				['select','cateid','类别','',$data],
		// 				['text', 'title', '标题', ''],
		// 				['image', 'img', '图片', ''],
		// 				['ueditor', 'content', '标题', ''],
		// 				['text', 'order', '排序', ''],
		// 				['tags', 'keywords', '关键字', ''],
		// 				['text', 'author', '作者', ''],
		// 				['textarea', 'description', '描述', ''],
		// 			];
		// // //移除数据 
		// // $f_dao=FieldDao::instance();
		// // //合并字段
		// // $fields=array_merge_recursive($fields,$f_dao->get_fields($this->dao->table));
		// // //去重
		// // $fields=Util::array_unset_tt($fields,1);
		
		// return $this->template
		// 		->FormTemplate 
		// 		->setData('modulename','基础设置') 
		// 		->addNav('','编辑文章',url('article/edit'),'?id='.$id)
		// 		->addNav('','文章列表',url('article/index').'?nid='.input('nid'))
		// 		->setTitle('编辑文章')
		// 		->addLeftBlock('nav','选择栏目','nav')
		// 		->addFormItems($fields)
		// 		->setDataSource($this->dao->find($id))
		// 		->setPid('arid',$id)
		// 		->submit(url('article/article_update'),'')
		// 		->fetch();
	}

	public function article_create(){
		if(request()->ispost()){
			$cid = input('cid');
			$cateid = input('cateid');
			$nid = input('nid');
			$order = input('order');


			$category_item = new WebArticle();
			$category_item->cid = $cid;
			$category_item->cateid = $cateid;
			$category_item->nid = $nid;
			$category_item->order = $order;

			$result = $category_item->save();
			if ($result) {
				return message('OK',true);
			}
			return message('none',false);
		}
	}
		// $nid = input('nid');
	// 	if (empty($nid)) {
	// 		return message('添加异常',false);
	// 	}
	// 	if(empty(input('cateid'))){
	// 		return message('请选择类别',false);
	// 	}
	// 	if(empty(input('title'))){
	// 		return message('文章标题不能为空',false);
	// 	}
	// 	if(request()->ispost()){
	// 		$data=request()->post(); 
	// 		if($data){
	// 			return message('添加成功',true);
	// 		}
	// 	}
	// 	return message('添加失败',false);
	// }

	public function article_update(){
		if(empty(input('cateid'))){
			return Util::message('请选择类别',false);
		}
		if(empty(input('title'))){
			return Util::message('文章标题不能为空',false);
		}
		if(request()->ispost()){
			$data=request()->post(); 
			if($this->dao->edit($data)){
				return Util::message('更新成功',true);
			}
		}
		return Util::message('更新失败',false);
	}

	public function article_delete(){
		if(request()->ispost()){
			$id 	=input('id'); 
			if($this->dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}
}