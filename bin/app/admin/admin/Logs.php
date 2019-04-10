<?
namespace app\admin\admin; 
 
use app\data\model\Logs as LogsModel;

class Logs extends BaseController{

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