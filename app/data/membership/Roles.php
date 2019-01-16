<?
namespace app\data\membership;
 
use think\Db;
use app\data\Model; 

class Roles extends Model { 

	protected $pk="roleid";  

	public function functions()
    {
        return $this->hasMany('Rolefunction');
    } 
}