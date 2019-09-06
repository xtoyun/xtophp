<?
namespace app\web\home;
 

class Sever extends BaseController{
	public function _empty(){ 
		$action 	=$this->action(); 
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
		return $this->fetch('sever/'.$action); 		
	}
}