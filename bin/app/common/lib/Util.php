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
namespace app\common\lib;
 
use think\Request;

class Util{
	static function xml_to_array( $xml )
    {
        $reg = "/<(\\w+)[^>]*?>([\\x00-\\xFF]*?)<\\/\\1>/";
        if(preg_match_all($reg, $xml, $matches))
        {
            $count = count($matches[0]);
            $arr = array();
            for($i = 0; $i < $count; $i++)
            {
                $key = $matches[1][$i];
                $val = Util::xml_to_array( $matches[2][$i] );  // 递归
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
    
	static function message($msg,$is_success,$data=[]){
		$arr=array(
				'msg'=> $msg,
				'success'=> $is_success
			);
		return json(array_merge($arr,$data));
	}

	static function root(){
		return str_replace('\\','/',realpath(dirname(__FILE__).'/../'));
	}

	static function strToArray($b,$t){
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

	static function xmlToArray($xml){  
    //考虑到xml文档中可能会包含<![CDATA[]]>标签，第三个参数设置为LIBXML_NOCDATA  
	    if (file_exists($xml)) {  
	        libxml_disable_entity_loader(false);  
	        $xml_string = simplexml_load_file($xml,'SimpleXMLElement', LIBXML_NOCDATA);  
	    }else{  
	        libxml_disable_entity_loader(true);  
	        $xml_string = simplexml_load_string($xml,'SimpleXMLElement', LIBXML_NOCDATA);  
	    }  
	    $result = json_decode(json_encode($xml_string),true);  
	    return $result;  
	} 
	
	static function arrayToXml($arr,$dom=null,$node=null,$root='xml',$cdata=false){  
	    if (!$dom){  
	        $dom = new DOMDocument('1.0','utf-8');  
	    }  
	    if(!$node){  
	        $node = $dom->createElement($root);  
	        $dom->appendChild($node);  
	    }  
	    foreach ($arr as $key=>$value){  
	        $child_node = $dom->createElement(is_string($key) ? $key : 'node');  
	        $node->appendChild($child_node);  
	        if (!is_array($value)){  
	            if (!$cdata) {  
	                $data = $dom->createTextNode($value);  
	            }else{  
	                $data = $dom->createCDATASection($value);  
	            }  
	            $child_node->appendChild($data);  
	        }else {  
	            arrayToXml($value,$dom,$child_node,$root,$cdata);  
	        }  
	    }  
	    return $dom->saveXML();  
	} 

	static function getip(){
		return request()->ip();
	}

	static function getdate(){
		return date("Y-m-d H:i:s");
	}

	static function str_rand($length = 32, $char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
		if(!is_int($length) || $length < 0) {
		 return false;
		}
		$string = '';
		for($i = $length; $i > 0; $i--) {
		 $string .= $char[mt_rand(0, strlen($char) - 1)];
		} 
		return $string; 
 	}

 	static function gourl($url,$paras){
		$url=url($url).'?'.$paras;
		header("Location:$url");
		return;
	}

	static function url(){
		return $_SERVER["REQUEST_SCHEME"].'://'.$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
	}

	static function check_wap(){
	  // 先检查是否为wap代理，准确度高
		 if(strpos(strtoupper($_SERVER['HTTP_ACCEPT']),"VND.WAP.WML") > 0){
	    return true;
	  }
	  //检查USER_AGENT
	  elseif(preg_match('/(blackberry|configuration\/cldc|hp |hp-|htc |htc_|htc-|iemobile|kindle|midp|mmp|motorola|mobile|nokia|opera mini|opera |Googlebot-Mobile|YahooSeeker\/M1A1-R2D2|android|iphone|ipod|mobi|palm|palmos|pocket|portalmmm|ppc;|smartphone|sonyericsson|sqh|spv|symbian|treo|up.browser|up.link|vodafone|windows ce|xda |xda_)/i', $_SERVER['HTTP_USER_AGENT'])){
	    return true;       
	  }
	  else{
	    return false;  
	  }
	}


//$arr->传入数组   $key->判断的key值
	 static function array_unset_tt($arr,$key){   
	        //建立一个目标数组
	        $res = array();      
	        foreach ($arr as $value) { 
	              
	           if(isset($res[$value[$key]])){
	                 unset($value[$key]);
	           }
	           else{
	                $res[$value[$key]] = $value;
	           }  
	        }
	        return $res;
	}
}