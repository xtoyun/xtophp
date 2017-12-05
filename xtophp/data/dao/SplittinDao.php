<?
namespace xto\data\dao;

use xto\data\model\ManagerModel; 
use xto\data\IDao;
use think\Db;
use xto\membership\core\UserRole;
use xto\Util;
use xto\App;

class SplittinDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_splittins','sid'); 
	} 

	function create($user,$income=0,$expenses=0,$remark){
		if($user->userrole!=UserRole::Member){
			return false;
		}
		$data=[
			'isuse' 	=> true,
			'userid' 	=> $user->userid,
			'username'	=> $user->username,
			'tradedate'	=> Util::getdate(),
			'income' 	=> $income, 
			'expenses' 	=> $expenses,
			'remark' 	=> $remark,
			'balance' 	=> $user->splittins+$income-$expenses
			]; 
		return $this->save($data);
	}
}