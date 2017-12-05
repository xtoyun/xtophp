<?
namespace app\admin\admin; 

use think\Db;

class Database extends BaseController{
	public function index(){
		$data_list = Db::query("SHOW TABLE STATUS");
        $data_list = array_map('array_change_key_case', $data_list);
		return $this->template
				->TableTemplate 
				->setData('modulename','基础管理')
				->setTitle('数据库')
				//->setPager($result['page'])
				->setDataSource($data_list)
				->addColumnButton('delete') 
				->addNav('','数据库表',url('database/index')) 
				->addTopButton('','立即备份',url('database/back'))
				->setPid('name')
				->setColumns([
					['name', '表名'],
                        ['rows', '行数'],
                        ['data_length', '大小', 'byte'],
                        ['data_free', '冗余', 'byte'],
                        ['comment', '备注'], 
	                ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function back(){
         
        $this->error('参数错误！');
    }
}