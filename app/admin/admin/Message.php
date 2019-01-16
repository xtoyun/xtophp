<?
namespace app\admin\admin;

class Message Extends BaseController{
	public function sender(){
		return $this->template
				->TableTemplate 
				->setData('modulename','消息管理')
				->setTitle('收件箱')
				//->setPager($result['page'])
				//->setDataSource($data_list)
				->addColumnButton('delete') 
				->addNav('','收件箱',url('rebox/index')) 
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