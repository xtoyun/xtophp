<?
namespace app\data\membership;

use think\Db;
use app\data\Model; 

class Members extends Model { 

	protected $pk="userid";  
	protected $autoWriteTimestamp = 'int';
	protected $updateTime = 'update_time';
	protected $createTime = 'create_time';

	public function getWalletsAttr($value)
    {
    	return $value;
    }

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

	public function createmember(){

		Db::startTrans();
		try {
			//先写入用户表
			$user=new Users;
			$user->username=$this->username;
			$user->password=$this->password;
			$user->is_plat=0;
			$user->appid=appid();
			$user->is_admin=0;
			$user->is_approved=isset($this->is_approved)?$this->is_approved:true; 
			$result=$user->c_save();

			if($result->success){
				$this->userid=$user->userid;
				$this->appid=appid();
				if(parent::save()){
					self::$s_userid=$user->userid;
					self::init_refer($user->userid);//初始化
				}
			}
			Db::commit();
		} catch (Exception $e) {
			Db::rollback();
		}
		
		return $result;
	} 

	private static $s_layer=1;
	private static $s_userid=0;
	static function init_refer($userid){
		$user=parent::find($userid);
		if ($user) {
			$ruser=parent::find($user->refer_userid);
			if ($ruser) {
				//插入明细
				$refer=new MemberRefers;
				$refer->userid=$ruser->userid;//推荐人id
				$refer->fuserid=self::$s_userid;//自己id
				$refer->layer=self::$s_layer;//相对自己的层数，从1开始
				$refer->appid=appid();
				$refer->save();
				self::$s_layer++;
				if (!empty($ruser->refer_userid)) {
					//递归处理，注意不要出现死循环，如果id和推荐id相同会出现
					self::init_refer($ruser->userid);
				}
			}
		}
	}

	public function validate_trade($password){
    	 
		switch ($this->trade_password_format) {
			case 'md5':
				$newpwd=md5($password.config('encrystr'));
				break;
			default:
				$newpwd=md5($password.config('encrystr'));
				break;
		}  
    	if($newpwd==$this->trade_password){ 
    		return true;
    		// parent::where('userid='.$this->userid,false)
    		//           ->update(['last_login_date'=>time()]);
    		// return message('登录成功',true,1,1);
    	}
	 
		return false;
	} 

	public function changeSafePassword($password){
		// $newpwd=md5($password.config('encrystr')); 
		switch ($this->trade_password_format) {
			case 'md5':
				$pwd=md5($password.config('encrystr'));
			default:
				$this->trade_password_format='md5';
				$pwd=md5($password.config('encrystr'));
				break;
				
		}  
		$data = [
			'userid'=>$this->userid,
			'trade_password' => $pwd,
			'trade_password_format'=>'md5'
			];
		return self::update($data);
		// $this->trade_password=$pwd; 
		// return $this->save();
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