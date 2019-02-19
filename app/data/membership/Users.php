<?
namespace app\data\membership;

use app\data\App;
use app\data\Model;
use app\data\lib\HashTable;

use think\Db;
use think\facade\Cache;
use think\facade\Session;
use app\api\facade\Factory;

class Users extends Model { 

	protected $pk="userid"; 
	// 模型初始化
    protected static function init()
    {
        self::beforeInsert(function ($user) {
            if (empty($user->username)) {
                return false;
            }
        });
    }

    static function getauth(){
    	$class = Factory::getInstance(config('api')['auth_class']);
		$baseAuth = Factory::getInstance(\app\api\auth\BaseAuth::class);
		 
		if (!empty($baseAuth)) {

		 	$result=$baseAuth->getuser($class);  
			if ($result) {
				return (object)$baseAuth->getuser($class);
			}
		}
		return false;
    } 

	public function member()
    {
        return $this->belongsTo('Members','userid','userid');
    }

    public function manager()
    {
        return $this->belongsTo('Managers','userid','userid'); 
    }

    public function usersinroles()
    {
        return $this->hasMany('Usersinroles','userid','userid'); 
    }

    public function functions(){
    	$result = Db::view('Usersinroles','*')
			->view('Rolefunction','*','Usersinroles.roleid=Rolefunction.roleid') 
			->where([
				'userid'=>$this->userid
			])
			->select();
		return $result;
    }

    public function addRoles($roles=[]){
    	$count=0;
    	$userid=$this->userid;
    	foreach ($roles as $key => $value) {
    		if(!Usersinroles::where("userid=$userid and roleid=$value")->find()){
	    		$ad=new Usersinroles();
	    		$ad->userid=$userid;
	    		$ad->roleid=$value;
	    		$ad->appid=App::appid();
	    		if($ad->save()){
	    			$count++;
	    		}
	    	}
    	}
    	return $count;
    }

    public function validateUser($password){
    	$result=message('登录失败',false,-10,1);
		if(!$this->is_approved){
			return message('会员未审核',false,-20,1);
		}else{
			if($this->is_locked){
				return message('会员被锁定',false,-30,1);
			}else{
				switch ($this->password_format) {
					case 'md5':
						$newpwd=md5($password.$this->salt.config('encrystr'));
						break;
					default:
						$newpwd=md5($password.$this->salt.config('encrystr'));
						break;
				}  
		    	if($newpwd==$this->password){
		    		return message('登录成功',true,1,1);
		    	}
			}
		} 
		return message('登录失败',false,-1,1);
	} 

	public function deleteUser(){
		if ($this->manager) {
			$this->manager->delete();
		}
		if ($this->member) {
			$this->member->delete(); 
		}
		foreach ($this->usersinroles as $key => $value) {
			$value->delete();
		}

		return $this->delete(); 
	}

	public function createuser($data=null){
		if(empty($this->username)){
			return message('用户不能为空',false,-10,1);
		}
		if(empty($this->password)){
			return message('密码不能为空',false,-20,1);
		}
		if(!empty($this->where(['username'=>$this->username])->find())){
			return message('用户名重复',false,-30,1);
		}
		$this->salt=uniqid();
		$this->createdate=getdate();
		$this->wallets=0;
		$this->points=0;
		$this->is_locked=0;
		$this->password_format=empty($this->password_format)?'md5':$this->password_format;
		
		if(!empty($this->password_format)){
			switch ($this->password_format) {
				case 'md5':
					$pwd=md5($this->password.$this->salt.config('encrystr'));
				default:
					$pwd=md5($this->password.$this->salt.config('encrystr'));
					
			} 
		} 
		$this->password=$pwd;
		if($this->save($data)){
			//加入角色
			if(!empty($this->userrole)){
				$userinrole=new Usersinroles;
				$userinrole->userid=$this->userid;
				$userinrole->roleid=$this->userrole;
				$userinrole->save();
			}
			
			return message('添加成功',true,1,1);
		}
		return message('未知错误',false,0,1);
	}

    public function changeLoginPassword($password){
    	$newpwd=md5($password.$this->salt.config('encrystr'));
    	$data = ['userid'=>$this->userid,
				 'password' => $newpwd];
		return self::update($data);
	}

	static function getuser($userid,$username='',$mobilein='',$iscache=true){
		$appid=appid();//全局appid
		$result=null;//返回结果
		$hashtable = Users::userCache(); //读取hasttable和数组功能一样，只是键值的关系，便于管理和性能
		$key = Users::UserKey($username."_".$appid);//读取会员名的缓存key
		 
		if($userid>0){
			$key = Users::UserKey($userid."_".$appid);//如果用户名为空，则以userid缓存key
		}
		//是否读取缓存用户
		if ($iscache) { 
			$result = $hashtable->find($key); //查找hasttable
			if (!empty($result)) {  
				return $result;//直接返回结果
			}
		}

		if($userid>0){
			$result=Users::where(['userid'=>$userid])->find();
		}
		if(!empty($username)){
			$result=Users::where(['username'=>$username])->find();
		}
		if(!empty($mobilein)){
			$result=Users::where(['mobilein'=>$mobilein])->find();
		}
		if(!is_null($result)){
			//读取会员或管理员的扩展信息
			if($iscache){
				$hashtable->remove(Users::UserKey($result->userid."_".$appid));
				$hashtable->remove(Users::UserKey($result->username."_".$appid));
				//写入缓存
				$hashtable->insert(Users::UserKey($result->userid."_".$appid),$result); 
				$hashtable->insert(Users::UserKey($result->username."_".$appid),$result);  
				Cache::set('DataCache-UserLookuptable',$hashtable,3600);
			}   
		} 
		return $result;
	}

	private static function userKey($key){
		return "user-".$key;
	}

	private static function userCache(){ 
		$c=Cache::get('DataCache-UserLookuptable'); 
		if (empty($c)) { 
			$c=new HashTable();
			Cache::set('DataCache-UserLookuptable',$c,3600);
		} 
		return $c;
	} 

	public function clearCache(){
		$appid=appid();
		$c=Users::userCache();
		$c->remove(Users::userkey($this->userid."_".$appid)); 
		$c->remove(Users::userkey($this->username."_".$appid));
		Cache::set('DataCache-UserLookuptable',$c,3600);//写入缓存
	}
}