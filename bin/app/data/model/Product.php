<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class Product extends Model{
	protected $pk="pid"; 
    protected $autoWriteTimestamp = 'datetime';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';

     static function get_counts(){
        return parent::where('')->count();
    }

       //文章内容
       public function content()
       {
        return $this->belongsTo('Content','cid','cid');
       }

       //产品类别
       public function cate()
       {
        return $this->belongsTo('ProductCategory','cateid','cateid');
       }

       //直接获取所有数据信息，便于读取
       public function getinfo($id)
       {
            $result=self::find($id);
            return array_merge($result->toArray(),($result->content)?$result->content->toArray():[]);
       }

       //重写save方法
       //内容直接读取$_POST方法
       public function save($data = [], $where = [], $sequence = NULL){
        //重写内容
        $data['update_time'] = date("Y-m-d H:i:s");
        $content = new WebContent();
        if (!empty($this->cid)) {
            $content = $this->content;
        }
        //创建成功后，保存cid
        if ($content->allowField(true)->save($data)) {
            $data['cid'] = $content->cid;
        }
        return parent::save($data,$where,$sequence);
       }

       //用来分页查询数据源
       static function selectpage($pagesize,$where=null,$order=null,$field='*'){
          if (!isset($where['appid']) || is_null($where['appid'])) {
              $where['Product.appid']=appid();
          } 
          $result = Db::view('Product',$field)
              ->view('Content','*','Product.cid=Content.cid')
              ->view('ProductCategory','*','ProductCategory.cateid=Product.cateid')
              ->order($order)
              ->where($where)
              ->paginate($pagesize);
          return $result;
       }
	
	// public function parent()
 //    { 
 //        return $this->hasOne('WebProduct','pid','pid');
 //    }

 //    public function sublist()
 //    { 
 //        return $this->hasMany('WebProduct','pid','pid');
 //    }

 //    public function ArticleCount(){
 //    	return Db::view('WebProduct')->where('pid',$this->pid)->count(); 
 //    }

 //    private $is_update=true;

 //    public function Content()
 //    { 
 //        $result = $this->hasOne('WebContent','cid','cid');
 //        //dump($result->toArray());
 //        if (empty($result->toArray())) {
 //            $this->is_update=false;
 //            $result= new WebContent();
 //        }
 //        return $result;
 //    }

 //    public function updateProduct(){
 //        $this->force()->save();

 //        $this->content()->isupdate($this->is_update)->save();
 //    }
}