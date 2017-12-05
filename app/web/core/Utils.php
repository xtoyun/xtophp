<?php
namespace app\web\core;

use xto\core\XML2Array;

class Utils{

	static function get_home_themes(){
		$thems=[];
		$dir=config('home_theme_path');
        if($handle=opendir($dir)){  
            while($file=readdir($handle)){ 
            	if($file=='.'||$file=='..') continue; 
            	$xml=$dir.$file.DS.'template.xml'; 
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

    static function find_home_theme($name){
        $themes=Utils::get_home_themes();
        if(isset($themes[$name])){
            return $themes[$name];
        }
        return null;
    }

    static function getfiles($dir){
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