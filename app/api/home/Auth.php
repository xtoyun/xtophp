<?php
namespace app\api\home;

use app\api\auth\OauthAuth;
use think\Request;

class Auth
{
    public function accessToken($data=[])
    {
        $request = Request(); 
        $request->param = array_merge($request->get(false),$data);
        $OauthAuth = new OauthAuth();
        return $OauthAuth->accessToken($request);
    }
 
}