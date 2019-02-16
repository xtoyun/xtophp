<?php

namespace app\web\model;

use app\data\Model;
use think\Db;

class WebProduct extends Model{
	protected $pk="pid"; 
    protected $autoWriteTimestamp = 'datetime';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';

       //文章内容
       public function content()
       {
        return $this->belongsTo('WebContent','cid','cid');
       }

       //产品类别
       public function cate()
       {
        return $this->belongsTo('WebProductCategory','cateid','cateid');
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

       // 用来分页查询数据源
       // static function selectpage($pagesize,$where=null,$order=null,$field='*'){
       //  $result = Db::view('WebProduct',$field)
       //      ->view('WebContent','*','WebProduct.cid=WebContent.cid')
       //      ->view('WebProductCategory','*','WebProductCategory.cateid=WebProduct.cateid')
       //      ->order($order)
       //      ->where($where)
       //      ->paginate($pagesize);
       //  return $result;
       // }
	
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