<?
namespace app\web\admin;

use app\web\dao\ArticleDao;
use app\web\dao\CategoryDao;

class Content extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=ArticleDao::instance();
	}

	public function index(){
		$this->dao->setQuickSearch(input('keyword'),input('field'),'c');
		$this->dao->setorder('arid','desc');
		return $this->template
				->TableTemplate 
				->addLeftBlock('nav','选择栏目','nav')
				->setNav(true)
				->setOption(false)
				->setData('modulename','内容管理')
				->setTitle('文章管理')
				->setDataSource($this->dao->selectpage(10))
				->setQuickSearch('title','')
				->setPid('arid')
				->setColumns([
					['arid', '编号'],
					['catename', '类别'],
					['title', '标题'], 
					['createdate', '添加时间']
				])
				->fetch();
	}
}