<?
namespace addons\admininfo\admin;

 
class Index extends Base{
	public function index(){
		return $this->fetch('/widget');
	}
}