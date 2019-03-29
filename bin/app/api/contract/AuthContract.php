<?php
namespace app\api\contract;

use think\Request;

interface AuthContract
{ 
    /**
     * 认证授权通过客户端信息和路由等
     * @param Request $request
     */
    public function authenticate(Request $request);

    /**
     * 获取客户端信息
     * @param Request $request
     * @return mixed
     */
     function getClient(Request $request);

    /**
     * 获取用户信息
     * @return mixed
     */
     public function getUser();

}