<?
namespace app\admin\admin;

use xto\membership\context\Users;
use xto\membership\core\UserLoginStatus;
use xto\membership\core\CreateUserStatus;
use xto\membership\context\Manager;
use xto\App;
use xto\Util;
use xto\lib\GeetestLib;
use think\Session;
use think\Controller;

class Login extends \xto\template\BaseController {
	protected $param;

    public function __construct()
    {
        parent::__construct();
        $this->param = $this->request->param();
    }

	public function index(){
		$this->assign("url", \think\Url::build('/admin/index',''));
		return view("login/index");
	}

	public function logout(){
		Session::delete(App::instance()->manager_auth_name);
		$this->redirect("/admin/login");
	}

	public function login(){
		if(!$this->check_geetest()){
			$arr = array(
				    'msg'=> '验证失败',
				    'success'=> false
				);
            return json($arr);
        }
		$username=input('username');
		$password=input('password');
		$time=Util::getdate();
		$user=Users::getUser(0,$username,false);
		if (empty($user)) {
			$arr = array(
			    'msg'=> '用户名不存在',
			    'success'=> false
			);
			return $arr;
		}
		
		$msg='';
		$issuccess=false;
		$user->password=$password;
		$loginUserStatus=Users::validateUser($user);
		switch ($loginUserStatus) {
			case UserLoginStatus::Success:
				Session::set(App::instance()->manager_auth_name,$username);
				$issuccess=true;
				$msg='登录成功';
				App::writelog("用户$user->username于登录成功");
				break;
			case UserLoginStatus::InvalidCredentials:
				$msg='账户验证失败';
				break;
			case UserLoginStatus::AccountPending:
				$msg='账户未审核';
				break;
			case UserLoginStatus::AccountLockedOut:
				$msg='账户已被锁定';
				break;
			case UserLoginStatus::UnknownError:
				$msg='未知错误';
				break;
			default:
				$msg='异常错误，请联系管理员';
				break; 
		} 

		$arr = array(
					'username'=>$user->username,
				    'msg'=> $msg,
				    'success'=> $issuccess
				);
		return json($arr);
	}

	//使用前验证
    public function get_geetest_status()
    { 
        $geetest = new GeetestLib(config('geetest.id'), config('geetest.key'));
        $data    = array(
            "user_id"     => "0", # 网站用户id
            "client_type" => "web", #web:电脑上的浏览器；h5:手机上的浏览器，包括移动应用内完全内置的web_view；native：通过原生SDK植入APP应用的方式
            "ip_address"  => $this->request->ip() # 请在此处传输用户请求验证时所携带的IP
        );
        $status = $geetest->pre_process($data, 1);
        Session::set('gtserver', $status);
        Session::set('gt_user_id', $data['user_id']);
        return json($geetest->get_response_str());
    }

    public function check_geetest()
    {
        $geetest = new GeetestLib(config('geetest.id'), config('geetest.key'));

        $data    = array(
            "user_id"     => Session::get('gt_user_id'), # 网站用户id
            "client_type" => "web", #web:电脑上的浏览器；h5:手机上的浏览器，包括移动应用内完全内置的web_view；native：通过原生SDK植入APP应用的方式
            "ip_address"  => $this->request->ip()
        );

        if (Session::get('gtserver') == 1) {   //服务器正常
            $result = $geetest->success_validate($this->param['geetest_challenge'],$this->param['geetest_validate'],$this->param['geetest_seccode'], $data);
            if ($result) {
               return true;
            }
        } else {  //服务器宕机,走failback模式
            if ($geetest->fail_validate($this->param['geetest_challenge'], $this->param['geetest_validate'])) {
               return true;
            }
        }
        return false;
    }

	public function admin(){
		$user=new Manager();
		$user->username='admin';
		$user->password='123123';
		$user->email='admin@qq.com';
		$user->is_approved=true;
		$user->is_locked=false;
		$user->description='管理员';

		$s=Users::createUser($user);
        if ($s==UserCreateStatus::Created) {
             return "管理员添加成功";
        }

        return "管理员添加失败";
	}
}