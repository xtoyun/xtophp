<?
namespace app\web\admin;

use app\web\dao\AboutDao;
use app\web\dao\CategoryDao;

class About extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=AboutDao::instance();
	} 

	public function index(){ 
		// $this->dao->setQuickSearch(input('keyword'),input('field'));
		// $this->dao->setorder('abid','desc');
		// return $this->template
		// 		->TableTemplate 
		// 		->setData('modulename','内容管理')
		// 		->setTitle('单页管理')
		// 		->setDataSource($this->dao->selectpage(10))
		// 		->addColumnButton('delete') 
		// 		->addNav('','页面列表',url('about/index')) 
		// 		->addTopButton('','创建',url('about/create'))
		// 		->addColumnButton('','',url('about/edit').'?id=$abid','','fa fa-pencil')
		// 		->setQuickSearch('title','')
		// 		->setPid('abid')
		// 		->setColumns([
		// 			['abid', '编号'],
		// 			['title', '标题'], 
  //                   ['order', '排序'],
  //                   ['button', '操作', 'btn']
		// 		])
		// 		->fetch();
	}

	// public function create(){
	// 	$c_dao=CategoryDao::instance();
	// 	$data=[];
	// 	foreach ($c_dao->select() as $key => $value) {
	// 		$data[$value['name']]=$value['cateid'];
	// 	}
	// 	return $this->template
	// 			->FormTemplate 
	// 			->setData('modulename','基础设置') 
	// 			->addNav('','添加',url('about/create'))
	// 			->addNav('','单页列表',url('about/index'))
	// 			->setTitle('添加类别')
	// 			->addFormItems([ 
	// 					['checkbox', 'self', '自定义', '',[
	// 						'推荐'=>'tj',
	// 						'置顶'=>'zd'
							
	// 					],'tj'],
	// 					['text', 'title', '标题', ''],
	// 					['ueditor', 'content', '标题', ''],
	// 					['text', 'order', '排序', ''],
	// 					['tags', 'keywords', '关键字', ''],
	// 					['textarea', 'description', '描述', ''],
	// 				])
	// 			->submit('about_create','')
	// 			->fetch();
	// }

	public function edit(){
		$nid=input('nid'); 
		if(empty($nid)){
			$this->error('请选择栏目');
		}
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('about/edit'),'?nid='.$nid)
				//->addNav('','单页列表',url('about/index'))
				->setTitle('编辑单页')
				->addLeftBlock('nav','选择栏目','nav')
				->addFormItems([
						// ['checkbox', 'selfin', '自定义', '',[
						// 	'置顶'=>'zd',
						// 	'推荐'=>'tj'
						// ]],
						['text', 'title', '标题', ''],
						['ueditor', 'content', '标题', ''],
						['text', 'order', '排序', ''],
						['tags', 'keywords', '关键字', ''],
						['textarea', 'description', '描述', ''],
					])
				->setDataSource($this->dao->findByNav($nid))
				->setPid('nid',$nid)
				->submit('about_update','')
				->fetch();
	}
}