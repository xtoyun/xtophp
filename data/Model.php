<?php

namespace data;
 
use think\Db;

abstract class Model extends \think\Model{ 

    //是否启用全局查询
    protected $is_over=true;
 
    /**
     * 默认分页查询
     * @param 页数 $pagesize
     * @param 查询条件 $where
     * @param 排序 $order
     * @param 字段 $field
     */
	static function selectpage($pagesize,$where=null,$order=null,$field='*'){
        return parent::where($where)->order($order)->field($field)->paginate($pagesize);
	} 

    /**
     * 是否开启全局查询
     * @param (true|false) $is_over
     */
    static function Overall($is_over=true){
        $instance=new static(); 
        $instance->is_over=$is_over;
        return $instance;
    } 
 
     /**
     * 定义全局的查询范围
     * @param \think\db\Query $query
     */
    protected function base($query)
    {  
        if ($this->is_over) {
            $query->where($query->getTable() . '.appid', appid());
        }
    }
}