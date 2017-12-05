<?
namespace app\web\admin;

use app\web\dao\RelayDao;

class Relay extends BaseController{
	private $dao;

	public function _initialize(){
		parent::_initialize();
		$this->dao=RelayDao::instance();
	}

	public function index(){ 
		$this->dao->setQuickSearch(input('relay'),input('field'));
		$this->dao->setorder('rid','desc');
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('放灯片')
				->setDataSource($this->dao->select())
				->addColumnButton('delete') 
				->addNav('','放灯片',url('relay/index')) 
				->addTopButton('','创建',url('relay/create'))
				->addColumnButton('','',url('relay/edit').'?id=$rid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('rid')
				->setColumns([
					['rid', '编号'], 
					['title', '名称','link','detail?id=$rid'],
					['remark', '备注','link',''], 
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function detail(){
		$id=input('id'); 
		$data=\app\web\dao\RelayDataDao::instance()->getlist($id);
		return $this->template
				->ShowTemplate 
				->setData('modulename','基础设置') 
				->setData('id',$id) 
				->setdata('demo_time',$this->request->time())
				->setData('relay',$this->dao->find($id))
				->addNav('','显示',url('relay/detail'))
				->addNav('','放灯片',url('relay/index'))
				->setTitle('显示放灯片') 
				->setDataSource($data)
				->fetch('nav/detail');
	}

	public function adddata(){
		$id=input('id');
		return $this->template
				->FormTemplate 
				->setTitle('添加放灯片')
				->setblock(true)
				->setnav(false)
				->setlayout(false)
				->addFormItems([ 
						['text', 'title', '标题', ''],
						['text', 'link', '网址', ''], 
						['image', 'img', '图片', '']
					])
				->setpid('rid',$id)
				->submit('relay_data_create','')
				->fetch();
	}

	public function editdata(){
		$id=input('id');
		$data=\app\web\dao\RelayDataDao::instance()->find($id);
		return $this->template
				->FormTemplate 
				->setTitle('添加放灯片')
				->setblock(true)
				->setnav(false)
				->setlayout(false)
				->addFormItems([ 
						['text', 'title', '标题', ''],
						['text', 'link', '网址', ''], 
						['image', 'img', '图片', '']
					])
				->setDataSource($data)
				->setpid('rdid',$id)
				->submit('relay_data_update','')
				->fetch();
	}

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','添加',url('relay/create'))
				->addNav('','放灯片',url('relay/index'))
				->setTitle('添加放灯片')
				->addFormItems([ 
						['text', 'title', '名称', ''],
						['text', 'ename', '英文名称', ''],
						['textarea', 'remark', '备注', '格式：http://',''],

					])

				->submit('relay_create','')
				->fetch();
	}

	public function edit(){
		$id=input('id'); 
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('relay/edit'),'?id='.$id)
				->addNav('','放灯片',url('relay/index'))
				->setTitle('编辑放灯片')
				->addFormItems([
						['text', 'title', '名称', ''],
						['textarea', 'remark', '备注', '格式：http://',''],
					])
				->setDataSource($this->dao->find($id))
				->setPid('rid',$id)
				->submit('relay_update','')
				->fetch();
	}
}