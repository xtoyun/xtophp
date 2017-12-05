<?
/**
 * ============================================================================
 * * 版权所有 2013-2017 xtoyun.net，并保留所有权利。
 * 网站地址: http://www.xtoyun.net；
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * $Author: xtoyun $ 
*/
namespace xto;

use think\Cache;
use xto\data\dao\LogDao;

class App{
	private static $instance; 
	private $appid=0;
	private $user_auth_name='user_auth_session';
	private $manager_auth_name='manager_auth_session';

	static function instance(){
		if (is_null ( self::$instance ) || isset ( self::$instance )) {
            self::$instance = new static (); 
        }
        return self::$instance;
	} 

    //获取全局编号
	public function getAppid(){
        //云模式启用，可以从session读取id，默认为0
		return $this->appid;
	}

	public function getUser_auth_name(){
		return $this->user_auth_name;
	}

	public function getManager_auth_name(){
		return $this->manager_auth_name;
	}

    public function config_cache_name(){
        return 'DataCache-config_'.$this->appid;
    }

    public function config_clear(){
        Cache::rm($this->config_cache_name());//更新一下缓存
    }

    static function writelog($description){
        $dao=LogDao::instance();
        return $dao->writelog($description);
    }

    static function appid(){
        return App::instance()->appid;
    }

    static function isadmin(){
        $t=App::instance();
        if(!empty(\think\Session::get($t->getManager_auth_name()))){
            return true;
        }else{
            return false;
        }
    }

	public function __get($name)              // 这里$name是属性名
    {
        $getter = 'get' . $name;              // getter函数的函数名
        if (method_exists($this, $getter)) {
            return $this->$getter();          // 调用了getter函数
        } else {
            if(isset($this->$name)){
                return $this->$name; 
            } 
        }
    }

    public function __set($name, $value)
    {
        $setter = 'set' . $name;             // setter函数的函数名
        if (method_exists($this, $setter)) {
            $this->$setter($value);          // 调用setter函数
        } else {
            if(isset($this->$name)){
                $this->$name = $value; 
            } 
        }
    }
}