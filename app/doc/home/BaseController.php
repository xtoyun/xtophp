<?
namespace app\doc\home;

use think\Controller;
use think\Url;
use think\Request;
use xto\membership\context\Context;
use xto\membership\core\UserRole;
use xto\App;
use xto\data\service\ConfigService;

class BaseController extends \xto\template\BaseController 
{  

	// public function _initialize(){
	// 	parent::_initialize(); 
	// 	$id=input('id');
	// 	$info=array();
	// 	$list=empty($id)?DocHelper::getlist(0):DocHelper::getlist($id);
	// 	if($id>0){
	// 		$info=DocHelper::getdoc($id);
	// 		$list=DocHelper::getlist($id);
	// 	}
		
	// 	$this->assign('id',input('id'));
	// 	$this->assign('info',$info);
	// 	$this->assign('list',$list);
	// 	$this->assign('all',DocHelper::getall());
	// }
}