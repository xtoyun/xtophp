<?
namespace data\model;

use data\Model;

class SysLogs extends Model{ 
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