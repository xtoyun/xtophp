<?php
namespace app\web\dao;

use app\common\dao\Sql;
use xto\common\lib\Util;
use app\common\dao\IDao; 
use think\Db;

class FieldDao extends IDao{
	protected $table='xto_web_fields';
	protected $pk="fid";  

	public function save($data=[], $where = [], $sequence = NULL){
		$dao=\app\web\dao\ModelDao::instance();
		$info=$dao->find($data['mid']);
		if (!empty($info)) {
			if (!preg_match ("/[a-z]/", substr($data['name'],0,1))) {
				return false;
			}
			$table_name=$info['tablename'];
			$f_name=$data['name'];
			$f_value=$data['value'];
			$f_sql_type=$data['sql_type'];
			if (empty($f_sql_type)) {
				$f_sql_type="varchar(255)";
			}
			$result=Db::query("SHOW COLUMNS FROM $table_name");
			$result1=Db::query("SHOW COLUMNS FROM web_content");
			$result2=Db::query("SHOW COLUMNS FROM web_imgs");
			$result3=Db::query("SHOW COLUMNS FROM web_nav");
			$result4=Db::query("SHOW COLUMNS FROM web_article_category");

			$result=array_merge($result,$result1,$result2,$result3,$result4);
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

	public static function update($data = [], $where = [], $field = NULL){
		return parent::update($data);
	}

	public function delete($id=null){
		$data=$this->find($id);
		if (!empty($data)) {
			$m_dao=\app\web\dao\ModelDao::instance();
			$info=$m_dao->find($data['mid']);
			if (!empty($info)) {
				$result = parent::delete($id);
				if ($result) {
					$table_name=$info['tablename'];
					$f_name=$data['name'];
					$f_value=$data['value'];
					try {
						Db::execute("alter table $table_name drop $f_name;");
					} catch (Exception $e) {
						
					}
					
				}
				return $result;
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