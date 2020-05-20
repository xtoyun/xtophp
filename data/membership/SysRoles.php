<?
namespace data\membership;
 
use think\Db;
use data\Model; 

class SysRoles extends Model { 

	protected $pk="roleid";   

	public function functions()
    {
        return $this->hasMany('Rolefunction','roleid','roleid');
    } 

    static function addUserToRoles($userid,array $roles){
		$result=false;

		foreach ($roles as $key => $value) {
			$roles=new Usersinroles();
			$data = [
			'appid' 		=> $this->app->appid,
			'roleid'		=> $value,
			'userid'		=> $userid];
			$d=Db::table('xto_usersinroles')
						->insert($data); 
			if($d) $result=true;
		}
		return $result;
	}
}