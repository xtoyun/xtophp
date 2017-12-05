<?
namespace xto\data\dao;

use xto\data\IDao;
use xto\data\Sql;
use think\Db;

class ModuleDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_module','mid'); 
	} 

	public function getmodules(){
		$map['status']=1;
		return Sql::select('xto_module',$map); 
	}

	public function getmodule($addons){
		$map['addons']=$addons;
		return Sql::select('xto_module',$map); 
	}

	public function getaddons(){ 
		$mods=[];
		foreach ($this->getmodules() as $key => $value) {
			$mods=[$value['addons']];
		}
		$map['module']    =   ['IN', $mods];
		return Sql::select('xto_addons',$map); 
	}
}