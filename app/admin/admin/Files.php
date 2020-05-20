<?
namespace app\admin\admin;

use data\model\SysImgs;

class Files extends BaseController{
	public function load(){

		$where="img <>''";
		$imgs=SysImgs::where($where)->limit(100)->select();
		// $data=[
		//     [
		//       "smUrl"=>"https://pic.qqtn.com/up/2018-9/15367146917869444.jpg",
		//       "hasSm"=>true,
		//       "name"=>"微信图片_20180423140441.jpg",
		//       "updateTime"=>1545804396000,
		//       "type"=>"file",
		//       "url"=>"https://pic.qqtn.com/up/2018-9/15367146917869444.jpg",
		//       "isDir"=> false
		//     ]
		// ];
		$data=[];
		foreach ($imgs as $key => $value) {
			$data[$key]=[
				'smUrl'=>$value['img'],
				'name'=>$value['appid'],
				'updateTime'=>$value['update_time'],
				'type'=>'file',
				'url'=>$value['img'],
				"isDir"=> false
			];
		}

		$result= [
			'msg'=>'ok',
			'code'=>200,
			'data'=>$data
		];
		return json($result);
	}
}