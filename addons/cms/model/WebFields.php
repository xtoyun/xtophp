<?php
namespace addons\cms\model;

use data\Model;
use data\Model\Cmodel as CmodelDao;
use think\Db;

class WebFields extends Model{
	protected $pk='fid';

	public function save($data=[], $where = [], $sequence = NULL){
		 
		$info=CmodelDao::find($data['mid']);
		if (!empty($info)) {
			if (!preg_match ("/[a-z]/", substr($data['name'],0,1))) {
				return false;
			}
			$pre=config('database.prefix');
			$table_name=$pre.$info['tablename'];
			$f_name=$data['name'];
			$f_value=$data['value'];
			$f_sql_type=$data['sql_type'];
			if (empty($f_sql_type)) {
				$f_sql_type="varchar(255)";
			}
			$result=Db::query("SHOW COLUMNS FROM $table_name");
			// $result1=Db::query("SHOW COLUMNS FROM $precontent");
			// $result2=Db::query("SHOW COLUMNS FROM $preimgs");
			// $result3=Db::query("SHOW COLUMNS FROM $prenav");
			// $result4=Db::query("SHOW COLUMNS FROM $prearticle_category");

			//$result=array_merge($result,$result1,$result2,$result3,$result4);
			$is_add=true; 
			foreach ($result as $key => $value) {
				if($value['Field']==$f_name){
					$is_add=false;
					break;
				}
			} 
			if($is_add){
				$result = parent::save($data);
				Db::execute("alter table $table_name add $f_name $f_sql_type;");
				return $result;
			}
			return $is_add;
		}
		return false;
	}
 

	public function delete($id=null){
 
		$info=Cmodel::find($this->mid);
		if (!empty($info)) {
			$table_name=config('database.prefix').$info['tablename'];

			$f_name=$this['name'];
			$f_value=$this->value; 
			try {
				Db::execute("alter table $table_name drop $f_name;");
			} catch (Exception $e) {
				
			}
		} 
		return parent::delete($id);
	}

	public function get_fields($tablename){
		$m_dao=\app\web\dao\ModelDao::instance();
		$info=$m_dao->get_by_table($tablename); 
		if (!empty($info)) {
			$map['mid']=$info['mid'];
			$result = Db::view($this->table,'type,name,title,value') 
			->where($map)
			->select();
			$n=[];
			$index=0;
			foreach ($result as $key => $value) {
				$n[$index]=[$value['type'],$value['name'],$value['title'],$value['value']];
				$index++;
			} 

			return $n;
		}
		return null;
	}
}