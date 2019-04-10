<?
namespace app\data\membership;

use think\Db;
use app\data\Model; 

class Managers extends Model { 

	protected $pk="userid";  
	protected $autoWriteTimestamp = 'int';
	protected $updateTime = 'update_time';
	protected $createTime = 'create_time';

	public function user()
    { 
        return $this->hasOne('Users','userid','userid');
    }

    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
    	if (!isset($where['appid']) || is_null($where['appid'])) {
            $where['Users.appid']=appid();
        } 

    	$result = Db::view('Managers',$field)
			->view('Users','username,is_approved,is_locked,createdate,funrole,email,last_login_date,is_admin','Users.userid=Managers.userid') 
			->order($order)
			->where($where)
			->withAttr('last_login_date', function($value, $data) {
				return date("Y-m-d H:i:s" ,$value);
			}) 
			->withAttr('createdate', function($value, $data) {
				return date("Y-m-d H:i:s" ,$value);
			}) 
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

	public function create_manager($data = [], $where = [], $sequence = NULL){
		//先写入用户表
		$user=new Users;
		$user->username=$this->username;
		$user->password=$this->password;
		$user->is_plat=isset($this->is_plat)?$this->is_plat:false;
		$user->appid=appid();
		$user->is_admin=isset($this->is_admin)?$this->is_admin:false;
		$user->is_approved=$this->is_approved; 
		$result=$user->save();

		if($result->success){
			$this->userid=$user->userid;
			$this->appid=appid();
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