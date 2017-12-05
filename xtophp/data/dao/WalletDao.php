<?
namespace xto\data\dao;

use xto\data\model\SplittinModel; 
use xto\data\IDao;
use think\Db;
use xto\membership\core\UserRole;
use xto\Util;
use xto\App;


class WalletDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_wallets','wid'); 
	} 

	public function create($user,$income=0,$expenses=0,$remark){
		if($user->userrole!=UserRole::Member){
			return false;
		}
		$data=[
			'userid' 	=> $user->userid,
			'username'	=> $user->username,
			'tradedate'	=> Util::getdate(),
			'income' 	=> $income, 
			'expenses' 	=> $expenses,
			'appid' 	=> App::appid(),
			'remark' 	=> $remark,
			'balance' 	=> $user->wallets+$income-$expenses
			]; 
		return $this->save($data);
	}
}