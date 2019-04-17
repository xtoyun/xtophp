<?
namespace app\data\membership;

use think\Db;
use app\data\Model; 

class Members extends Model { 

	protected $pk="userid";  
	protected $autoWriteTimestamp = 'int';
	protected $updateTime = 'update_time';
	protected $createTime = 'create_time';

	public function getCreateTimeAttr($value)
    {  
    	if(is_numeric($value)){
    		return date("Y-m-d H:i:s" ,(int)$value);
    	}else{
    		return $value;
    	}
    }

    public function getUpdateTimeAttr($value)
    {
    	if(is_numeric($value)){
    		return date("Y-m-d H:i:s" ,(int)$value);
    	}else{
    		return $value;
    	}
    }

	public function user()
    { 
        return $this->hasOne('Users','userid','userid');
    }

    static function getcount(){
    	return parent::where('')->count();
    }

    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
    	return parent::alias('a')->field("a.*,username,is_approved,is_locked,createdate,funrole,email,last_login_date,is_admin")->where($where)->order($order)
                  ->join('Users b','b.userid=a.userid')  
                  ->paginate($pagesize);
	}  

	static function getuser($userid){
		$user=parent::find($userid);
		$user= array_merge($user->toArray(),$user->user->toArray());
		unset($user['password']);
		return $user;
	}

	public function createmember($data = [], $where = [], $sequence = NULL){
		//先写入用户表
		$user=new Users;
		$user->username=$this->username;
		$user->password=$this->password;
		$user->is_plat=0;
		$user->appid=appid();
		$user->is_admin=0;
		$user->is_approved=isset($this->is_approved)?$this->is_approved:true; 
		$result=$user->save();

		if($result->success){
			$this->userid=$user->userid;
			$this->appid=appid();
			parent::save($data,$where,$sequence);
		}
		return $result;
	} 

	public function changeSafePassword($password){
		$newpwd=md5($password.config('encrystr'));
		$data = [
			'userid'=>$this->userid,
			'trade_password' => $newpwd,
			'trade_password_format'=>'md5'
			];
		return self::update($data);
	}

	public function change_trade_pwd($data=null){
		$pwd=$this->trade_password;
		if(!empty($this->trade_password_format)){
			switch ($this->trade_password_format) {
				case 'md5':
					$pwd=md5($this->trade_password.config('encrystr'));
				default:
					$this->trade_password_format='md5';
					$pwd=md5($this->trade_password.config('encrystr'));
					break;
					
			} 
		} 
		$this->trade_password=$pwd;
		if($this->save($data)){
			return true;
		}
	} 

	static function get_refer_list($userid){
		$userid=empty($userid)?0:$userid;
		return parent::alias('a')->field("a.userid,refer_userid,refer_username,mobile,username as b_username,is_approved,is_locked,createdate,funrole,email,last_login_date,is_admin")->where("ifnull(refer_userid,0)=$userid") 
            ->join('Users b','b.userid=a.userid') 
			->select();
	}

	static function get_refer_count($userid){
		return parent::where("ifnull(refer_userid,0)=$userid")->count();
	}
}