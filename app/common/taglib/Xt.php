<?php
namespace app\common\taglib;

use think\template\TagLib;
use think\Db;

class Xt extends TagLib{
    /**
     * 定义标签列表
     */
    protected $tags   =  [
        // 标签定义： attr 属性列表 close 是否闭合（0 或者1 默认1） alias 标签别名 level 嵌套层次
        'select'        => ['attr' => 'module,model,where,order,limit,id,name', 'close' => 1],
        'apiselect'     => ['attr' => 'module,model,where,order,limit,id,name', 'close' => 1],
        'find'          => ['attr' => 'module,model,id,value', 'close' => 1],
    ];  
     
    /**
     * 这是一个非闭合标签的简单演示
     */
    public function tagSelect($tag, $content)
    {  
        $model    =!isset($tag['model'])?null:$tag['model']; 
        $module    =isset($tag['module'])?$tag['module']:config('default_module'); 
        $where  =!isset($tag['where'])?null:$tag['where']; 
        $order  =!isset($tag['order'])?null:$tag['order']; 
        $limit  =!isset($tag['limit'])?10:$tag['limit'];   
        $name  =!isset($tag['name'])?'__LIST__':$tag['name'];       

        $id = $tag['id']; // name是必填项，这里不做判断了
        $parse = '<?php ';
        $parse .= '$'."$name"."=\app\\$module\model\\$model::selectpage($limit,\"$where\",\"$order\");"; //
        $parse .= '$'.$id.'_pager=str_replace("?page", $_SERVER["REQUEST_URI"]."&page",$'.$name.'->render());'; // 这里是模拟数据
        $parse .= ' ?>';
        $parse .= '{volist name="'.$name.'" id="' . $id . '"}';
        $parse .= $content;
        $parse .= '{/volist}';                      
        return $parse; 
    }  

    public function tagFind($tag, $content)
    { 
        $model    =!isset($tag['model'])?null:$tag['model']; 
        $module    =isset($tag['module'])?$tag['module']:config('default_module'); 
        $where  =!isset($tag['where'])?null:$tag['where']; 
        $value = $tag['value'];
        $id = $tag['id']; // name是必填项，这里不做判断了
        $parse = '<?php ';
        $parse .= '$'."$id"."=\app\\$module\model\\$model::find($value);"; // 
 
        $parse .= ' ?>';
        $parse .= $content;
        return $parse;
    } 

    public function tagApiSelect($tag,$content){
        $name  =!isset($tag['name'])?'__LIST__':$tag['name'];  
        $model  =!isset($tag['model'])?'web/article/list':$tag['model'];  
        $limit  =!isset($tag['limit'])?10:$tag['limit'];  
        $id = $tag['id'];

        $http    ="http://api.xtysb.com/".$model; 
        $res=http($http,['limit'=>$limit,'name'=>$name,'appid'=>'123','host'=>'']);//获取数据

        if($res){
            $result=json_decode($res);
        } 
        $id = $tag['id']; // name是必填项，这里不做判断了
        $parse = '<?php ';
        $parse .= '$'."$name"."=json_decode('$res');"; //
        $parse .= '$'."$name".'=json_decode(json_encode($'."$name".'),true);'; //
        $parse .= '$'."$name".'_data'.'=$'."$name".'["data"];'; //
        //$parse .= '$'.$id.'_pager=str_replace("?page", $_SERVER["REQUEST_URI"]."&page",$'.$name.'->render());'; // 这里是模拟数据
        $parse .= ' ?>';
        $parse .= '{volist name="'.$name.'_data" id="' . $id . '"}';
        $parse .= $content;
        $parse .= '{/volist}';                      
        return $parse;  
    }

    
}