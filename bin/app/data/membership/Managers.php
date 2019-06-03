<?
namespace app\data\membership;

use think\Db;
use app\data\Model; 

class Managers extends Model { 

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

    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
    	return parent::alias('a')->field("a.*,username,is_approved,is_locked,createdate,funrole,email,last_login_date,is_admin")->where($where)->order($order)
                  ->join('Users b','b.userid=a.userid') 
                  ->withAttr('last_login_date', function($value, $data) {
                  	 	return date("Y-m-d H:i:s" ,(int)$value);
					}) 
					->withAttr('createdate', function($value, $data) {
						return date("Y-m-d H:i:s" ,(int)$value);
					}) 
                  ->paginate($pagesize);
	} 

	

	static function getinfo($userid){
		$user=parent::find($userid);
		if ($user) {
			$user= array_merge($user->toArray(),$user->user->toArray());
			unset($user['password']);
			return $user;
		}
		return null;
	}

	public function create_manager($data = [], $where = [], $sequence = NULL){
		//先写入用户表
		$user=new Users;
		$user->username=$this->username;
		$user->password=$this->password;
		$user->is_plat=isset($this->is_plat)?$this->is_plat:false;
		$user->appid 	=isset($this->appid)?$this->appid:appid();;
		$user->is_admin=isset($this->is_admin)?$this->is_admin:false;
		$user->is_approved=$this->is_approved; 
		$user->email=isset($this->email)?$this->email:'';
		$user->userrole=isset($this->userrole)?$this->userrole:'';
		$result=$user->c_save();

		if($result->success){
			$this->userid=$user->userid;
			$this->appid=$user->appid;
			parent::save($data,$where,$sequence);
		}
		return $result;
	}

	public function delete($id=null){
		$user=Users::find($this->userid);
		if ($user) {
			$user->delete();
		}
		return parent::delete($id);
	}
}