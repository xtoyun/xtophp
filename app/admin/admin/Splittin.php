<?
namespace app\admin\admin;

use xto\data\dao\SplittinDao;

class Splittin extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=SplittinDao::instance();
	}

	public function index(){
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('sid','desc');
		$source=$this->dao->selectpage(10);//读取数据

		return $this->template
				->TableTemplate 
				->setData('modulename','财务管理')
				->setTitle('奖金管理')
				->setPager($source->render())
				->setDataSource($source)
				//->addColumnButton('','',url('splittin/edit').'?id=$sid','','fa fa-pencil')
				->addTopButton('','添加奖金',url('splittin/create'))
				->addNav('','奖金列表',url('splittin/index')) 
				->setQuickSearch('username','请输入关键字')
				->setPid('sid')
				->setColumns([
					['sid', '流水号'],
					['userid', '用户编号'],
	                ['username', '用户名','link','create?username=$username&sid=$sid'],
	                ['tradedate', '交易日期'], 
	                ['income','收入',''],
	                ['expenses','支出',''],
	                ['balance','结余',''],
	                ['remark','备注',''],
	                //['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','财务设置') 
				->addNav('','添加奖金',url('splittin/create'))
				->addNav('','奖金列表',url('splittin/index'))
				->setTitle('添加奖金')
				->addFormItems([
						['text', 'username', '用户名', '用户名称',input('username')],
		                ['text', 'amount', '金额', '',100], 
					])
				->submit('createsplittin','')
				->fetch();
	}
}