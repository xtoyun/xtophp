<?
namespace app\admin\admin;

class Sendbox Extends BaseController{
	public function index(){
		return $this->template
				->TableTemplate 
				->setData('modulename','消息管理')
				->setTitle('发件箱')
				//->setPager($result['page'])
				//->setDataSource($data_list)
				->addColumnButton('delete') 
				->addNav('','发件箱',url('sendbox/index')) 
				->setPid('name')
				->setColumns([
					['name', '收件人'],
                    ['rows', '行数'],
                    ['data_length', '大小', 'byte'],
                    ['data_free', '冗余', 'byte'],
                    ['comment', '备注'], 
	                ['button', '操作', 'btn']
				])
				->fetch();
	}
}