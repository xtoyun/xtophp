<?php

namespace app\data\model;

use app\data\Model;
use think\Db;

class Product extends Model{
	 protected $pk="pid"; 
    protected $autoWriteTimestamp = 'int';
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';

    public function getCreateTimeAttr($value)
    {
        if(is_numeric($value)){
            $this->_create_time=$value;
            return date("Y-m-d H:i:s" ,(int)$value);
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

    static function get_counts(){
      return parent::count();
    }

       //文章内容
       // public function content()
       // {
       //  return $this->belongsTo('Content','cid','cid');
       // }

       //产品类别
       public function cate()
       { 
        return $this->belongsTo('ProductCategory','cateid','cateid');
       }

       public function specs()
        {

            return $this->hasMany('ProductSpecs','pid','pid'); 
        } 

       //直接获取所有数据信息，便于读取
       // public function getinfo($id)
       // {
       //      $result=self::find($id);
       //      return array_merge($result->toArray(),($result->content)?$result->content->toArray():[]);
       // }

       //重写save方法
       //内容直接读取$_POST方法
       // public function save($data = [], $where = [], $sequence = NULL){
       //    //重写内容
       //    $data['update_time'] = date("Y-m-d H:i:s");
       //    $content = new WebContent();
       //    if (!empty($this->cid)) {
       //        $content = $this->content;
       //    }
       //    //创建成功后，保存cid
       //    if ($content->allowField(true)->save($data)) {
       //        $data['cid'] = $content->cid;
       //    }
       //    return parent::save($data,$where,$sequence);
       // }

       static function selectpage($pagesize,$where=null,$order=null,$field='*'){
          return parent::alias('a')->field($field)->where($where)->order($order)
                  //->join('Content','a.cid=Content.cid')
                  ->join('ProductCategory','ProductCategory.cateid=a.cateid')
                  ->paginate($pagesize);
       } 
}