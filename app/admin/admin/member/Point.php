<?
namespace app\admin\admin\member;

use app\data\model\Points;
use app\data\membership\Members; 
use app\data\membership\Users;
use app\admin\admin\BaseController as Controller;

class Point extends Controller{
	 

	public function index(){
		
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}
		$userid=input('userid');
		if ($userid) {
		  	$where['userid']=$userid;
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
				->addTopButton('','添加积分',url('create'))
				->addNav('','积分列表',url('index')) 
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
				->addNav('','添加积分',url('create'))
				->addNav('','积分列表',url('index'))
				->setTitle('添加积分')
				->addFormItems([
						['text', 'username', '用户名', '用户名称',input('username')],
		                ['text', 'amount', '金额', '',100], 
		                ['text', 'remark', '备注', ''], 
					])
				->submit(url('create_post'),'',url('index'))
				->fetch();
	}

	public function create_post(){
		if(request()->ispost()){   
			$username 	=input('username');
			$amount 	=input('amount');
			$remark 	=input('remark');
 
			$user=Users::getuser(0,$username,'',false);
			if (!empty($user)) { 
				if(Points::usein($user->userid,$amount,0,$remark)){
					//清理缓存
					$user->clearCache();
					return message('添加成功',true);
				} 
			}
			return message('添加失败',false);
		}
	}
}