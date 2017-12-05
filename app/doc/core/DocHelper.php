<?
namespace app\doc\core;

use think\Db;

class DocHelper{
	public static $_table='xto_doc';

	static function getdoc($id){
		return Db::table(self::$_table)->where('did',$id)->find();
	}

	static function getlist($pid){
		return Db::table(self::$_table)->where('pid',$pid)->select();
	}

	static function checksub($pid){
		return Db::table(self::$_table)->where('pid',$pid)->count();
	}

	static function getall(){
		return Db::table(self::$_table)->select();
	}

	static function updatedoc($id,$data){ 
		return Db::table(self::$_table)
	    	->where('did', $id)
	    	->update($data);
	}

	static function getdocs($pagezie){
		$result = Db::view('xto_doc','*')
			->order('did', 'desc')
			->paginate($pagezie);
		$b=array(
			'list'=>$result,
			'page'=>$result->render()
			);	 
		return $b;
	}
}