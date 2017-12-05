<?
namespace app\doc\admin;

use think\Controller;
use think\Session;
use think\Request;
use think\Db;
use xto\App;
use app\doc\core\DocHelper;

class Index extends BaseController{
	public function index(){
		return $this->setblock(true)
				->setnav(false)
				->fetch('');
	}

	public function dlist(){
		$result = DocHelper::getdocs(50);
		return $this->template
				->TableTemplate 
				->setData('modulename','文档模块')
				->setTitle('文档列表')
				->setPager($result['page'])
				->setDataSource($result['list'])
				->addColumnButton('delete')
				->addColumnButton('','',url('index/edit').'?id=$did','','fa fa-pencil')
				->addColumnButton('','',url('index/create').'?pid=$did','','fa fa-edit')
				->addTopButton('','创建根文档',url('index/create'))
				->addNav('','列表',url('index/dlist')) 
				->setPid('did') 
				->setColumns([
					['did', '编号'],
					['pid', '上级编号'],
	                ['title', '标题'],
	                ['type', '类型'],  
	                ['button', '操作', 'btn']
				])->fetch();  
	}

	public function create(){
		return $this->template->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加文档',url('index/create'))
				->addNav('','文档列表',url('index/dlist'))
				->setTitle('添加会员')
				->addHidden('pid',input('pid'))
				->addFormItems([
						['radio', 'type', '类型', '',[
							'文档'=>1,
							'目录'=>2
						],1],
						['text', 'title', '标题', '请填写文档标题'],
						['ueditor', 'content', '内容', '']
					])
				->submit('createdoc','')
				->fetch();
	}

	public function edit(){ 
		$id=input('id');
		$data=DocHelper::getdoc($id);
		return $this->template->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','修改文档',url('index/edit'),'?id=')
				->addNav('','文档列表',url('index/dlist'))
				->setTitle('添加会员')
				->addFormItems([
						['radio', 'type', '类型', '',[
							'文档'=>1,
							'目录'=>2
						],1],
						['text', 'title', '标题', '请填写文档标题'],
						['ueditor', 'content', '内容', '']
					])
				->setDataSource($data)
				->setPid('pid',$id)
				->submit('editdoc','')
				->fetch();
	}
}