<?
namespace app\web\admin;

use app\web\dao\ContentDao;
use app\web\dao\CategoryDao;

class Content extends BaseController{
	private $dao;

	public function __construct(){
		parent::__construct();
		$this->dao=ContentDao::instance();
	}

	public function index(){
		$this->dao->setQuickSearch(input('keyword'),input('field'),'c');
		$this->dao->setorder('cid','desc');
		return $this->template
				->TableTemplate  
				->addLeftBlock('nav','选择栏目','nav')
				->setNav(true)
				->setOption(false)
				->setData('modulename','内容管理')
				->setTitle('文章管理')
				->setDataSource($this->dao->selectpage(10))
				->setQuickSearch('title','')
				->setPid('cid')
				->setColumns([
					['cid', '编号'], 
					['title', '标题'], 
					['author', '作者'], 
					['keywords', '关键字'], 
					['createdate', '添加时间']
				])
				->fetch();
	}
}