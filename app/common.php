<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------
use app\data\App;
use app\data\lib\XML2Array;
use think\facade\Session;
use think\facade\SysHook;
use data\membership\SysUsers;

/**
 * 获取插件类的类名
 * @param strng $name 插件名
 * @param string $ext 扩展名
 */
function get_addon_class($name)
{
    // 初始化命名空间及类名
    $class = "addons\\{$name}\\" . ucfirst($name).'Addons';
    return $class;
}

function has_addon($name)
{
    // 初始化命名空间及类名
    $class = "addons\\{$name}\\" . ucfirst($name).'Addons';
    if (class_exists($class)) {
      return true;
    }
    return false;
}

function get_addon_config($name)
{
    // 初始化命名空间及类名
    $class = "addons\\{$name}\\" . 'Config';
    return $class;
}

function hook($hook, $params = [])
{
    $result = Hook::listen($hook, $params);
    if (is_array($result)) {
        foreach ($result as &$item) {
            if ($item instanceof \think\response\View) {
                $item = $item->getContent();
            }
        }
        $result = join(PHP_EOL, $result);
    }
    echo $result;
}

function __URL($url, $param = '')
{
  $url = url($url);
  if (empty($url)) {
    return __URL__;
  } else {
    $str = substr($url, 0, 1);
    if ($str === '/' || $str === "\\") {
      $url = substr($url, 1, strlen($url));
    }
    $action_array = explode('?', $url);
    // 检测是否是pathinfo模式
    $url_model = true;
    
    if ($url_model) {
      $base_url = '/' . $action_array[0];
      $tag = '?';
    } else {
      $base_url = '?s=/' . $action_array[0];
      $tag = '&';
    }
    if (!empty($action_array[1])) {
      // 有参数
      return $base_url . $tag . $action_array[1];
    } else {
      if (!empty($param)) {
        return $base_url . $tag . $param;
      } else {
        return $base_url;
      }
    }
  }
}

function api($method, $params = [])
{
  if (empty($method)) return AjaxReturn('', '参数错误');
  $data = get_api_data($method, $params);
  try {
    $res = json_decode($data, true);
    return $res;
  } catch (Exception $e) {
    //var_dump($method, $data);
  }
}

function AjaxReturn($err_code,$data = [], $message = "")
{
  $rs = [
    'code' => $err_code,
    'message' => $message
  ];
  if (!empty($data))
    $rs['data'] = $data;
  return $rs;
}

function get_api_data($method, $params)
{
  $method_array = explode('.', $method);

  $token = session("access_token");//传递token

  $params['token'] = $token;
  $controler=ucfirst($method_array[1]);
  if ($method_array[0] == 'com') {

    $class_name = 'app\\api\\home\\' . $controler;
    if (!class_exists($class_name)) {
      return AjaxReturn(-1);
    }
    $api_model = new $class_name($params);
  } else { 
    $class_name = "addons\\{$method_array[0]}\\api\\" . $controler;
 
    if (!class_exists($class_name)) {
      return AjaxReturn(-1);
    }
    $api_model = new $class_name($params);
  }
  $function = $method_array[2];
  $data = $api_model->$function($params);
  return $data;
}

if (!function_exists('strToArray')) {
function strToArray($b,$t){
    $a=explode($b,$t);
    $n=[];
    foreach ($a as $key => $value) {
      $item=explode(':',$value);
      if(count($item)==2){
        $n[$item[0]]=$item[1];
      } 
    } 
    return $n;
  }
}

if (!function_exists('del_file_dir')) {
    function del_file_dir($dir) {
       $dh = opendir($dir);
       while ($file = readdir($dh)) {
          if ($file != "." && $file != "..") {

             $fullpath = $dir . "/" . $file;
             if (is_dir($fullpath)) {
                del_file_dir($fullpath);
             } else {
                unlink($fullpath);
             }
          }
       }
       closedir($dh);
    } 
}

// 应用公共文件
if (!function_exists('message')) {

    /**
     * 将字节转换为可读文本
     * @param int $size 大小
     * @param string $delimiter 分隔符
     * @return string
     */
function message($msg,$is_success,$code=10,$type=-1,$data=[]){
		$arr=array(
				'msg'=> $msg,
				'success'=> $is_success
			); 
    if($is_success){
      $code=200;
    }
        if($type==-1){
            return json(array_merge($arr,['code'=>$code],$data));
        }else{
            return (object)array_merge($arr,['code'=>$code],$data);
        }
		
	}
} 
if (!function_exists('fdate')) {
    function fdate(){
        return time();
    }
}

if (!function_exists('appid')) {
    function appid(){
        //后台读取登录信息
        if (BIND=='admin') {
          $userid=Session::get('userid');
          $auth=SysUsers::getuser($userid);
          if ($auth) { 
            return $auth->appid;
          } 
        }
        return config('app.web.appid');
    }
}
if (!function_exists('gourl')) {
   function gourl($url,$paras){
        $url=url($url).'?'.$paras;
        header("Location:$url");
        return;
    } 
}

if (!function_exists('getip')) {
    function getip(){
        return request()->ip();
    }
}

if (!function_exists('str_rand')) {
    function str_rand($length = 32, $char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
        if(!is_int($length) || $length < 0) {
         return false;
        }
        $string = '';
        for($i = $length; $i > 0; $i--) {
         $string .= $char[mt_rand(0, strlen($char) - 1)];
        } 
        return $string; 
    }
}

