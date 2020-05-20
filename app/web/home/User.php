<?
namespace app\web\home;

use app\web\dao\ModelDao;
use app\web\dao\ProductDao;
use app\web\dao\NavDao;

class User extends BaseController{
 
 // 	public function __construct(){ 
	// 	parent::__construct();  
	// 	$this->assign('layout',$this->view_path.'layout.html');//指定母版页面 
	// }
public function welcome(){
		return $this->fetch('user/welcome');	
	}
 	public function index(){
		return $this->fetch('user/index');	
	}

	public function reg(){
		return $this->fetch('user/reg');	
	}

	public function login(){
		return $this->fetch('user/login');	
	}
}