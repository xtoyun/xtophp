<?
namespace app\web\admin;

class Config extends BaseController
{
	public function _empty()
	{
	    $action = request()->action();
		$data=$this->module->getconfig($action);
		$result= $this->template
				->FormTemplate 
				->setData('modulename','网站设置') 
				->addNavs($data['navs'])
				->setTitle('基本设置')
				->addFormItems($data['data'])
				->submit('saveconfig','');
			return $result->fetch();
	} 
}