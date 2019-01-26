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
if (!function_exists('getdate')) {
    function getdate(){
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
