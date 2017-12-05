<?php

namespace xto\data;

use xto\data\Sql;
use xto\App;
use think\Model;
use think\Db;

abstract class IDao{
	private static $instance; 

	private $_tablename;
	private $_keyid;
	private $source;
	private $app;

	public $map=[];//条件
	public $map_or=[];//or条件
	public $data=[];
	public $order=[];

	private $id;
	public $add;


	public function __construct($tablename,$keyid) {
		$this->_tablename 	=$tablename;
		$this->_keyid 		=$keyid;
		$this->app=App::instance();
	}

	static function instance($add=''){
		if (is_null ( self::$instance ) || isset ( self::$instance )) {
            self::$instance = new static (); 
        }
        self::$instance->add=$add;//主表的别名
        //设置全局
        self::$instance->map[self::$instance->_tablename.'.appid']=self::$instance->app->appid;
        return self::$instance;
	}  

	public function saveorupdate($data){
		$data['appid']=$this->app->appid;
		if(Sql::count($this->_tablename,$this->map,$this->map_or)>0){
			return Sql::update($this->_tablename,$data);
		}else{
			return Sql::insert($this->_tablename,$data);
		} 
	}

	public function check(){
		if(count($this->map)>1){//appid是必要条件
			if(Sql::count($this->_tablename,$this->map,$this->map_or)>0){
				return false;
			}
		}
		return true;//默认通过
	}

	public function save($data){
		if($this->check()){
			$data['appid']=$this->app->appid;

			$result= Sql::insert($this->_tablename,$data);
			if($result){
				$this->id=Db::table($this->_tablename)->getLastInsID();
			}
			return $result;
		} 
	}

	public function update($data){
		if($this->check()){
			$data['appid']=$this->app->appid;
			return Sql::update($this->_tablename,$data);
		}
	}

	public function delete($id){
		if($this->check()){ 
			$map[$this->_keyid]=$id;
			$map['appid']=$this->app->appid;
			return Sql::delete($this->_tablename,$map);
		} 
	}

	public function find($id){
		$map[$this->_keyid]=$id;
		$map['appid']=$this->app->appid;
		return Sql::find($this->_tablename,$map);		
	}

	public function field($map,$field){
		$map['appid']=$this->app->appid;
		return Sql::getfield($this->_tablename,$map,$field);
	}

	public function count($map){
		$map['appid']=$this->app->appid;
		return Sql::count($this->_tablename,$map);
	}

	public function select(){
		$this->source = Sql::select($this->_tablename,$this->map,$this->map_or,$this->order);
		return $this->source;
	}

	public function selectpage($pagesize){
		$this->source = Sql::getlist($this->_tablename,$pagesize,$this->order,$this->map,$this->map_or);
		return $this->source;
	}

	public function setQuickSearch($keyword,$field,$add=''){
		if (!empty($keyword)) { 
			foreach (explode(',',$field) as $key => $value) {
				$this->map_or[(!empty($add)?$add.'.':'').$value]=['like',$keyword.'%'];
			}
		} 
		return $this;
	}

	public function setorder($field,$desc_or_asc){
		$this->order[$field]=$desc_or_asc;
		return $this;
	}

	public function setdata($key,$value){
		$this->data[$key]=$value;
		return $this;
	}

	public function getSource(){
		return $this->source;
	} 

	public function getTable(){
		return $this->_tablename;
	}

	public function getApp(){
		return $this->app;
	}

	public function getId(){
		return $this->id;
	}

	public function __get($name)              // 这里$name是属性名
    {
        $getter = 'get' . $name;              // getter函数的函数名
        if (method_exists($this, $getter)) {
            return $this->$getter();          // 调用了getter函数
        } else {
            if(isset($this->$name)){
                return $this->$name; 
            } 
        }
    }

    public function __set($name, $value)
    {
        $setter = 'set' . $name;             // setter函数的函数名
        if (method_exists($this, $setter)) {
            $this->$setter($value);          // 调用setter函数
        } else {
            if(isset($this->$name)){
                $this->$name = $value; 
            } 
        }
    }
}