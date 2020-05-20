<?php
namespace app\api\home;

use data\membership\SysUsers as Users;
use data\membership\Members;
use think\facade\Session;
use think\Request;
use data\model\SysLogs as Logs;
use think\captcha\Captcha;

class Login extends Base
{
    public function register(){
        $title = '会员注册';

        $username = $this->get('username','');
        $mobile   = $this->get('mobile','');
        $password = $this->get('password','');
        $confirm  = $this->get('confirm','');
        $code     = $this->get('code','');

        if(empty($username)){
            return $this->outMessage($title,'',-2,'用户名不能为空');
        }
        if(empty($password)){
            return $this->outMessage($title,'',-3,'密码不能为空');
        }

        if($password!=$confirm){
            return $this->outMessage($title,'',-4,'密码不一样');
        }

        $captcha = new Captcha();
        if( !$captcha->check($code))
        {
            return $this->outMessage($title,'',-2,'验证码错误');
        }

        $member=new Members();

        $member->username   = $username;
        $member->mobile   = $mobile; 
        $member->password   = $password; 
        $member->is_approved    = true;   
        $result=$member->createmember();

        if ($result->success) {
            return $this->outMessage($title,'',0,$result->msg); 
        } 

        return $this->outMessage($title,'',-1,$result->msg); 
    }

	public function auth()
	{
		$title = '会员登录';

		$username = $this->get('username','');
        $password = $this->get('password','');
        $code     = $this->get('code','');

        $user=Users::getUser(0,$username,'',false);
        $captcha = new Captcha();
        if( !$captcha->check($code))
        {
            return $this->outMessage($title,'',-2,'验证码错误');
        }
        if (empty($user)) {
            return $this->outMessage($title,'',-2,'用户名不存在');
        } 
        $result=$user->validateUser($password);
        if ($result->success) {
            $token = $this->createToken();
            $time_out = strtotime("+7 days");
            $userinfo = ['time_out' => $time_out,
                'token' => $token];

            $res =Users::where('username', $username)
                ->update($userinfo);

            $out_message=[
            	'uid'=>$user->userid,
            	'token'=>$token
            ];
            Session::set("access_token",$token); 
            Session::set('appid',$user->appid);
            Session::set('uid',$user->userid);
            Logs::write($username."用户于登录成功".$result->msg,$username);
            return $this->outMessage($title, $out_message,0,'登录成功');     
        }
		return $this->outMessage($title,'',-1,'登录失败');
	}
}