<?
namespace app\data\model;

use app\data\App;
use app\data\Model;
use app\data\membership\Users;


class Splittins extends Model{ 
	//protected $table='xto_logs';
	protected $pk="sid";  
 

	static function usein($userid,$income=0,$expenses=0,$remark='',$tradetype=0){
		$user=Users::getuser($userid,'',false);
 
		$data=[
			'userid' 	=> $user->userid,
			'username'	=> $user->username,
			'tradedate'	=> getdate(),
			'tradetype' => $tradetype,
			'income' 	=> $income, 
			'expenses' 	=> $expenses,
			'appid' 	=> appid(),
			'remark' 	=> $remark,
			'balance' 	=> $user->splittins+(float)$income-(float)$expenses
			]; 
		return self::create($data);
	}
}