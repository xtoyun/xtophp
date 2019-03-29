<?
namespace app\admin\admin;

class Module extends BaseController{
	public function index(){
		$result=[];
		$data=$this->module->modules(true);
		foreach ($data as $key => $value) {

			$result[]=[
				'name'=>$value->name,
				'issys'=>$value->IsSys?'是':'否'
			];
		}
		return $this->template
				->TableTemplate 
				->setData('modulename','应用管理')
				->setTitle('模块管理') 
				->setDataSource($result) 
				->addNav('','模块列表',url('module/index')) 
				->setPid('name')
				->setColumns([
					['name', '模块'], 
					['issys', '是否系统'], 
	                ['remark','备注',''],
				])
				->fetch();
	}
}