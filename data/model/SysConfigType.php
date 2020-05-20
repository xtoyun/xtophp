<?
namespace data\model;

use data\Model;
use think\facade\Cache;

class SysConfigType extends Model {  
	protected $pk="cid";
	private static $cache_name='DataCache-ConfigLookuptable';
}