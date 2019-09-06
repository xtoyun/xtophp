<?
namespace app\data\model;

use app\data\Model;
use think\facade\Cache;

class Config extends Model {  
	protected $pk="cid";
	private static $cache_name='DataCache-ConfigLookuptable';

	static function find_value($name){ 
		$result=parent::where('name',$name)->find();
		if($result){
			return $result->value; 
		}
		return null;
	}

	static function getconfigs($iscache=true){
		if ($iscache) {
			$c=Cache::get(self::$cache_name.'_'.appid());
			if ($c) {
				return $c;
			} 
		}
		$result=self::where('')->column('value','name');
		Cache::set(self::$cache_name,$result,3600);
		return $result;
	}

	
}