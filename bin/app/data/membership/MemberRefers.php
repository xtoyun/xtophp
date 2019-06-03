<?
namespace app\data\membership;

use think\Db;
use app\data\Model; 

class MemberRefers extends Model {
	protected $pk="rid"; 
	protected $autoWriteTimestamp = 'int';
	protected $updateTime = 'update_time';
	protected $createTime = 'create_time';

	
} 