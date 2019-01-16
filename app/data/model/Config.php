<?
namespace app\data\model;

use app\data\Model;
use think\facade\Cache;

class Config extends Model {  
	protected $pk="name";
	private static $cache_name='DataCache-ConfigLookuptable';

	static function find_value($name){ 
		$result=parent::find($name);
		if($result){
			return parent::find($name)->value; 
		}
		return null;
	}

	static function configs($iscache=true){
		if ($iscache) {
			$c=Cache::get(self::$cache_name);
			if ($c) {
				return $c;
			} 
		}
		$result=self::where(null)->column('value','name');
		Cache::set(self::$cache_name,$result,3600);
		return $result;
	}

	
}