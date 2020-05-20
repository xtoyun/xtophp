<?
namespace data\membership;

use think\Db;
use data\Model;

class SysUsersinroles extends Model { 

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
            if($value){
              $ad=new Rolefunction();
                $ad->roleid=$roleid;
                $ad->funid=$value;
                $ad->appid=appid();
                if($ad->save()){
                    $count++;
                }   
            }
    		
    	}
    	return $count;
    }
}