<?
namespace app;

use app\data\model\Apps;

class inithook{
	public function run(){

		 // 获取当前模块名称
          // 获取当前模块名称
        $module='';
        //根据当前地址获取模块名称
        $pathinfo=explode('/',request()->server('REQUEST_URI'));
        
       
        foreach ($pathinfo as $key => $value) { 
            if (!empty($value) && !strpos($value, '.php')) {
                $module=$value;
                break;
            }
        } 

        //如果模块为空，则默认调用配置的模块名称
        if (empty($module)) {
            $module=config('default_module');
        }  
        //绑定是后台
        if(defined('BIND') && BIND == 'admin') { 
            config('url_controller_layer', 'admin');
            config('url_html_suffix','');
            config('template.view_path', APP_PATH. $module. '/view/admin/');
        } 
        else{
            config('url_controller_layer', 'home');
            config('template.view_path', APP_PATH. $module. '/view/home/');
        }  

        $host=$_SERVER['HTTP_HOST'];
        $appinfo=Apps::Overall(false)->where('host',$host)->find();
         //dump($appinfo);
        //die;
        if ($appinfo) {
            if ($appinfo->web_theme) {
                config('app.web.theme',$appinfo->web_theme);
            }
            config('appid',$appinfo->appid); 


        }else{
            if($_SERVER['HTTP_HOST']=='www.xtocn.com'){
              config('app.web.theme','xtocn');
              config('appid',10005); 
            }

            if($_SERVER['HTTP_HOST']=='gy.mlmyun.com'){
              //config('app.web.theme','dev');
              config('appid',10006); 
            }

            if($_SERVER['HTTP_HOST']=='www.xtoyun.net'){
              config('app.web.theme','yun');
              config('appid',10000); 
            } 
        } 
	}
}