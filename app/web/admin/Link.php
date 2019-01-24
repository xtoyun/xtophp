<?
namespace app\web\admin;

use app\web\dao\LinkDao;
use app\web\model\WebLink;

class Link extends BaseController{
	// private $dao;

	// public function __construct(){
	// 	parent::__construct();
	// 	$this->dao=LinkDao::instance();
	// }

	public function index(){
		$list = WebLink::where(null)->order('lid desc')->paginate(5);

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('友情链接')
				->setDataSource($list)
				->addColumnButton('delete') 
				->addNav('','友情链接',url('link/index')) 
				->addTopButton('','创建',url('link/create'))
				->addColumnButton('','修改',url('link/edit').'?id=$lid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('lid')
				->setColumns([
					['lid', '编号'],
					
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
				->addNav('','添加',url('link/create'))
				->addNav('','友情链接',url('link/index'))
				->setTitle('添加友情链接')
				->addFormItems([ 
						['text', 'title', '名称', ''],
						['image', 'img', '图片', ''],
						['text', 'url', '地址', '格式：http://','http://'],

					])
				->submit('link_create','')
				->fetch();
	}
	public function delete_post(){
		if(request()->ispost()){
			$lid = input('id');
			$category_item =WebLink::get( $lid,'sublist'); 

			if ($category_item) {
				$result = $category_item->together('sublist')->delete();
				if ($result) {
					return message('删除成功',true);
				}
				return message('删除失败',false);
			}
		}
	}

	public function edit(){
		$id=input('id'); 
		$category_item = WebLink::find($id)->toArray();
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('link/edit'),'?id='.$id)
				->addNav('','友情链接',url('link/index'))
				->setTitle('编辑友情链接')
				->addFormItems([
						['text', 'title', '名称', ''],
						['image', 'img', '图片', ''],
						['text', 'url', '地址', '格式：http://','http://'],
					])
				->setDataSource($category_item)
				->setPid('lid',$id)
				->submit('link_update','')
				->fetch();
	}
}