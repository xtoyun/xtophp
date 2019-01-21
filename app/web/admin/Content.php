<?
namespace app\web\admin;

use app\web\dao\ContentDao;
use app\web\dao\CategoryDao;
use app\web\model\WebcontentCategory;
use app\web\model\WebContent;

class Content extends BaseController{

	public function index(){
		$list = WebContent::where(null)->order('cid desc')->paginate(10);
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
				->addColumnButton('delete','删除',url('content/delete_post'))
				->addColumnButton('','',url('content/edit').'?id=$arid'.'&arid='.input('arid'),'','fa fa-pencil')
				->setQuickSearch('title','')
				->setPid('cid')
				->setColumns([
					['cid', '编号'], 
					['title', '标题','link',url('article/index').'?id=$cid'], 
					['author', '作者'], 
					['createdate', '添加时间'],
					['button','操作','btn']
				])
				->fetch();
	}
        public function create(){

        }
        public function edit(){
        	dump('edit');
        	die;

        }
        public function delete_post(){
        	dump('delete_post');
        	die;

        }
}