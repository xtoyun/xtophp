<?
namespace app\plugins\oss;

use xto\plugins\OSSSender;
use think\facade\App;


class locoss extends OSSSender{
	protected $folder='/uploads/oss/'.appid().'/'; 

	public function __construct(){
		parent::__construct();
		
	}

	public function save($file){
		$arr=array('msg'=>'上传失败','success'=>false);
		$info = $file->move(App::getRootPath() . $this->folder);  
		if ($info) {
			$arr = array(
			    'msg' 		=> '上传成功',
			    'success' 	=> true,
			    'path' 		=> $this->folder .$info->getSaveName()
			);             
		}
		return $arr;
	}

	public function configShortDescription(){
		return "locoss";
	}

	public function configDescription(){
		return "本地存储";
	}

	public function configLogo(){
		return "/config/plugins/oss/alioss.png";
	}

	public function configFolder(){
		return $this->folder;
	}  
}