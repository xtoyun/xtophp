<?
namespace app\web\admin;

 
class Index extends Base{
	public function index(){ 
		return $this->setblock(true)->setnav(false)->view("index/index");
 		//$this->redirect("/admin.php/admin/login");
	} 
}