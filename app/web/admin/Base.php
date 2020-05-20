<?
namespace app\web\admin;
 

class Base extends \app\common\AdminController
{ 
	public function __construct()
    {
        parent::__construct();
        $this->redirect('/admin.php/admin');
    }
}