<?
namespace app\data\model;
 
use app\data\App;
use app\data\Model;
use app\data\membership\Users;
use think\Db;
 
class Wallets extends Model{ 
	protected $pk="wid";   
 
  	public function getTradedateAttr($value)
    {
        if(is_numeric($value)){
            return date("Y-m-d H:i:s" ,(int)$value);
        }else{
            return $value;
        }
    }

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

	static function selectpage($pagesize,$where=null,$order=null,$field='*'){
		return parent::view('Wallets',$field)
				->where($where)
				->order($order)
				->paginate($pagesize); 
	} 
}