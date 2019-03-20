<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class Article extends Model {
	protected $pk='arid';  
    protected $autoWriteTimestamp = 'datetime';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';
	
    //文章内容
	public function content()
    {  
        return $this->belongsTo('Content','cid','cid');
    } 

    //文章类别
    public function cate()
    {  
        return $this->belongsTo('ArticleCategory','cateid','cateid');
    } 

    //直接获取所有数据信息,便于读取
    static function getinfo($id){
        $result=self::find($id);
        return array_merge($result->toArray(),($result->content)?$result->content->toArray():[]);
    }

    //重写save方法
    //内容直接读取$_POST方法
    public function save($data = [], $where = [], $sequence = NULL){
        //重写内容
        $data['update_time']=date("Y-m-d H:i:s");
        $content=new Content();
        if (!empty($this->cid)) {
            $content=$this->content;
        }
        //创建成功后，保存cid
        if($content->allowField(true)->save($data)){
            $data['cid']=$content->cid;
        }
        
        return parent::save($data,$where,$sequence);
    }

    //用来分页查询数据源
    static function selectpage($pagesize,$where=null,$order=null,$field='*'){
        $result = Db::view('Article',$field)
            ->view('Content','*','Article.cid=Content.cid') 
            ->view('ArticleCategory','*','ArticleCategory.cateid=Article.cateid') 
            ->order($order)
            ->where($where) 
            ->paginate($pagesize);
        return $result;
    }
}