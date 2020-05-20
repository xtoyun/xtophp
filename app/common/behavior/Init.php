<?
namespace app\common\behavior;

use app\data\model\Apps;
use App;
use think\facade\Session; 
use think\facade\Request;
use app\data\membership\Users;
use \think\Loader;
 

class Init{
	public function run(){
        if(defined('BIND') && BIND === 'install') return;

        // 开启系统行为
        define('APP_HOOK', true);

        define('ADDON_DIR', 'addons');

        define('ADDON_PATH', ROOT_PATH . 'addons' . DS);
        define('DATA_PATH', ROOT_PATH . 'data' . DS);
        define('PAGE_SIZE', 20);

        //加载模块命名空间
        Loader::addNamespace('addons', ADDON_PATH);

        //加载数据模块
        Loader::addNamespace('data', DATA_PATH);

        //读取根地址
        $root = Request::instance()->root();
        $root = str_replace('/index.php', '', $root);
        define("__ROOT__", $root);
        if (empty($root)) {
            define('__URL__', Request::instance()->domain());
        } else {
            define('__URL__', Request::instance()->domain() . Request::instance()->root());
        }
        
        

        // //绑定是后台
        // if(defined('BIND') && BIND == 'admin') { 
        //     config('url_controller_layer', 'admin');
        //     config('url_html_suffix',''); 
        //     config('template.view_path', APP_PATH. $module. '/view/admin/');
        // } else if(defined('BIND') && BIND == 'api'){
        //      config('url_controller_layer', 'api');
        // }
        // else{
        //     config('url_controller_layer', 'home');
        //     config('template.view_path', APP_PATH. $module. '/view/home/');
        // }   
        // if($module=='platform' || BIND=='admin'){
        //     $userid=Session::get(config('auth_admin_name')); 
        //     if ($userid) {
        //         $user=Users::getuser($userid);
                 
        //         config('appid',$user->appid);
        //     } 
        // }else if(BIND=='api'){ //接口处理
        //     $host=$_SERVER['HTTP_HOST'];
        //     //外部获取
        //     $params=request()->param();
        //     if($params && isset($params['host'])){
        //         $host=$params['host'];
        //     }
        //     //从数据库匹配站点
        //     $appinfo=Apps::Overall(false)->where('host',$host)->find(); 
        //     if ($appinfo) {
        //         config('appid',$appinfo->appid);
        //     }  
        // }else{
        //     //当前页面主机名称
        //     $host=$_SERVER['HTTP_HOST'];
        //     //从数据库匹配站点
        //     $appinfo=Apps::Overall(false)->where('host',$host)->find(); 
        //     if ($appinfo) {
        //         //本地处理
        //         if ($appinfo->web_theme) {
        //             config('app.web.theme',$appinfo->web_theme);
        //         }
        //         config('appid',$appinfo->appid);
        //     } 
        // }        
	}
}