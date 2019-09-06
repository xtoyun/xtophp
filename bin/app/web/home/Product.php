<?
namespace app\web\home;
 
class Product extends BaseController{
	public function _empty(){
		
		$action ='';
		$action 	=$this->action();//自定义类型
		$id=input('id');
		if ($id) {
			$info=\app\data\model\Product::find($id);
			if ($info) {
				//直接更新阅读数
				$info->reads=$info->reads+1;
				$info->isAutoWriteTimestamp(false)->save(); 
				$this->assign('info',$info);
			}
		}
		return $this->fetch('product/'.$action); 		
	}
}