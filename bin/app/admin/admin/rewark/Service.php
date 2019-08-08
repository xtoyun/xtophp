<?
namespace app\admin\admin\rewark;
 
use app\data\model\RewarkService as RewarkServiceModel;
use app\admin\admin\BaseController as Controller;

class Service extends Controller{
 
	public function index(){ 
		$list=RewarkServiceModel::where("")->order('rsid desc')->paginate(10);

		return $this->template
				->TableTemplate 
				->setData('modulename','活动营销')
				->setTitle('注册套餐奖励')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','服务',url('index')) 
				->addTopButton('','创建',url('create'))
				->addColumnButton('','修改',url('edit').'?id=$rsid','','fa fa-pencil')
				->setQuickSearch('name','Search')
				->setPid('rsid')
				->setColumns([
					['rsid', '编号'],
					['title', '名称'],
					['mstart', '起推数'],
                    ['mend', '尾推数'],
                    ['bili', '比例%'],
                    ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','活动营销') 
				->addNav('','添加',url('create'))
				->addNav('','列表',url('index'))
				->setTitle('添加类别')
				->addFormItems([ 
						['text', 'title', '名称', ''],
						['text', 'mstart', '起推数', ''],
						['text', 'mend', '尾推数', ''],
						['text', 'bili', '提交比例', '请输入0-100以内'],
					])
				->submit(url('create_post'),'')
				->fetch();
	}
	public function create_post(){
		if(request()->ispost()){
			$title  = input('title');
			$mstart = input('mstart'); 
			$mend   = input('mend'); 
			$bili = input('bili'); 
			if(empty($title)){
				return message('名称不能为空',false);
			} 
			if($mstart<0){
				return message('请输入开始推荐人数',false);
			} 
			if($mend<0 || $mend<$mstart){
				return message('请输入结束推荐人数',false);
			} 

			if($bili<0 || $bili>100){
				return message('比例参数只能介于0-100之间',false);
			}

			if(RewarkServiceModel::where('title',$title)->count()>0){
				return message('该名称已经存在',false);
			}

			$max=RewarkServiceModel::where('')->max('mend');
			if (!empty($max)) {
				if($mstart<=$max){
					return message('该区间已经存在',false);
				}
			}

			$info = new RewarkServiceModel();
			$info->title  = $title; 
			$info->mstart = $mstart; 
			$info->mend   = $mend;
			$info->bili=$bili;
			//$info->order = (empty($order)?0:$order);
			$info->appid=appid();

			$result = $info->save();

			if($result){
				return message('保存成功',true);
			}
		}
		return message('保存失败',false);
	}

	public function edit(){
		$id=input('id'); 
		$info = RewarkServiceModel::find($id)->toArray(); 
		return $this->template
				->FormTemplate 
				->setData('modulename','活动营销') 
				->addNav('','编辑',url('edit'),'?id='.$id)
				->addNav('','类别',url('index'))
				->setTitle('编辑类别')
				->addFormItems([
						//['text', 'title', '名称', ''],
						//['text', 'mstart', '起推数', ''],
						//['text', 'mend', '尾推数', ''],
						['text', 'bili', '提交比例', '请输入0-100以内'],
					])
				->setDataSource($info)
				->setPid('rsid',$id)
				->submit(url('edit_post'),'')
				->fetch();
	}
	public function edit_post(){
        if(request()->ispost()){
        	$rsid = input('rsid');
 			$bili = input('bili'); 
 			if($bili<0 || $bili>100){
				return message('比例参数只能介于0-100之间',false);
			}
	 		$info = RewarkServiceModel::find($rsid);
	 		if ($info) { 
	 			$info->bili = $bili;
	 			$info->appid=appid();
	 			$result = $info->force()->save();
	 			if ($result) {
	 				return message('保存成功',true);
	 			}
	 		}
        	return message('保存失败',false);
		}
	}

	public function delete_post(){
		if (request()->ispost()) {
			$rsid = input('id');
			$info = RewarkServiceModel::get($rsid); 
			if ($info) {
				$result = $info->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
 	}
}