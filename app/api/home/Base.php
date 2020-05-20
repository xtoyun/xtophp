<?php
namespace app\api\home;

use think\Controller;
use data\membership\SysUsers as Users;

class Base extends Controller
{
	public $params;

	public $api_message;

	protected $uid;

	protected $user;

	public $token;

	protected $token_key = 'abbexdfsdfeeescvsraa!@#';
    
    public function __construct($params = [])
	{
		 
		parent::__construct();
		
		//获取参数
		$this->params = $params;
		if (empty($params)) {
			$this->params = input();
		}

		$this->api_message = new ApiMessage();

		$this->token = $this->get('token','');

		
	}

	protected function outMessage($title, $data, $code = 0, $message = "success")
	{
		$this->api_message->code = $code;
		$this->api_message->data = $data;
		$this->api_message->message = $message;
		$this->api_message->title = $title;
		
		if ($this->api_message) {
			return json_encode($this->api_message, JSON_UNESCAPED_UNICODE);
		} else {
			abort(404);
		}
	}

	//检查token
	public function checkToken(){
		if(empty($this->token)){
			echo $this->outMessage('会员登录','',-2,'token empty');
        	exit();
		}
		$user = Users::where('token', $this->token)->field('time_out,userid,username')->find();
        if($user){
        	$result=[
        		'userid'=>$user->userid,
        		'username'=>$user->username
        	];
        	if ((time() - $user['time_out'] > 0) or empty($user['time_out'])) {
        		echo $this->outMessage('会员登录',$result,-99,'fail');
        		exit();
        	} 
        }else{
        	echo $this->outMessage('会员登录','',-2,'请登录远程');
        	exit();
        }
	}

	//生成token
	public function createToken()
    {
        $str = md5(uniqid(md5(microtime(true)), true)+$this->token_key);
        $str = sha1($str); //加密
        return $str;
    }

    public function get($key, $default_value = "")
	{
		$v = isset($this->params[ $key ]) ? $this->params[ $key ] : $default_value;
		return $v;
	}
}
