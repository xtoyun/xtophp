<?
namespace app\platform\admin;

use app\data\model\Apps as AppModel;
use app\data\membership\Managers as managersModel;
use app\data\membership\Users;

class Siter extends Base{
	public function index(){  
		$list = managersModel::Overall(false)->alias('a')
				->join('Users b','b.userid=a.userid')
				->join('Apps c','c.username=b.username')
				->where('is_siter=1')
				->order('a.userid desc')->paginate(10);

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
					['name', '管理员'], 
					['username', '管理员'], 
					['email', '邮件'],
					
                    //['button', '操作', 'btn']
				])
				->fetch();
	}

}