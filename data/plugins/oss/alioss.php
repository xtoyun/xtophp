<?
namespace data\plugins\oss;

use data\plugins\core\OSSSender;

use OSS\OssClient;
use OSS\Core\OssException;

class alioss extends OSSSender{
	protected $access_id;
	protected $access_key;
	protected $hostname;
	protected $bucket; 

	public function __construct(){
		parent::__construct();
		
	}

	public function save($data){ 
		$arr = array(
			    'msg' 		=> '上传失败',
			    'success' 	=> false,
			    'path' 		=> ''
			);  
		$ossClient = new OssClient($this->access_id, $this->access_key, $this->hostname,true);
		$info=$data->getInfo(); 
 
		$object = date('Y').'/'.date('m').'/'.date('d').'/'.md5(uniqid(rand())).".".substr(strrchr($info['name'], '.'), 1);//文件名
	    $filePath = $info['tmp_name'];
	    try{
	        $result=$ossClient->uploadFile($this->bucket, $object, $filePath);
	    } catch(OssException $e) {
	        
	    } 
	    if(isset($result['info']['url'])){
			$arr = array(
			    'msg' 		=> '上传成功',
			    'success' 	=> true,
			    'path' 		=> $result['info']['url']
			);  
			return $arr; 
	    } 
	    
		return $arr; 
	}

	public function configShortDescription(){
		return "alioss";
	}

	public function configDescription(){
		return "阿里云OSS云存储";
	}

	public function configLogo(){
		return "/config/plugins/oss/alioss.png";
	}

	public function configAccess_id(){
		return $this->access_id;
	} 

	public function configAccess_key(){
		return $this->access_key;
	}

	public function configHostname(){
		return $this->hostname;
	}

	public function configBucket(){
		return $this->bucket;
	}  
}