<?php
namespace app\api\auth;

use think\Request;

class BasicAuth extends Basic
{
    public static function auth($auth)
    {
        $request = Request(); 
        return $auth->authenticate($request);
    }

    public function getUser()
    {
        return $this->getUserInfo();
    }
    /**
     * 获取用户信息后 验证权限,
     * @param Request $request
     * @return bool
     */
    public function certification(Request $request)
    { 
        return ($this->username == 'test' && $this->password == 'test') ? true : false;
    }
    /**
     * 获取用户信息
     * @return mixed
     */
    public function getUserInfo()
    {
        return [
            'client_id' => $this->username,//app_id
            'secret' => $this->password,
            'name' => 'test_client'
        ];
    }
}