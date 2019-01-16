<?
namespace app\data\model;

use think\Db;
use app\data\App;
use app\data\Model;
use app\data\membership\Users;


class Messages extends Model{ 
	protected $pk="mbid";

 	static function selectpage($pagesize,$where=null,$order=null,$field='*'){
    	$result = Db::view('Messages',$field)
			->view('MessageData','title,content,createdate,remsg','Messages.mid=MessageData.mid') 
			->order($order)
			->where($where) 
		    ->paginate($pagesize);
		return $result; 
	} 

	static function getinfo($id){
		$info=parent::find($id);
		$info= array_merge($info->toArray(),$info->detail->toArray());
 
		return $info;
	}

	public function detail()
    { 
        return $this->hasOne('MessageData','mid','mid');
    }
}