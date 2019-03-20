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
        if($type==-1){
            return json(array_merge($arr,['code'=>$code],$data));
        }else{
            return (object)array_merge($arr,['code'=>$code],$data);
        }
		
	}
} 
if (!function_exists('fdate')) {
    function fdate(){
        return date("Y-m-d H:i:s");
    }
}

if (!function_exists('appid')) {
    function appid(){
        return App::appid();
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

if (!function_exists('rand')) {
    function rand($length = 32, $char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
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

function uheader($url,$type='GET',$header=[]){
    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => $type,
      CURLOPT_POSTFIELDS => "",
      CURLOPT_HTTPHEADER => $header,
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
      echo "cURL Error #:" . $err;
    } else {
      return $response;
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
