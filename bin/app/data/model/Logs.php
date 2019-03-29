<?
namespace app\data\model;

use app\data\Model;
use app\data\App;
use app\data\membership\Users;

class Logs extends Model{ 
	protected $pk="logid";  
	static function write($description,$username=''){ 
 
		$data=[
			'ip' 			=> getip(),
			'description'	=> $description,
			'createdate'	=> getdate(),
			'url'			=> request()->url(true), 
			'appid'			=> appid(),
			'username'		=> $username
			];
		return self::create($data);  
	}
}