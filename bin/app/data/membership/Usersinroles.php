<?
namespace app\data\membership;

use think\Db;
use app\data\Model;
use app\data\App;

class Usersinroles extends Model { 

	protected $pk="userid";  

	public function role()
    {
        return $this->hasMany('Roles','roleid','roleid');
    }

    public function addFuns($funs=[]){
    	$count=0;
    	$roleid=$this->roleid;
        Rolefunction::where("roleid=$roleid")->delete();
    	foreach ($funs as $key => $value) { 
    		$ad=new Rolefunction();
    		$ad->roleid=$roleid;
    		$ad->funid=$value;
    		$ad->appid=appid();
    		if($ad->save()){
    			$count++;
    		} 
    	}
    	return $count;
    }
}