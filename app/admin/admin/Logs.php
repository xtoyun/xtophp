<?
namespace app\admin\admin; 
 
use data\model\SysLogs as LogsModel;

class Logs extends BaseController{

	public function entry(){
 
		return $this->fetch('logs/list');
	}
	 

	public function data_list(){
		$where=[];
		if(!empty(input('username'))){
			$where['username']=input('username');
		}
		if (!empty(input('keyword'))) {
			$where=[
				['ip|description','like',input('keyword').'%'],
			];
		}   
		 
		$result=LogsModel::selectpage(10,$where,'logid desc')->toarray();//读取数据
	 
		return json($result); 
	}

	public function index(){ 
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		$source=LogsModel::selectpage(20,$where,'logid desc');//读取数据
		return $this->template
				->TableTemplate 
				->setData('modulename','基础管理')
				->setTitle('日志管理')
				->setPager($source->render())
				->setDataSource($source)
				->addColumnButton('delete') 
				->addNav('','日志管理',url('logs/index')) 
				->setQuickSearch('username|ip','请输入关键字')
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

	public function delete_list_post(){
		$ids=input('ids');
		foreach ($ids as $key => $value) {
			$info=LogsModel::find($value['logid']);
			if ($info) {
				$info->delete();
				
			}
		}
		return message('删除成功',true); 
	}

	public function delete_post(){
		$logid=input('logid');
		$info=LogsModel::find($logid);
		if ($info) {
			$info->delete();
			return message('删除成功',trye);
		}
		return message('删除失败',false);
	}
}