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
    	foreach ($funs as $key => $value) {
    		if(!Rolefunction::where("roleid=$roleid and funid='$value'")->find()){
	    		$ad=new Rolefunction();
	    		$ad->roleid=$roleid;
	    		$ad->funid=$value;
	    		$ad->appid=App::appid();
	    		if($ad->save()){
	    			$count++;
	    		}
	    	}
    	}
    	return $count;
    }
}