<?
namespace app\admin\admin;

use xto\data\dao\WalletDao;

class Wallet extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=WalletDao::instance();
	}

	public function index(){
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('wid','desc');
		$source=$this->dao->selectpage(10);//读取数据

		return $this->template
				->TableTemplate 
				->setData('modulename','财务管理')
				->setTitle('钱包管理')
				->setPager($source->render())
				->setDataSource($source)
				//->addColumnButton('delete')
				//->addColumnButton('','',url('wallet/edit').'?id=$bid','','fa fa-pencil')
				->addTopButton('','添加钱包',url('wallet/create'))
				->addNav('','钱包列表',url('wallet/index')) 
				->setQuickSearch('username','请输入关键字')
				
				->setPid('wid')
				->setColumns([
					['wid', '流水号'],
					['userid', '用户编号'],
	                ['username', '用户名'],
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
				->addNav('','添加钱包',url('wallet/create'))
				->addNav('','钱包列表',url('wallet/index'))
				->setTitle('添加钱包')
				->addFormItems([
						['text', 'username', '用户名', '用户名称'],
		                ['text', 'amount', '金额', ''], 
					])
				->submit('createwallet','')
				->fetch();
	}
}