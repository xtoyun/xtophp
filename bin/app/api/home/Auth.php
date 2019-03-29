<?php
namespace app\api\home;

use app\api\auth\OauthAuth;
use think\Request;

class Auth
{
    public function accessToken()
    {
        $request = Request();  
        $OauthAuth = new OauthAuth(); 
        return $OauthAuth->accessToken($request);
    }
}