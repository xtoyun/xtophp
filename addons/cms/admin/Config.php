<?
namespace addons\cms\admin;

use data\model\WebAbout as AboutModel;
use data\model\WebNav as NavModel; 

use data\model\SysConfig as ConfigModel;
use think\facade\Cache; 
class Config extends BaseController{

	public function index(){
		return $this->fetch('config/index');
	}

	public function post(){
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
}