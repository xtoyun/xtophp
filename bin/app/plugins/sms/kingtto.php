<?
namespace app\plugins\sms;

use xto\plugins\SMSSender;
use xto\Util;

class kingtto extends SMSSender{
	protected $account; 
	protected $password; 
	protected $userid;  

	public function send($tel,$message=''){
		if (empty($tel) || empty($message)) {
			return false;
		}
		$post_data['userid'] = $this->userid;
		$post_data['account'] = $this->account;
		$post_data['password'] = $this->password;
		$post_data['content'] = $message;
		//多个手机号码用英文半角豆号‘,’分隔
		$post_data['mobile'] = $tel;
		$url='http://sms.kingtto.com:9999/sms.aspx?action=send';
		$o='';
		foreach ($post_data as $k=>$v)
		{
		//短信内容需要用urlencode编码，否则可能收到乱码
		$o.="$k=".urlencode($v).'&'; 
		}
		$post_data=substr($o,0,-1);
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_URL,$url);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
		$result = curl_exec($ch);
		curl_close($ch); 
		$b=xml_to_array($result);
	  	if ($b) {
	  		if (strtolower($b['returnsms']['returnstatus'])=='success') {
				return message('发送成功',true,10,10);
			}else{
				return message($b['returnsms']['message'],false,10,10);
			}
	  	}
		
		return message('未知错误',false,10,10);;
	}

	public function configShortDescription(){
		return "kingtto";
	}

	public function configDescription(){
		return "QQ613602029";
	}

	public function configLogo(){
		return "/config/plugins/sms/kingtto.png";
	}

	public function configAccount(){
		return $this->account;
	}  

	public function configPassword(){
		return $this->password;
	} 

	public function configUserid(){
		return $this->userid;
	} 
}