<?php
namespace app\common\lib;
use think\template\TagLib;
use think\Db;

class Xto extends TagLib{
    /**
     * 定义标签列表
     */
    protected $tags   =  [
        // 标签定义： attr 属性列表 close 是否闭合（0 或者1 默认1） alias 标签别名 level 嵌套层次
        'select'        => ['attr' => 'dao,where,order,limit,id,name', 'close' => 1],
        'show'          => ['attr' => 'dao,where,order,id,name', 'close' => 1],
        'find'          => ['attr' => 'dao,id,value', 'close' => 1],
        'tag'           => ['attr' => 'dao,id,name,data,show', 'close' => 1],
    ]; 

     public function tagTag($tag, $content){
        $dao    =$tag['dao']; 
        $where  =!isset($tag['where'])?null:$tag['where']; 
        $order  =!isset($tag['order'])?null:$tag['order']; 
        $limit  =!isset($tag['limit'])?10:$tag['limit'];   
        $data  =!isset($tag['data'])?null:$tag['data'];   
        $show  =!isset($tag['show'])?false:$tag['show'];   
        $name  =!isset($tag['name'])?'__LIST__':$tag['name'];   

        $id = $tag['id']; // name是必填项，这里不做判断了
        $parse = '<?php ';
        $parse .= '$dao=' . $dao . '::instance();'; // 
        if(!empty($where)){
            $parse .= '$dao->map="'.$where.'";';
        }   
        if(!empty($order)){
            $parse .= '$dao->order="'.$order.'";';
        }
        if(!empty($data)){
            $parse .= '$'.$name.'=$dao->'.$name.'('.$data.');'; 
        }else{
            $parse .= '$'.$name.'=$dao->'.$name.'();'; 
        }
        
        $parse .= ' ?>';
        if(!$show){
            $parse .= '{volist name="'.$name.'" id="' . $id . '"}';
            $parse .= $content;
            $parse .= '{/volist}';
        }else{
             $parse .= $content;
        }
        
        return $parse;
     }
     
    /**
     * 这是一个非闭合标签的简单演示
     */
    public function tagSelect($tag, $content)
    { 
        $dao    =$tag['dao']; 
        $where  =!isset($tag['where'])?null:$tag['where']; 
        $order  =!isset($tag['order'])?null:$tag['order']; 
        $limit  =!isset($tag['limit'])?10:$tag['limit'];   
        $name  =!isset($tag['name'])?'__LIST__':$tag['name'];      

        $id = $tag['id']; // name是必填项，这里不做判断了
        $parse = '<?php ';
        $parse .= '$dao=' . $dao . '::instance();'; // 
        if(!empty($where)){
            $parse .= '$dao->map="'.$where.'";';
        }    
        if(!empty($order)){
            $parse .= '$dao->order="'.$order.'";';
        }
        $parse .= '$'.$name.'=$dao->selectpage('.$limit.');'; // 这里是模拟数据
        $parse .= '$'.$id.'_pager=str_replace("?page", $_SERVER["REQUEST_URI"]."&page",$'.$name.'->render());'; // 这里是模拟数据
        $parse .= ' ?>';
        $parse .= '{volist name="'.$name.'" id="' . $id . '"}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    } 

    public function tagShow($tag, $content)
    { 
        $dao    =$tag['dao']; 
        $where  =!isset($tag['where'])?null:$tag['where']; 
        $order  =!isset($tag['order'])?null:$tag['order']; 
        $name  =!isset($tag['name'])?'__LIST__':$tag['name'];   
        $id = $tag['id']; // name是必填项，这里不做判断了
        $parse = '<?php ';
        $parse .= '$dao=' . $dao . '::instance();'; // 
        if(!empty($where)){
            $parse .= '$dao->map="'.$where.'";';
        }      
        if(!empty($order)){
            $parse .= '$dao->order="'.$order.'";';
        }    
        $parse .= '$'.$name.'=$dao->select();'; // 这里是模拟数据
        $parse .= ' ?>';
        $parse .= '{volist name="'.$name.'" id="' . $id . '"}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    } 

    public function tagFind($tag, $content)
    { 
        $dao    =$tag['dao']; 
        $value  =!isset($tag['value'])?null:$tag['value'];  
        $id = $tag['id']; // name是必填项，这里不做判断了
        $parse = '<?php ';
        $parse .= '$dao=' . $dao . '::instance();'; //   
        $parse .= '$'.$id.'=$dao->find('.$value.');'; // 这里是模拟数据
        $parse .= ' ?>';
        $parse .= $content;
        return $parse;
    } 
}