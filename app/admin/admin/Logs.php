<?
namespace app\admin\admin; 

use xto\data\service\LogService;
use xto\data\dao\LogDao;

class Logs extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=LogDao::instance();
	}

	public function index(){ 
		$this->dao->setorder('logid','desc');
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$source=$this->dao->selectpage(10);//读取数据
		return $this->template
				->TableTemplate 
				->setData('modulename','基础管理')
				->setTitle('日志管理')
				->setPager($source->render())
				->setDataSource($source)
				->addColumnButton('delete') 
				->addNav('','日志管理',url('logs/index')) 
				->setQuickSearch('username,ip','请输入关键字')
				->setPid('logid')
				->setColumns([
					['logid', '编号'],
	                ['username', '用户名'],
	                ['ip', 'IP','link','?keyword=$ip&field=ip'], 
	                ['url', '页面'], 
	                ['createdate', '创建日期'], 
	                ['description', '描述'], 
	                ['button', '操作', 'btn']
				])
				->fetch();
	}
}