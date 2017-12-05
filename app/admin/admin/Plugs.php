<?
namespace app\admin\admin;

use xto\plugins\SMSPlugins;
use xto\plugins\EmailPlugins;
use xto\plugins\OSSPlugins;
use xto\plugins\PayPlugins;

use xto\data\dao\PayDao;

class Plugs extends BaseController
{
	public function __construct(){
		parent::__construct();
	} 

	public function setpay(){
		$dao=PayDao::instance();
		$result = $dao->selectpage(10);
		$this->assign("list",$result);
		$this->assign("page",$result->render());
		return $this->setmodule('应用管理')->settitle('插件管理')->view();
	}

	public function addpay(){
		$id=input('id');
		$dao=PayDao::instance();
		$type=request()->get('type');//当前修改类型
		//配置转换成array
		//$configs=$dao->getpay($type)['config'];//初始化短信值

		//短信插件实例对象
		$instance=PayPlugins::instance();
		//获取获取插件array
		$l=$instance->Plugins;
		//读取当前插件类 new 
		$p=$instance->getPlugin($type);

		//meta，显示内容
		$a_data=array();
		if(!is_null($p)){
			//初始化配置
			if(!empty($id)){
				$info=$dao->find($id);
				$this->assign('name',$info['name']);
				$this->assign('remark',$info['remark']);
				$p->init($info['config']);
			}
			//$p->init($configs);

			//获取类所有要编辑的字段名称
			$a_data=$p->getData();
		} 
		//显示所有插件
		$this->assign("plugins",$l);
		//当前类型
		$this->assign("type",$type);
		//编辑字段名称
		$this->assign("data",$a_data);  
		return $this->view(); 
	}

	public function setsms(){
		$type=request()->get('type');//当前修改类型
		//如果已经配置，则转向已经配好
		if(!empty($this->find('smstype') && empty($type))){
			gourl('plugs/setsms',"type=".$this->find('smstype'));
		}
		
		//配置转换成array
		$configs=$this->find('smssender');//初始化短信值 
		//短信插件实例对象
		$instance=SMSPlugins::instance();
		//获取获取插件array
		$l=$instance->Plugins;
		//读取当前插件类 new 
		$p=$instance->getPlugin($type);

		//meta，显示内容
		$a_data=array();
		if(!is_null($p)){
			//初始化配置
			$p->init($configs);

			//获取类所有要编辑的字段名称
			$a_data=$p->getData();
		} 
		//显示所有插件
		$this->assign("plugins",$l);
		//当前类型
		$this->assign("type",$type);
		//编辑字段名称
		$this->assign("data",$a_data);  
		return $this->setmodule('应用管理')->settitle('插件管理')->view();
	}
	public function setemail(){ 
		$type=request()->get('type');//当前修改类型

		//如果已经配置，则转向已经配好
		if(!empty($this->find('emailtype') && empty($type))){
			gourl('plugs/setemail',"type=".$this->find('emailtype'));
		}

		//配置转换成array
		$configs=$this->find('emailsender');//初始化短信值
		//邮件插件实例对象
		$instance=EmailPlugins::instance();
		//获取获取插件array
		$l=$instance->Plugins;
		//读取当前插件类 new 
		$p=$instance->getPlugin($type);

		//meta，显示内容
		$v_data=array();
		if(!is_null($p)){
			//初始化配置
			$p->init($configs);

			//获取类所有要编辑的字段名称
			$v_data=$p->getData();
		} 
		//显示所有插件
		$this->assign("plugins",$l);
		//当前类型
		$this->assign("type",$type);
		//编辑字段名称
		$this->assign("data",$v_data); 
		 
		return $this->setmodule('应用管理')->settitle('插件管理')->view();
	}

	public function setoss(){ 
		$type=request()->get('type');//当前修改类型

		//如果已经配置，则转向已经配好
		if(!empty($this->find('osstype') && empty($type))){
			gourl('plugs/setoss',"type=".$this->find('osstype'));
		}

		//配置转换成array
		$configs=$this->find('osssender');//初始化短信值
		
		//邮件插件实例对象
		$instance=OSSPlugins::instance();
		//获取获取插件array
		$l=$instance->Plugins;
		//读取当前插件类 new 
		$p=$instance->getPlugin($type);

		//meta，显示内容
		$v_data=array();
		if(!is_null($p)){
			//初始化配置
			$p->init($configs);

			//获取类所有要编辑的字段名称
			$v_data=$p->getData();
		} 
		//显示所有插件
		$this->assign("plugins",$l);
		//当前类型
		$this->assign("type",$type);
		//编辑字段名称
		$this->assign("data",$v_data); 
		 
		return $this->setmodule('应用管理')->settitle('插件管理')->view();
	}
}