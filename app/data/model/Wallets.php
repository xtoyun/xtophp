<?
namespace app\data\model;
 
use app\data\App;
use app\data\Model;
use app\data\membership\Users;

class Wallets extends Model{ 
	protected $pk="wid";  
 

	static function usein($userid,$income=0,$expenses=0,$remark='',$tradetype=0){
		$user=Users::getuser($userid,'',false);
		$data=[
			'userid' 	=> $user->userid,
			'username'	=> $user->username,
			'tradedate'	=> fdate(),
			'tradetype' => $tradetype,
			'income' 	=> $income, 
			'expenses' 	=> $expenses,
			'appid' 	=> appid(),
			'remark' 	=> $remark,
			'balance' 	=> $user->member->wallets+(float)$income-(float)$expenses
			]; 
		return self::create($data);
	}
}