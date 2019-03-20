<?
namespace app\web\admin;

 
class Index extends \think\Controller{
	public function index(){ 
 		$this->redirect("/admin.php/admin/login");
	} 
}