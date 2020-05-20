<?
namespace app\admin\admin;

use data\model\SysConfig as ConfigModel;
use think\facade\Cache; 

class Setting extends BaseController
{
	public function basic(){
		$this->assign('config',ConfigModel::getconfigs(false));
		return $this->fetch('setting/basic');
	}
	public function api()
	{ 	
		$this->assign('config',ConfigModel::getconfigs(false));
		$this->assign('apiopen',$this->sysconfig('apiopen'));
		return $this->fetch('setting/api');
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