function httpCore($url, $data = '', $method = 'GET'){
    try {
    $curl = curl_init(); // 启动一个CURL会话
    curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 对认证证书来源的检查
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
    curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
    curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
    if ($method == 'POST') {
      curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
      if ($data != '') {
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
      }
    }
    curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
    curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
    $tmpInfo = curl_exec($curl); // 执行操作
    curl_close($curl); // 关闭CURL会话
    return json_decode($tmpInfo, true); // 返回数据
  } catch (Exception $e) {
  } 
 }

 if (!function_exists('get_home_themes')) {
    function get_home_themes(){
        $thems=[];
        $dir=config('home_theme_path');
 
        if($handle=opendir($dir)){  
            while($file=readdir($handle)){ 
                if($file=='.'||$file=='..') continue; 
                $xml=$dir.$file.'/template.xml'; 
                if(file_exists($xml)){
                    $c=file_get_contents($xml);
                    $thems[$file]=XML2Array::createArray($c);
                }
            }  
        }  
        if(!empty($handle)){
            closedir($handle);  
        } 
        return $thems; 
    }
} 

if (!function_exists('get_home_themes')) {
    function get_home_themes(){
        $thems=[];
        $dir=config('home_theme_path');
        if($handle=opendir($dir)){  
            while($file=readdir($handle)){ 
                if($file=='.'||$file=='..') continue; 
                $xml=$dir.$file.'/template.xml'; 
                if(file_exists($xml)){
                    $c=file_get_contents($xml);
                    $thems[$file]=XML2Array::createArray($c);
                }
            }  
        }  
        if(!empty($handle)){
            closedir($handle);  
        } 
        return $thems; 
    }
} 

if (!function_exists('find_home_theme')) {
    function find_home_theme($name){
        $themes=get_home_themes();
        if(isset($themes[$name])){
            return $themes[$name];
        }
        return null;
    }
} 

if (!function_exists('getfiles')) {
    function getfiles($dir){
        $result=[];
        if(is_dir($dir) && $handle=opendir($dir)){  
            while($file=readdir($handle)){  
                if($file=='.'||$file=='..') continue; 
                $result[]=[
                    'template'=>$file
                ];
            }
        }
        return $result;
    }
}
if (!function_exists('uuid')) {
    function uuid() {
      mt_srand ( ( double ) microtime () * 10000 ); //optional for php 4.2.0 and up.随便数播种，4.2.0以后不需要了。
          $charid = strtoupper ( md5 ( uniqid ( rand (), true ) ) ); //根据当前时间（微秒计）生成唯一id.
          $hyphen = chr ( 45 ); // "-"
          $uuid = '' . //chr(123)// "{"
  substr ( $charid, 0, 8 ) . $hyphen . substr ( $charid, 8, 4 ) . $hyphen . substr ( $charid, 12, 4 ) . $hyphen . substr ( $charid, 16, 4 ) . $hyphen . substr ( $charid, 20, 12 );
          //.chr(125);// "}"
          return strtolower($uuid); 
    }
}

if (!function_exists('xml_to_array')) {
function xml_to_array( $xml )
    {
        $reg = "/<(\\w+)[^>]*?>([\\x00-\\xFF]*?)<\\/\\1>/";
        if(preg_match_all($reg, $xml, $matches))
        {
            $count = count($matches[0]);
            $arr = array();
            for($i = 0; $i < $count; $i++)
            {
                $key = $matches[1][$i];
                $val = xml_to_array( $matches[2][$i] );  // 递归
                if(array_key_exists($key, $arr))
                {
                    if(is_array($arr[$key]))
                    {
                        if(!array_key_exists(0,$arr[$key])) 
                        {
                            $arr[$key] = array($arr[$key]);
                        }
                    }else{
                        $arr[$key] = array($arr[$key]);
                    }
                    $arr[$key][] = $val;
                }else{
                    $arr[$key] = $val;
                }
            }
            return $arr;
        }else{
            return $xml;
        }
    }
  }

if (!function_exists('http')) {
  function http($url, $params, $method = 'GET', $header = array(), $multi = false)
    { 
        $opts = [
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false,
            CURLOPT_HTTPHEADER     => $header
        ];
        /* 根据请求类型设置特定参数 */
        switch(strtoupper($method)){
            case 'GET':
                $opts[CURLOPT_URL] = $url . '?' . http_build_query($params);
                $opts[CURLOPT_USERAGENT]='Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36';
            break;
            case 'POST':
                //判断是否传输文件
                $params = $multi ? $params : http_build_query($params);
                $opts[CURLOPT_URL] = $url;
                $opts[CURLOPT_POST] = 1;
                $opts[CURLOPT_POSTFIELDS] = $params;
            break;
            default:
                throw new Exception('不支持的请求方式！');
        }
        /* 初始化并执行curl请求 */
          
        $ch = curl_init();
        curl_setopt_array($ch, $opts);
        $data = curl_exec($ch);
        $error = curl_error($ch);
        curl_close($ch);
        if($error) throw new Exception('请求发生错误：' . $error);
        return $data;
    }
  }

/**
 * 处理插件钩子
 * @param string $hook 钩子名称
 * @param mixed $params 传入参数
 * @return void
 */
// function hook($hook, $params = [])
// {
//     $result = \think\facade\Hook::listen($hook, $params);
//     if (is_array($result)) {
//         foreach ($result as &$item) {
//             if ($item instanceof \think\response\View) {
//                 $item = $item->getContent();
//             }
//             dump($item);
//             die;
//         }
//         $result = join(PHP_EOL, $result);
//     }
//     return $result;
// }

// function hook($hook, $params = [], $extra = null, $once = false)
// {
//   return \think\facade\Hook::listen($hook, $params, $extra, $once);
// }