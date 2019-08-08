<?
namespace app\admin\admin;

require APP_PATH . '../vendor/autoload.php';
use xto\plugins\SMSPlugins;
use xto\plugins\EmailPlugins;
use xto\plugins\OSSPlugins;
use xto\plugins\PayPlugins;

// use app\common\dao\PayDao;
// use app\common\lib\Util;

use app\data\model\Config;
use app\data\model\Pays;
use app\plugins\Sms;

class Plugs extends BaseController
{
	public function setpay(){
		$where=[];
		if (!empty(input('field'))) {
			$where=[
				[input('field'),'like',input('keyword').'%'],
			];
		}   
		$result=Pays::selectpage(20,$where,'payid desc');//读取数据

		return $this->template
				->TableTemplate 
				->setData('modulename','插件管理')
				->setTitle('支付管理')
				->setPager($result->render())
				->setDataSource($result)
				->addColumnButton('delete') 
				->addNav('','支付设置',url('plugs/setpay')) 
				->addNav('','短信设置',url('plugs/setsms')) 
				->addNav('','邮件设置',url('plugs/setemail')) 
				->addNav('','远程附件',url('plugs/setoss')) 
				->setQuickSearch('username,ip','请输入关键字')
				->addTopButton('','创建',url('plugs/addpay'))
				->setPid('payid')
				->setColumns([
					['payid', '编号'],
	                ['name', '名称','link','addpay/id/$payid/type/$paytype'],
	                ['paytype', '类型'], 
	                ['remark', '备注'],   
	                ['button', '操作', 'btn']
				])
				->fetch(); 
	}

	public function addpay_post(){
		if(request()->ispost()){  
			$payid 	=input('payid');
			$type 	=input('type');
			$name 	=input('name');
			$remark =input('remark');
			if (empty($type)) { 
				return message('类型为空',false);
			}
			if (empty($name)) { 
				return message('请指定显示名称',false);
			}
			$data=\xto\plugins\PayPlugins::instance()->getPlugin($type)->getData();
			foreach ($data as $key => $value) {
				if(is_bool($value)){
					$result[$key]=(boolean)input($key);
				}else{
					$result[$key]=input($key);
				}
			}
			$result=[
				'config'=>json_encode($result),
				'paytype'=>$type,
				'name'=>$name,
				'remark'=>$remark
			]; 

			if(!empty($payid)){
				$result['payid']=$payid;
				if(Pays::update($result)){
					return message('更新成功',true);
				}
			}else{
				if(Pays::create($result)){
					return message('保存成功',true);
				}
			}
			
			return message('保存失败，或是数据未改动',false);
		}
	}

	public function addpay(){
		$id=input('id'); 
		$type=request()->get('type');//当前修改类型
		//配置转换成array
		//$configs=$dao->getpay($type)['config'];//初始化短信值

		//短信插件实例对象
		$instance=PayPlugins::instance();
		//获取获取插件array
		$l=$instance->Plugins;
		//读取当前插件类 new 
		$p=$instance->getPlugin($type);

		$name='';
		$remark='';

		//meta，显示内容
		$a_data=array();
		if(!is_null($p)){
			//初始化配置
			if(!empty($id)){
				$info=Pays::find($id);
				if (!empty($info)) {
					$name=$info['name'];
					$remark=$info['remark']; 
					$p->init($info['config']);
				}
				
			}
			//$p->init($configs);

			//获取类所有要编辑的字段名称
			$a_data=$p->getData();
			//dump($a_data);
		} 
		$this->assign('name',$name);
		$this->assign('remark',$remark);
		//显示所有插件
		$this->assign("plugins",$l);
		//当前类型
		$this->assign("type",$type);
		//编辑字段名称
		$this->assign("data",$a_data);  

		return $this->addNav('','编辑支付',url('plugs/addpay'))
				->addNav('','支付设置',url('plugs/setpay'))
				->setmodule('应用管理')
				->settitle('插件管理')
				->setpid('id',$id)
				->view();
	}

