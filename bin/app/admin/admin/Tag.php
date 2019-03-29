<?
namespace app\admin\admin;

use xto\membership\context\Context;
use think\Url;
use think\Request;

class Tag{

	public function getManager(){
		return Context::current()->manager;
	}

	public function getlogout_url(){
		return Url::build('index/logout','');
	}

	public function getPage(){ 
		return Request::instance();
	}

	public function getConfig(){
		return \com\service\ConfigService::getConfig();
	}

	public function __construct(){

	}

	public function __get($name)              // 这里$name是属性名
    { 
    	if(isset($name)){
	        $getter = 'get' . $name;              // getter函数的函数名
	        if (method_exists($this, $getter)) {
	            return $this->$getter();          // 调用了getter函数
	        } else {
	        	if(isset($this->$name)){
		            return $this->$name; 
		        }
	        } 
	    }
    }

    public function __set($name, $value)
    {
        $setter = 'set' . $name;             // setter函数的函数名
        if (method_exists($this, $setter)) {
            $this->$setter($value);          // 调用setter函数
        } else {
            $this->$name = $value; 
        }
    } 
}