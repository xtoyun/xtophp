<?
namespace app\admin\admin;

use app\common\lib\GeetestLib;
use think\facade\Session; 
use app\data\model\Logs;

use app\data\App;
use app\data\membership\Users;
use app\api\auth\OauthAuth;

class Login extends \app\data\Controller  {
	protected $param;

    public function __construct()
    {
        parent::__construct();
        $this->param = $this->request->param();
    }

	public function index(){  

		$url=input('url');
		if (empty($url)) {
			$url=url('/admin/index');
		}
		$this->assign("url", $url);
		return view("login/index");
	}

	public function logout(){
		Session::delete(App::manager_auth());
		$this->redirect("/admin.php/admin/login");
	}

	public function login(){
		//Session::clear();
		if(!$this->check_geetest()){
			return message('验证码不能为空',false);
        }
		$username=input('username');
		$password=input('password');
		$time=getdate();
		$user=Users::getUser(0,$username,'',false);
		if (empty($user)) {
			return message('用户名不能为空',false);
		} 
		$result=$user->validateUser($password);
		if ($result->success) {
            $userid=$user->userid;
            $password=$user->password; 
  
            $header_result=uheader(Request()->host()."/accesstoken?client_id=$userid&secret=$password");
            $result_token=json_decode($header_result); 
            if ($result_token) { 
                Session::set('access_token',$result_token->access_token);
                //uheader(Request()->host()."/accesstoken",'get',['authorization', 'token '.$result_token->access_token]); 
            }

            //Session::set(App::manager_auth(),$username);
			Logs::write($username."用户于登录成功".$result->msg);
		} 
		return $result; 
	}

	//使用前验证
    public function get_geetest_status()
    { 
        $geetest = new GeetestLib(config('app.geetest.id'), config('app.geetest.key'));
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
        $geetest = new GeetestLib(config('app.geetest.id'), config('app.geetest.key'));

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

    public function test(){
    	$s=['t'=>0];
    	return json($s);
    }
}