<?php

namespace addons\cms\model;

use data\Model;
use think\Db;


class WebArticle extends Model {
	protected $pk='arid';  
    protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';

    private $_create_time=null;
    public function getCreateTimeAttr($value)
    {
        if(is_numeric($value)){
            $this->_create_time=$value;
            return date("Y-m-d H:i:s" ,(int)$value);
        }else{
            return $value;
        }
    }

    public function getViewTimeAttr($value)
    {
        if(is_numeric($value)){
            return date("Y-m-d" ,(int)$value);
        }else{
            return $value;
        }
    }

    
    public function getUpdateTimeAttr($value)
    {
       if(is_numeric($value)){
            return date("Y-m-d H:i:s" ,(int)$value);
        }else{
            return $value;
        }
    } 
    
    //上一篇文章
    public function pre(){ 
        return $this->where("create_time",'<',$this->_create_time)->find();
    }

    //下一篇文章
    public function next(){
        return $this->where("create_time",'>',$this->_create_time)->find();
    }
	
    //文章内容
	// public function content()
 //    {  
 //        return $this->belongsTo('Content','cid','cid');
 //    } 

    //文章类别
    public function category()
    {  
        return $this->belongsTo('WebArticleCategory','cateid','cateid');
    } 

    //直接获取所有数据信息,便于读取
    // static function getinfo($id){
    //     $result=self::find($id);
    //     return array_merge($result->toArray(),($result->content)?$result->content->toArray():[]);
    // }

    //重写save方法
    //内容直接读取$_POST方法
    // public function save($data = [], $where = [], $sequence = NULL){
    //     //重写内容
    //     $data['update_time']=fdate();
    //     $content=new Content();
    //     if (!empty($this->cid)) {
    //         $content=$this->content;
    //     }
    //     //创建成功后，保存cid
    //     if($content->allowField(true)->save($data)){
    //         $data['cid']=$content->cid;
    //     }
        
    //     return parent::save($data,$where,$sequence);
    // }

    //用来分页查询数据源
    static function selectpage($pagesize,$where=null,$order=null,$field='*'){ 
    
        return parent::alias('WebArticle')->field("WebArticleCategory.catename,WebArticle.*")->where($where)->order($order)
                  //->join('Content','Content.cid=Article.cid')
                  ->join('WebArticleCategory','WebArticleCategory.cateid=WebArticle.cateid')  
                  ->paginate($pagesize); 
    }
}