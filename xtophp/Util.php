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

use xto\data\service\ConfigService;
use think\Request;

class Util{
	static function message($msg,$is_success){
		$arr=array(
				'msg'=> $msg,
				'success'=> $is_success
			);
		return json($arr);
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

	static function gourl($url,$paras){
		$url=url($url).'?'.$paras;
		header("Location:$url");
		return;
	}

	static function getip(){
		return Request::instance()->ip();
	}

	static function getdate(){
		return date("Y-m-d H:i:s");
	}
}