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

    public function tagApiSelect($tag,$content){
        $http    ="http://api.xtysb.com/web/article/list"; 
        $where  =!isset($tag['where'])?null:$tag['where']; 
        $order  =!isset($tag['order'])?null:$tag['order']; 
        $limit  =!isset($tag['limit'])?10:$tag['limit'];   
        $name  =!isset($tag['name'])?'__LIST__':$tag['name'];   

        $res=$this->http($http,null);

        dump($res);
        die;

        $id = $tag['id']; // name是必填项，这里不做判断了
        $parse = '<?php ';
        $parse .= '$dao=' . $dao . '::instance();'; // 

        $parse .= '$'.$name.'=$dao->selectpage('.$limit.');'; // 这里是模拟数据
        $parse .= '$'.$id.'_pager=str_replace("?page", $_SERVER["REQUEST_URI"]."&page",$'.$name.'->render());'; // 这里是模拟数据
        $parse .= ' ?>';
        $parse .= '{volist name="'.$name.'" id="' . $id . '"}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    private function http($url, $params, $method = 'GET', $header = array(), $multi = false)
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