<?
namespace app\data\membership;

use think\Db;
use app\data\Model; 

class Members extends Model { 

	protected $pk="userid"; 

	public function user()
    { 
        return $this->hasOne('Users','userid','userid');
    }

    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
    	$result = Db::view('Members',$field)
			->view('Users','username,is_approved,is_locked,createdate,funrole,email,last_login_date,is_admin','Users.userid=Members.userid') 
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

	// static function getuser($userid,$username='',$iscache=true){
	// 	return Users::getUser($userid,$username,$iscache);
	// }

	// static function createUser($data){
 
	// 	return Users::createUser($data);
	// }

	// static function updateUser($data){
	// 	return Users::updateUser($data);
	// }

	// static function deleteUser($userid){
	// 	return Users::deleteUser($userid);
	// }

	// static function changeLoginPassword($userid,$password){
	// 	return UserHelper::changeLoginPassword($userid,$password);
	// }

	// static function changeSafePassword($userid,$password){
	// 	return UserHelper::changeSafePassword($userid,$password);
	// }

	// static function deleteUserRoles($userid){
	// 	return UserHelper::deleteUserRoles($userid);
	// }

	// static function addUserToRole($userid,$roleid){
	// 	return RoleHelper::addUserToRole($userid,$roleid);
	// }

	// static function getfuns($roleid){
	// 	return RoleHelper::getRoleFunctions($roleid);
	// }

	// static function createRole($role){
	// 	return RoleHelper::createRole($role);
	// }

	// static function clearUserCache($user){
	// 	return Users::clearUserCache($user);
	// }
}