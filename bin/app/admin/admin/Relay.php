<?
namespace app\admin\admin;
 
use app\data\model\Relays as RelaysModel;
use app\data\model\RelaysData as RelayDataModel;

class Relay extends BaseController{

	public function index(){
		$list = RelaysModel::where('')->order('rid desc')->paginate(5);

		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('放灯片')
				->setDataSource($list)
				->addColumnButton('delete') 
				->addNav('','放灯片',url('relay/index')) 
				->addTopButton('','创建',url('relay/create'))
				->addColumnButton('','修改',url('relay/edit').'?id=$rid','','fa fa-pencil')
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
		$data=RelayDataModel::where('rid',$id)->select();
		return $this->template
				->ShowTemplate 
				->setData('modulename','基础设置') 
				->setData('id',$id) 
				->setdata('demo_time',$this->request->time())
				->setData('relay',RelaysModel::find($id))
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
				->submit(url('relay/relay_data_create'),'')
				->fetch();
	}

	public function relay_data_create(){
		if(request()->ispost()){
			$rid=input('rid');
			$title=input('title');
			$link=input('link');
			$img=input('img');

			if (empty($title)) {
				return message('标题不能为空',false);
			}
			$info=new RelayDataModel;
			$info->rid=$rid;
			$info->title=$title;
			$info->link=$link;
			$info->img=$img;
			if($info->save()){
				return message('成功',true);
			}
		}
		return message('提交失败',false);
	}

	public function relay_data_update(){
		if(request()->ispost()){
			$rdid=input('rdid');
			$title=input('title');
			$link=input('link');
			$img=input('img');

			if (empty($title)) {
				return message('标题不能为空',false);
			}

			$info=RelayDataModel::find($rdid);
			if ($info) {
				$info->title=$title;
				$info->link=$link;
				$info->img=$img;
				if($info->save()){
					return message('成功',true);
				}
			}
			
		}
		return message('提交失败',false);
	}

	public function editdata(){
		$id=input('id');
		$data=RelayDataModel::find($id)->toarray();
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
				->submit(url('relay/relay_data_update'),'')
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

				->submit(url('create_post'),'')
				->fetch();
	}

	public function create_post(){
		if(request()->ispost()){
			$title = input('title');
			$ename = input('ename');
			$remark = input('remark');

			if(empty($title)){
				return message('名称不能为空',false);
			}
			$category = new RelaysModel();
			$category->title = $title;
			$category->ename = $ename;
			$category->remark = $remark;

			$result = $category->save();
			if ($result) {
				return message('添加成功',true);
			}
			return message('添加失败',false);
		 }
	}

	public function delete_post(){
		if (request()->ispost()) {
			$rid = input('id');
			$category_item = RelaysModel::get($rid,'Items');

			if ($category_item) {
				$result = $category_item->together('Items')->delete();
				if($result){
					return message('删除成功',true);
				}
			} 
		}
		return message('删除失败',false);
 }

	public function edit(){
		$id=input('id'); 
		$category_item = RelaysModel::find($id)->toArray();
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
				->setDataSource($category_item)
				->setPid('rid',$id)
				->submit(url('edit_post'),'')
				->fetch();
	}

	public function edit_post(){
		if(request()->ispost()){
			$rid = input('rid');
	 		$title = input('title');
	 		$remark = input('remark');	
	 		if(empty($title)){
				return message('名称不能为空',false);
			}
			$category_item = RelaysModel::find($rid);
			$category_item->title = $title;
			$category_item->remark = $remark;

			$result = $category_item->force()->save();
			if ($result) {
				return message('修改成功',true);
			}
			return message('修改失败',false);
		}
	}
}