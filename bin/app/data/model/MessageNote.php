<?
namespace app\data\model;

use app\data\Model; 

class MessageNote extends Model{  
	protected $pk="snid";  
    protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time'; 

    public function getCreateTimeAttr($value)
    {  
    	if(is_numeric($value)){
    		return date("Y-m-d H:i:s" ,(int)$value);
    	}else{
    		return $value;
    	}
    }

    public function getUpdateTimeAttr($value)
    {
    	if(is_numeric($value)){
    		return date("Y-m-d H:i:s" ,(int)$value);
    	}else{
    		return $value;
    	}
    } 
}