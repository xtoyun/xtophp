<?
namespace data\model;

use data\Model;
use data\membership\Managers as ManagersModel;
use data\membership\Users;

class SysHooks extends Model{  
	protected $pk="id"; 

	public function user()
    { 
        return $this->hasOne('AddonsModel','name','name');
    } 
}