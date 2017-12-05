<?
namespace app\web;

use xto\template\TemplateContainer;
use xto\App;

class Template extends TemplateContainer{

	public function getTemplateVirtualPath(){
		return '\app\web\template';
	}
}