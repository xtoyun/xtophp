<?
namespace app\admin;

use xto\template\TemplateContainer;
use xto\App;

class Template extends TemplateContainer{

	public function getTemplateVirtualPath(){
		return '\app\admin\template';
	}
}