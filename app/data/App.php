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
namespace app\data;

use think\Cache;
use think\facade\Session;

class App{ 
	private static $appid=0;
	private static $user_auth_name='user_auth_session';
	private static $manager_auth_name='manager_auth_session'; 

	static function user_auth(){
		return self::$user_auth_name;
	}

	static function manager_auth(){
		return self::$manager_auth_name;
	} 

	static function get_manager_username(){
		return Session::get(self::$manager_auth_name);
	} 

    static function appid(){
        return self::$appid;
    }
}