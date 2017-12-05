<?
namespace xto\data\dao;

use xto\App;
use xto\Util;
use xto\membership\core\UserRole;
use xto\data\IDao;
use think\Db;

class PointDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_points','pid'); 
	} 

	public function create($user,$income,$expenses=0,$remark){
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
			'balance' 	=> $user->points+$income-$expenses
			]; 
		return $this->save($data);
	}
}