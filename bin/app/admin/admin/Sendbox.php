<?
namespace app\admin\admin;

use app\data\model\Messages;
use app\data\model\MessageData; 
use app\data\membership\Members;

class Sendbox Extends BaseController{

	public function index(){
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}  
		$where['sender']=$this->user->username; 
		$source=Messages::selectpage(20,$where,'mid desc');//读取数据

		return $this->template
				->TableTemplate 
				->setData('modulename','消息管理')
				->setTitle('发件箱')
				->setPager($source->render())
				->setDataSource($source)
				->addColumnButton('delete') 
				->addNav('','发件箱',url('sendbox/index')) 
				->setPid('mbid')
				->setColumns([
					['accepter', '收件人'],
                    ['title', '标题','link','send?id=$mbid'],
                    ['createdate', '日期'],
                    ['updatetime', '更新日期'],
	                ['button', '操作', 'btn']
				])
				->fetch();
	}

	public function send(){
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','发送邮件',url('sendbox/send'))
				->setTitle('编辑管理员')
				->addFormItems([
						['text', 'accepter', '收件人', ''],
						['text', 'title', '标题', ''],

						['ueditor', 'content', '备注', ''], 
						['static', 'remsg', '回复内容', ''], 
						['hidden', 'mid', '文章标题', ''],
					])
				//->setDataSource($info)
				//->setPid('mbid',$id)
				->submit(url('sendbox/sendmsg_post'),'','','提交回复')
				->fetch();
	}

	public function sendmsg_post(){
		if(request()->ispost()){  
			$data=request()->post();

			$data['sender']=$this->user->username;
			$data['isread']=false;
			 
			if (empty($data['accepter'])) {
				return message('请确定收件人',false); 
			}
			if (empty($data['title'])) {
				return message('请输入标题',false); 
			}
			if (empty($data['content'])) {
				return message('请输入内容',false); 
			}

			$touser=Members::getuser(0,$data['accepter']);
			if(empty($touser) || $touser->userrole!=UserRole::Member){
				return message('收件人不存在!!',false); 
			} 
 
			if (empty($data['mbid'])) {
				$newdata=new MessageData();
				$newdata->title=$data['title'];
				$newdata->content=$data['content'];
				$newdata->createdate=getdate();
				$result=$newdata->save();
				if ($result) {
					$messages=[
						'mid'=>$newdata->mid,
						'sender'=>$data['sender'],
						'accepter'=>$data['accepter'],
						'isread'=>$data['isread'], 
					];
					Messages::create($messages);
				}
			}else{
				$result=Messages::update($data);
			}
			
			if($result){
				return message('发送成功',true);
			}
		}
		return message('发送失败',false); 
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