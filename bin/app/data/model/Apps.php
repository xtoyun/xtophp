<?
namespace app\data\model;

use app\data\Model;
use app\data\membership\Managers as ManagersModel;
use app\data\membership\Users;

class Apps extends Model{  
	protected $pk="appid";  
    protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';

    public function delete($id=null){
    	$data=Users::getuser(0,$this->username);
    	if($data){
    		$data->delete();
    		if($data->manager){
    			$data->manager->delete();
    		}
    	}  
		return parent::delete(); 
	}
}