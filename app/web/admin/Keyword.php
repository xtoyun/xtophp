<?
namespace app\web\admin;

use app\web\dao\KeywordDao;
use app\web\model\WebKeyurl;

class Keyword extends BaseController{
	// private $dao;

	// public function __construct(){
	// 	parent::__construct();
	// 	$this->dao=KeywordDao::instance();
	// }

	public function index(){
		$list = WebKeyurl::where(null)->order('kid desc')->paginate(10);

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('关键字')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','关键字',url('keyword/index')) 
				->addTopButton('','创建',url('keyword/create'))
				->addColumnButton('','修改',url('keyword/edit').'?id=$kid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('kid')
				->setColumns([
					['kid', '编号'],
					
					['title', '名称'],
					['url', '地址','link','$url'], 
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('keyword/create'))
				->addNav('','关键字',url('keyword/index'))
				->setTitle('添加关键字')
				->addFormItems([ 
						['text', 'title', '名称', ''],
						['text', 'url', '地址', '格式：http://','http://'],

					])
				->submit('keyword_create','')
				->fetch();
	}
	public function delete_post(){
		if (request()->ispost()) {
			$kid = input('id');
			$category_item = WebKeyurl::get($kid,'sublist');

			if ($category_item) {
				$result = $category_item->together('sublist')->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
 }

	public function edit(){
		$id=input('id'); 
		$category_item=WebKeyurl::find($id)->toArray();
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('keyword/edit'),'?id='.$id)
				->addNav('','关键字',url('keyword/index'))
				->setTitle('编辑关键字')
				->addFormItems([
						['text', 'title', '名称', ''],
						['text', 'url', '地址', '格式：http://','http://'],
					])
				->setDataSource($category_item)
				->setPid('kid',$id)
				->submit('keyword_update','')
				->fetch();
	}
}