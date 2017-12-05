<?
namespace xto\data\dao;

use xto\App;
use xto\data\IDao;
use xto\data\Sql;
use think\Db;
use think\Cache;

class ConfigDao extends IDao{ 
	public function __construct() {
		parent::__construct('xto_config','name'); 
	} 

	public function save($config){
		$data=[
			'name' 	=> isset($config['name'])?$config['name']:'',
			'value' => isset($config['value'])?$config['value']:'', 
			'type' 	=> isset($config['type'])?$config['type']:'', 
			'appid' => App::appid()
			];
		$map['appid'] 	=App::appid();
		$map['name'] 	=$config['name'];
		Cache::rm(App::instance()->config_cache_name());//清除缓存
		return Sql::saveorupdate('xto_config',$data,$map);
	}

	public function getconfig($name){
		$map['appid'] 	=App::appid();
		$map['name'] 	=$name;
		return Sql::getfield($this->table,$map,'value');
	}

	public function getvalues($type){
		$result=[];
		$map['type'] 	=$type;
		$source=Sql::select($this->table,$map);
		foreach ($source as $key => $value) {
		 	$result[$value['name']]=$value['value'];
		}
		return $result;
	}

	public function getConfigs($iscache=false){
		$n=App::instance()->config_cache_name();
		if($iscache){
			$result=Cache::get($n);
			if (!empty($result)) {
				return $result;
			}
		} 
		$map['appid'] 	=App::appid();
		
		$result=Sql::select($this->table,$map);
		$new=[];
		foreach ($result as $key => $value) {
		 	$new[$value['name']]=$value['value'];
		 } 
		if($iscache){
			Cache::set($n,$new,3600);
		} 
		return $new;
	}
}