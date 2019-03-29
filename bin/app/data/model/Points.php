<?
namespace app\data\model;

use app\data\App;
use app\data\Model;
use app\data\membership\Users;
use think\Db;

class Points extends Model{ 
	//protected $table='xto_logs';
	protected $pk="pid";  
 

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
			'balance' 	=> $user->member->points+(float)$income-(float)$expenses
			]; 
		return self::create($data);
	}

	static function selectpage($pagesize,$where=null,$order=null,$field='*'){
    	$result = Db::view('Points',$field) 
			->order($order)
			->where($where) 
			->withAttr('tradedate', function($value, $data) {
				return date("Y-m-d H:i:s" ,$value);
			}) 
		    ->paginate($pagesize);
		return $result; 
	}
}