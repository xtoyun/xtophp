<?
namespace app\data\membership;

use think\Db;
use app\data\Model; 

class Managers extends Model { 

	protected $pk="userid";  
	protected $autoWriteTimestamp = 'datetime';
	protected $updateTime = 'update_time';
	protected $createTime = 'create_time';

	public function user()
    { 
        return $this->hasOne('Users','userid','userid');
    }

    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
    	$result = Db::view('Managers',$field)
			->view('Users','username,is_approved,is_locked,createdate,funrole,email,last_login_date,is_admin','Users.userid=Managers.userid') 
			->order($order)
			->where($where) 
		    ->paginate($pagesize);
		return $result; 
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

	static function getuser($userid,$username='',$iscache=true){
		return Users::getUser($userid,$username,$iscache);
	}

	static function createUser($data){
		return Users::createUser($data);
	}

	static function updateUser($data){
		return Users::updateUser($data);
	}

	static function deleteUser($userid){
		return Users::deleteUser($userid);
	}

	static function changeLoginPassword($userid,$password){
		return UserHelper::changeLoginPassword($userid,$password);
	}

	static function deleteUserRoles($userid){
		return UserHelper::deleteUserRoles($userid);
	}

	static function addUserToRole($userid,$roleid){
		return RoleHelper::addUserToRole($userid,$roleid);
	}

	static function getfuns($roleid){
		return RoleHelper::getRoleFunctions($roleid);
	}

	static function createRole($role){
		return RoleHelper::createRole($role);
	}
}