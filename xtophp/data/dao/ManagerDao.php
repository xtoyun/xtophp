<?
namespace xto\data\dao;

use xto\data\IDao;
use think\Db;
use xto\membership\context\Users;
use xto\membership\core\UserCreateStatus;
use xto\membership\core\RoleHelper;
use xto\membership\core\UserHelper;

class ManagerDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_managers','userid'); 
	} 

	public function selectpage($pagesize){
		$result = Db::view('xto_managers a','*')
			->view('xto_users b','*','xto_users.userid=xto_managers.userid')
			->view('xto_roles c',['name as rolename'],'xto_roles.roleid=xto_users.funrole','LEFT')
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
		return Users::deleteUser($id);
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

	public function getmanager($userid,$username='',$cache=false){
		return Users::getUser($userid,$username,$cache);
	}

	public function getdbuser($userid){
		$result = Db::view('xto_managers a','*')
			->view('xto_users b','*','b.userid=a.userid')
			->view('xto_roles',['name as rolename'],'xto_roles.roleid=xto_users.funrole','LEFT')
			->where([
				'a.userid'=>$userid
			])
			->find();
		$result['password']='';
		return $result;
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

	public function updateRole($role){
		return RoleHelper::updateRole($role);
	}
}