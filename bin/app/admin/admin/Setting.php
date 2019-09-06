<?
namespace app\admin\admin;

use app\data\model\Config as ConfigModel;
use think\facade\Cache; 

class Setting extends BaseController
{
	public function _empty()
	{ 
		$c=ConfigModel::getconfigs(false);

	    $action = request()->action();
	 
		$data=$this->module->getconfig($action); 
		if(!empty($data)){
			$result= $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNavs($data['navs'])
				
				->setTitle('基本设置')
				->addFormItems($data['data'])
				->setDataSource($c)
				->submit(url('config_post'),'');
			return $result->fetch();
		}
	}  

	public function config_post(){
		if(request()->ispost()){  
			$t=request(); 
			foreach ($t->param() as $key => $value) {
	 
				$config=ConfigModel::where([
					'name'=>$key
				])->find();
				if (empty($config)) {
					$config=new ConfigModel();
				}
				$config->name=$key;
				$config->value=$value;
				$config->appid=appid();
				$result=$config->save();
			}

			Cache::clear();
			return message('更新成功',true);
		}
	}

	public function config_swift_post(){
		if(request()->ispost()){  
			$value=input('value');
			$key=input('name');
		 
			$config=ConfigModel::where('name',$key)->find();
			if (!$config) {
				$config=new ConfigModel; 
			}
			$config->appid=appid();
			$config->name=$key;
			$config->value=$value;
			$result=$config->save();
			return message('更新成功',true);
		}
	}
}