<?
namespace app\admin\admin;

use app\data\model\Messages;
use app\data\model\MessageData;

class Inbox Extends BaseController{

	public function index(){
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}  
		$where['accepter']=$this->user->username; 
		$source=Messages::selectpage(20,$where,'mid desc');//读取数据
		return $this->template
				->TableTemplate 
				->setData('modulename','消息管理')
				->setTitle('收件箱')
				->setPager($source->render())
				->setDataSource($source)
				->addColumnButton('delete') 
				->addNav('','收件箱',url('inbox/index')) 
				->setPid('mbid')
				->setColumns([
					['sender', '发件人'],
                    ['title', '标题','link','read?id=$mbid'],
                    ['createdate', '日期'],
                    ['updatetime', '更新日期'],
	                ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function read(){ 
		$id=input('id');  
		$info=Messages::getinfo($id);
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','回复内容',url('inbox/read'),'?id='.$id)
				->addNav('','收件箱',url('inbox/index'))
				->setTitle('编辑管理员')
				->addFormItems([
						['static', 'sender', '发件人', ''],
						['text', 'title', '标题', ''],

						['ueditor', 'content', '备注', ''], 
						['textarea', 'remsg', '回复内容', ''], 
						['hidden', 'mid', '文章标题', ''],
					])
				->setDataSource($info)
				->setPid('mbid',$id)
				->submit(url('inbox/remsg_post'),'','','提交回复')
				->fetch();
	}

	public function remsg_post(){
		if(request()->ispost()){
			$data=request()->post();
			if(MessageData::update($data)){
				return message('更新成功',true);
			}
		}
		return message('更新失败',false);
	}

	public function delete_post(){
		if(request()->ispost()){
			$id=input("id");
			$info=Messages::find($id);
			if($info->delete()){
				return message('恭喜，删除成功',true);
			}
		}
		return message('删除失败',false);
	}
}