	public function setsms(){
		$type=request()->get('type');//当前修改类型
		//如果已经配置，则转向已经配好
		if(!empty(Config::find_value('smstype') && empty($type))){
			gourl('plugs/setsms',"type=".Config::find_value('smstype'));
		}
		
		//配置转换成array
		$configs=Config::find_value('smssender');//初始化短信值 
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

	public function smstest_post(){
		if(request()->ispost()){
			$mobile=input('testmobile'); 
			$tc=input('testcontent');
			if (empty($mobile)) {
				return message('手机号码不能为空',false);
			}
			if (empty($tc)) {
				return message('内容不能为空',false);
			}

			$sms=new Sms;
			return $sms->send($mobile,$tc); 
		}
	}

	public function sms_post(){
		if(request()->ispost()){  
			$type=input('type'); 
	 		if (empty($type)) { 
				return message('类型为空',false);
			}
			$result=array();
			$data=\xto\plugins\SMSPlugins::instance()->getPlugin($type)->getData();
			foreach ($data as $key => $value) {

				if(is_bool($value)){
					$result[$key]=(boolean)input($key);
				}else{
					$result[$key]=input($key);
				}
			}

			$c=Config::where('name','smssender')->find();
			if(!$c){
				$c=new Config;
			}
			$c->appid=appid();
			$c->name='smssender';
			$c->value=json_encode($result);
			$c->save();

			$d=Config::where('name','smstype')->find();
			if(!$d){
				$d=new Config;
			}
			$d->appid=appid();
			$d->name='smstype';
			$d->value=$type;
			$d->save(); 

			return message('保存成功',true);
		}
	}
	public function setemail(){ 
		$type=request()->get('type');//当前修改类型

		//如果已经配置，则转向已经配好
		if(!empty(Config::find_value('emailtype') && empty($type))){
			gourl('plugs/setemail',"type=".Config::find_value('emailtype'));
		}

		//配置转换成array
		$configs=Config::find_value('emailsender');//初始化短信值
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

	public function email_post(){
		if(request()->ispost()){  
			$type=input('type');
			if (empty($type)) {
				return message('类型为空',false);
			}
			$result=array();
			$data=\xto\plugins\EmailPlugins::instance()->getPlugin($type)->getData();
			foreach ($data as $key => $value) {
				if(is_bool($value)){
					$result[$key]=(boolean)input($key);
				}else{
					$result[$key]=input($key);
				}
			} 

			$c=Config::where('name','emailsender')->find();
			if(!$c){
				$c=new Config;
			}
			$c->appid=appid();
			$c->name='emailsender';
			$c->value=json_encode($result);
			$c->save();

			$d=Config::where('name','emailtype')->find();
			if(!$d){
				$d=new Config;
			}
			$d->appid=appid();
			$d->name='emailtype';
			$d->value=$type;
			$d->save(); 
 
			return message('保存成功',true);
		}
	}

	public function setoss(){ 
		$type=request()->get('type');//当前修改类型

		//如果已经配置，则转向已经配好
		if(!empty(Config::find_value('osstype') && empty($type))){
			gourl('plugs/setoss',"type=".Config::find_value('osstype'));
		}

		//配置转换成array
		$configs=Config::find_value('osssender');//初始化短信值
		
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

	public function oss_post(){
		if(request()->ispost()){  
			$type=input('type');
			if (empty($type)) {
				return message('类型为空',false);
			}
			$result=array();
			$data=\xto\plugins\OSSPlugins::instance()->getPlugin($type)->getData();
			foreach ($data as $key => $value) {
				if(is_bool($value)){
					$result[$key]=(boolean)input($key);
				}else{
					$result[$key]=input($key);
				}
			} 

			$c=Config::where('name','osssender')->find();
			if(!$c){
				$c=new Config;
			}
			$c->appid=appid();
			$c->name='osssender';
			$c->value=json_encode($result);
			$c->save();

			$d=Config::where('name','osstype')->find();
			if(!$d){
				$d=new Config;
			}
			$d->appid=appid();
			$d->name='osstype';
			$d->value=$type;
			$d->save(); 
			return message('保存成功',true); 
		}
	}
}