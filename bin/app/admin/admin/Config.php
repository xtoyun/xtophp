<?
namespace app\web\admin;

use app\data\model\Config as ConfigModel;

class Config extends BaseController
{
	public function _empty()
	{
		$c=ConfigModel::getconfigs(false);

	    $action = request()->action();
		$data=$this->module->getconfig($action);
		$result= $this->template
				->FormTemplate 
				->setData('modulename','网站设置') 
				->addNavs($data['navs'])
				->setTitle('基本设置')
				->setDataSource($c)
				->addFormItems($data['data'])
				->submit(url('config/config_post'),'');
			return $result->fetch();
	} 

	public function config_post(){
		if(request()->ispost()){  
 
			$t=request(); 
			foreach ($t->param() as $key => $value) {
				$config=ConfigModel::where('name',$key)->find();
				if ($config) {
					$config->name=$key;
					$config->value=$value;
					$config->appid=appid();
					$result=$config->save();
				}else{
					ConfigModel::create([
					    'name'  =>  $key,
					    'value' =>  $value,
					    'appid'=>appid()
					]);
				}
				
			}
			return message('更新成功',true);
		}
	}
}