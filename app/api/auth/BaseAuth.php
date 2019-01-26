<?php

namespace app\api\auth;


use app\api\exception\UnauthorizedException;
use think\Exception;
use think\Request;

class BaseAuth
{
    /**
     * 执行授权验证
     * @param $auth
     * @return bool
     * @throws AuthException
     * @throws Exception
     */
    public static function auth($auth)
    { 
        $request = Request();
        
        $result= $auth->authenticate($request); 
        return $result;
    }

    public static function getuser($auth)
    { 
        return $auth->getuser();
    }

}