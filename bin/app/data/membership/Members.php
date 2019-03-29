<?
namespace app\data\membership;

use think\Db;
use app\data\Model; 

class Members extends Model { 

	protected $pk="userid"; 

	public function getCreateTimeAttr($value)
    {
    	return date("Y-m-d H:i:s" ,$value);
    }

    public function getUpdateTimeAttr($value)
    {
    	return date("Y-m-d H:i:s" ,$value);
    }

	public function user()
    { 
        return $this->hasOne('Users','userid','userid');
    }

    static function getcount(){
    	return parent::where('')->count();
    }

    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
    	$result = Db::view('Members',$field)
			->view('Users','username,is_approved,is_locked,createdate,funrole,email,last_login_date,is_admin','Users.userid=Members.userid') 
			->withAttr('createdate', function($value, $data) {
				return date("Y-m-d H:i:s" ,$value);
			}) 
			->withAttr('last_login_date', function($value, $data) {
				return date("Y-m-d H:i:s" ,$value);
			})
			->order($order)
			->where($where) 
		    ->paginate($pagesize);
		return $result; 
	} 

	static function getuser($userid){
		$user=parent::find($userid);
		$user= array_merge($user->toArray(),$user->user->toArray());
		unset($user['password']);
		return $user;
	}

	public function createUser($user){
		$result=$user->createuser(); 
		if(!empty($result)&& $result->success){
			$this->userid=$user->userid;
			if($this->save()){
				return message('添加成功',true,1,1);
			}
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

	public function createMember($data=null){
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
		return Db::view('Members','refer_userid,refer_username,mobile')
			->view('Users','username as b_username,userid','Users.userid=Members.userid') 
			->where("ifnull(refer_userid,0)=$userid")
			->select(); 
	}

	static function get_refer_count($userid){
		return parent::where("ifnull(refer_userid,0)=$userid")->count();
	}
}