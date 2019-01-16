<?
namespace app\admin\admin;

use app\data\model\Points;
use app\data\membership\Members; 

class Point extends BaseController{
	 

	public function index(){
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		$source=Points::selectpage(20,$where,'pid desc');//读取数据

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
				->submit(url('point/create_post'),'',url('point/index'))
				->fetch();
	}

	public function create_post(){
		if(request()->ispost()){   
			$username 	=input('username');
			$amount 	=input('amount');
 
			$user=Members::getuser(0,$username,false);
			if (!empty($user) && $user->userrole==UserRole::Member) { 
				if(Points::usein($user->userid,$amount,0,'后台添加')){
					//清理缓存
					Members::clearUserCache($user);
					return message('添加成功',true);
				} 
			}
			return message('添加失败',false);
		}
	}
}