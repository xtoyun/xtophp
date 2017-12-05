<?
namespace xto\data;

use think\Db;

class Sql{
	static function insert($table,$data){
		return Db::table($table)->insert($data);
	}

	static function update($talbe,$data,$map=null){
		if(is_null($map)){
			return Db::table($talbe)->update($data);
		}else{
			return Db::table($talbe)->where($map)->update($data);
		} 
	}

	static function saveorupdate($table,$data,$map){
		$c=Sql::count($table,$map);
		if($c<=0){
			return Sql::insert($table,$data);
		}else{
			return Sql::update($table,$data,$map);
		}
	}

	static function getfield($talbe,$map,$field,$order=null){
		return Db::table($talbe)->where($map)->order($order)->value($field);
	}

	static function select($table,$map,$map_or=null,$order=null){
		return Db::table($table)->where($map)->whereor($map_or)->order($order)->select();
	}

	static function delete($table,$map){
		return Db::table($table)->where($map)->delete();
	}

	static function getlist($table,$pagesize=10,$order=null,$map=null,$map_or=null){
		return Db::table($table)->where($map)->whereor($map_or)->order($order)->paginate($pagesize);
	}

	static function find($table,$map,$map_or=null){
		return Db::table($table)->where($map)->whereor($map_or)->find();
	}

	static function count($table,$map,$map_or=null){
		return Db::table($table)->where($map)->whereor($map_or)->count();
	}
}