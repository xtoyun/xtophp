<?
namespace app\platform\admin;

use app\data\model\Apps as AppModel;
use app\data\membership\Managers as managersModel;
use app\data\membership\Users;

class Siteapp extends Base{
	public function index(){  
		$list = AppModel::where(null)->order('appid asc')->paginate(10);

		return $this->template
				->TableTemplate 
				->setData('modulename','站点管理')
				->setTitle('站点列表')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete') 
				->addNav('','站点列表',url('siteapp/index')) 
				->addTopButton('','创建',url('siteapp/create'))
				->addColumnButton('','修改',url('siteapp/edit').'?appid=$appid','','fa fa-pencil')
				->setQuickSearch('name','')
				->setPid('appid')
				->setColumns([
					['appid', '编号'],
					
					['name', '名称'],
					['username', '管理员'], 
                    ['button', '操作', 'btn']
				])
				->fetch();
	} 

	public function create(){
		return $this->template
				->FormTemplate 
				->setData('modulename','内容设置') 
				->addNav('','添加站点',url('siteapp/create'))
				->addNav('','站点列表',url('siteapp/index'))
				->setTitle('添加单页')
				->addFormItems([  
						['text', 'name', '站点名称', ''],
						['text','username','用户名',''],
						['password','password1','登录密码',''],
						['password','password2','确认密码',''],
						['text', 'description', '描述', ''],
					])
				->submit(url('siteapp/create_post'),'')
				->fetch();
	}

	public function edit(){
		$appid=input('appid');
		$info=AppModel::find($appid)->toarray();
		return $this->template
				->FormTemplate 
				->setData('modulename','内容设置') 
				->addNav('','修改站点',url('siteapp/edit'))
				->addNav('','站点列表',url('siteapp/index'))
				->setTitle('添加单页')
				->addFormItems([  
						['text', 'name', '站点名称', ''],
						 
						['text', 'description', '描述', ''],
					])
				->setDataSource($info)
				->setPid('appid',$appid)
				->submit(url('siteapp/edit_post'),'')
				->fetch();
	}

	public function edit_post(){
		if (request()->ispost()) {
			$info=AppModel::find(input('appid'));
			if ($info) {
				$info->name=input('name');
				$info->save();
				return message('提交成功',false);
			}
		}
	}

	public function create_post(){
		if (request()->ispost()) {
			$name = input('name');
			$username = input('username');
			$password1 = input('password1');
			$password2 = input('password2');
			$description = input('description');
			if (empty($name)) {
				return message('请输入站点名称',false);
			}
			if ($password1!=$password2) {
				return message('请确认密码',false);
			}

			$apps = new AppModel();
			$apps->name = $name; 
			$apps->username = $username; 
			$apps->description = $description;
			$result = $apps->save(); 
			if($result){
				$manager=new managersModel;
				$manager->username=$username;
				$manager->password=$password1;
				$manager->is_plat=false;
				$manager->appid=$apps->appid;
				$manager->is_admin=true;
				$manager->is_approved=true;
				$result=$manager->save(); 
			} 
			return message($result->msg,$result->success);
		}
	}

	public function delete_post(){
		if (request()->ispost()) {
			$id = input('id');
			$category_item = AppModel::get($id);

			$user=Users::getuser(0,$category_item->username,'',false);
			if($user!=null && $user->is_plat){
				return message('超级站点不能删除',false);
			}

			if ($category_item) {
				$result = $category_item->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
 }
}