<?
namespace app\admin\admin;

use xto\data\service\ConfigService;
use xto\data\service\PayService;
use xto\plugins\SMSPlugins;
use xto\plugins\EmailPlugins;
use xto\plugins\OSSPlugins;
use xto\plugins\PayPlugins;

class Setting extends BaseController
{
	public function _empty()
	{ 
	    $action = \think\Request::instance()->action();
	 
		$data=$this->module->getconfig($action);
		
		if(!empty($data)){
			$result= $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNavs($data['navs'])
				
				->setTitle('基本设置')
				->addFormItems($data['data'])
				//->setDataSource($c)
				//->setPid($c->appid)
				->submit('saveconfig','');
			return $result->fetch();
		}
	} 
}