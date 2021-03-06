<?
namespace app\admin\admin;

use app\common\lib\GeetestLib;
use think\facade\Session; 
use think\facade\Cache; 
 
use data\membership\SysUsers as Users;
use data\model\SysLogs as Logs;
use think\Request;

use think\captcha\Captcha;

class Login extends \think\Controller  {
	protected $param;

    public function __construct()
    {
        parent::__construct();
        $this->param = $this->request->param();
    }

     public function verify()
      {
        $captcha = new Captcha(); 
        return $captcha->entry();
      }

	public function index(){ 
		$url=input('url');
		if (empty($url)) {
			$url=url('/admin/index');
		}
		$this->assign("url", $url);
		return view("/login");
	}

	public function logout(){
        Cache::clear(); 
		Session::set(config('auth_admin_name'),'');
		$this->redirect(url('/admin/login'));
	}

    // public function auth(){

    //     $request=request();
    //     $OauthAuth = new OauthAuth();
    //     $result_token=$OauthAuth->accessToken($request);
 
         
    //     if ($result_token) { 
    //         Session::set('access_token',$result_token->getData()['access_token']);
    //         return message('登录成功',true);
    //     }
    //     return message('登录失败',false);
    // }

    public function auth(){
        if(request()->ispost()){
            $data=$_POST;
            $username=$data['username'];
            $password=$data['password'];
            $time=getdate();
            $user=Users::getUser(0,$username,'',false);
            if (empty($user)) {
                return message('用户名不能为空',false);
            } 
            $result=$user->validateUser($password);

            if ($result->success) {
                $userid=$user->userid;
                $password=$user->password; 

                Session::set('userid',$userid);
                Session::set('appid',$user->appid);
                Logs::write($username."用户于登录成功".$result->msg,$username);
                return message('登录成功',true);     
            } 
            return message('登录失败',false);
        }
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

            Session::set(config('auth_admin_name'),$userid);
            Session::set('appid',$user->appid);
            Logs::write($username."用户于登录成功".$result->msg,$username);
            return message('登录成功',true);
            //$this->redirect("/admin.php/admin/login/auth?client_id=$userid&secret=$password");	
		} 
		return message('登录失败',false);
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
}