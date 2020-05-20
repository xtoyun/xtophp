<?php

namespace app\api\home;
 
class Index extends Base
{
    /**
     * 当前版本的路径
     */
    public function __construct()
    {
        parent::__construct();
    
    }
    /*
	 * api首页
	 */
	public function index()
	{
	    
	}

	public function ajaxApi()
	{
		$method = input("method", "");
		$param = input("param", "");
		if (empty($method)) {
			return [
				'title' => "javascript调用api",
				'data' => "",
				'code' => -400,
				'message' => "接口发生错误：method is not empty",
			];
		}
		if (!empty($param)) {
			$param = json_decode($param, true);
		}
		$res = api($method, $param);
		return $res;
	}
} 