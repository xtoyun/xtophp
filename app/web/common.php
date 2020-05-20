<?php
use app\data\lib\XML2Array;

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