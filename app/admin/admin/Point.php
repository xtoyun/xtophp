<?
namespace app\admin\admin;

use xto\data\dao\PointDao;

class Point extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=PointDao::instance();
	}

	public function index(){
		$this->dao->setQuickSearch(input('keyword'),input('field'));
		$this->dao->setorder('pid','desc');
		$source=$this->dao->selectpage(10);//读取数据

		return $this->template
				->TableTemplate 
				->setData('modulename','财务管理')
				->setTitle('积分管理')
				->setPager($source->render())
				->setDataSource($source)
				//->addColumnButton('delete')
				//->addColumnButton('','',url('point/edit').'?id=$pid','','fa fa-pencil')
				->addTopButton('','添加积分',url('point/create'))
				->addNav('','积分列表',url('point/index')) 
				->setQuickSearch('username','请输入关键字')
				->setPid('pid')
				->setColumns([
					['pid', '流水号'],
					['userid', '用户编号'],
	                ['username', '用户名','link','create?username=$username&pid=$pid'],
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
				->addNav('','添加积分',url('point/create'))
				->addNav('','积分列表',url('point/index'))
				->setTitle('添加积分')
				->addFormItems([
						['text', 'username', '用户名', '用户名称',input('username')],
		                ['text', 'amount', '金额', '',100], 
					])
				->submit('createpoint','')
				->fetch();
	}
}