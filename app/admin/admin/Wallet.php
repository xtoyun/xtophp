<?
namespace app\admin\admin;

use app\data\model\Wallets as WalletsModel;
use app\data\membership\Members; 
use app\data\membership\Users;

class Wallet extends BaseController{
	 

	public function index(){
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		$source=WalletsModel::selectpage(20,$where,'wid desc');//读取数据

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
				->submit(url('wallet/create_post'),'',url('wallet/index'))
				->fetch();
	}

	public function create_post(){
		if(request()->ispost()){   
			$username 	=input('username');
			$amount 	=input('amount');
 
			$user=Users::getuser(0,$username,'',false);
			if (!empty($user)) { 
				if(WalletsModel::usein($user->userid,$amount,0,'后台添加')){
					//清理缓存
					$user->clearCache();
					return message('添加成功',true);
				} 
			}
			return message('添加失败',false);
		}
	}
}