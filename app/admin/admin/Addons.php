<?
namespace app\admin\admin; 

use think\Db;
use data\core\AddonsCore;
use think\facade\Session; 

class Addons extends BaseController{

	public function index(){
		
		return $this->fetch('addons\index');
	}

	public function online(){
		
		return $this->fetch('addons\online');
	}

	public function download(){
		if (request()->ispost()) {
			$odid=input('odid');  
			$token=Session::get('yun_app_token'); 
			$data=httpCore("http://dev.xtysb.com/index.php?s=yunapp/api/download/id/$odid&token=$token");
			if($data['code']!=0){
				//成功下载地址
				return $data;
			}
		}
	}

	public function datalist(){
		$addonsCore=new AddonsCore();
		$data=$addonsCore->get_addons();

		$result=[
			'code'=>0,
			'msg'=>'ok',
			'count'=>$data['total_count'],
			'data'=>$data['data']
		];
		return json($result);
	}

	public function install(){
		if (request()->ispost()) {
			$name=input('name');
			$description=input('description');
			$event=input('event');
			$title=input('title');
			$icon=input('icon'); 

			$addcore=new AddonsCore();
			$result=0;
			switch ($event) {
				case 'install':
					$result=$addcore->install_addons($name,$title,$description,$icon);
					return message('安装成功',$result);
					break;
				case 'uninstall':
					$result=$addcore->uninstall_addons($name,$description);
					return message('卸载成功',$result);
					break; 
				default:
					# code...
					break;
			}
			
		}
	}

}