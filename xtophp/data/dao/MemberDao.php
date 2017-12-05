<?
namespace xto\data\dao;

use xto\data\IDao;
use think\Db;
use xto\membership\context\Users;
use xto\membership\core\UserCreateStatus;
use xto\data\dao\PointDao;

class MemberDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_members','userid'); 
	} 

	public function selectpage($pagesize){
		$result = Db::view('xto_members','*')
			->view('xto_users','*','xto_users.userid=xto_members.userid')
			->view('xto_roles',['name as rolename'],'xto_roles.roleid=xto_users.funrole','LEFT')
			->order($this->order)
			->where($this->map)
			->whereor($this->map_or)
		    ->paginate($pagesize);
		return $result;
	}

	public function save($data){
		return Users::createUser($data);
	}

	public function update($data){
		return Users::updateUser($data);
	} 

	public function delete($id){
		return Users::deleteUser($data);
	}

	public function saveorupdate($data){
		if(isset($data['userid'])){
			return Users::updateUser($data);
		}else{
			$result= Users::createUser($data);
			if($result==UserCreateStatus::Created){
				return true;
			}
		}
		return false;
	}

	public function getfuns($roleid){
		return RoleHelper::getRoleFunctions($roleid);
	}

	public function getrole($roleid){
		return RoleHelper::getrole($roleid);
	}

	public function getroles($pagezie){
		return Db::view('xto_roles','roleid,name') 
			->where($this->map)
			->whereor($this->map_or)
			->order($this->order)
			->paginate($pagezie);
	}

	public function getmember($userid,$username='',$cache=false){
		return Users::getUser($userid,$username,$cache);
	}

	static function getdbmember($userid){
		return Db::view('xto_members','*')
			->view('xto_users',['username','email','createdate','is_approved'],'xto_users.userid=xto_members.userid')
			->where('xto_users.userid', $userid)
			->find(); 
	}

	public function changeLoginPassword($userid,$password){
		return UserHelper::changeLoginPassword($userid,$password);
	}

	public function deleteUserRoles($userid){
		return UserHelper::deleteUserRoles($userid);
	}

	public function addUserToRole($userid,$roleid){
		return RoleHelper::addUserToRole($userid,$roleid);
	}

	public function createRole($role){
		return RoleHelper::createRole($role);
	}

	public function clearUserCache($user){
		return Users::clearUserCache($user);;
	}

	public function createPoints($user,$income=0,$expenses=0,$remark){
		return PointDao::instance()->create($user,$income,$expenses,$remark);
	}
}