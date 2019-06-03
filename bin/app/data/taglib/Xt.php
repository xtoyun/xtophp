<?php
namespace app\data\taglib;

use think\template\TagLib;
use think\Db;

class Xt extends TagLib{
    /**
     * 定义标签列表
     */
    protected $tags   =  [
        // 标签定义： attr 属性列表 close 是否闭合（0 或者1 默认1） alias 标签别名 level 嵌套层次
        'select'        => ['attr' => 'module,model,where,order,limit,id,name', 'close' => 1],
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
}