<?php

namespace app\api\auth;


use app\api\contract\AuthContract;
use app\api\exception\UnauthorizedException;
use app\api\facade\Send;
use think\Exception;
use think\Request;
use think\facade\Session; 

abstract class OAuth implements AuthContract
{
    use Send;
    /**
     * client_id
     *
     * @var
     */
    protected $client_id;
    /**
     * secret
     *
     * @var
     */
    protected $secret;
    /**
     * @var
     */
    protected $access_token;
    /**
     * 过期时间秒数
     *
     * @var int
     */
    public static $expires = 72000;

    /**
     * 客户端信息
     *
     * @var
     */
    public $clientInfo;

    /**
     * 用户信息
     *
     * @var
     */
    public $user;
    /**
     * accessToken存储前缀
     *
     * @var string
     */
    public static $accessTokenPrefix = 'accessToken_';

    /**
     * accessTokenAndClientPrefix存储前缀
     *
     * @var string
     */
    public static $accessTokenAndClientPrefix = 'accessTokenAndClient_';

    /**
     * 认证授权 通过用户信息和路由
     * @param Request $request
     * @return \Exception|UnauthorizedException|mixed|Exception
     * @throws UnauthorizedException
     */
    final function authenticate(Request $request)
    {
        //获取AccessToken 没有则会抛出异常
        try {
            $this->getAccessToken($request);
            //验证授权
            return $this->certification($request);
        } catch (UnauthorizedException $e) {
            throw new  UnauthorizedException('Bearer', $e->getMessage());
        } catch (Exception $e) {
            throw new  UnauthorizedException('Bearer', 'Invalid authentication credentials.');
        }

    } 

    /**
     * 客户端获取access_token
     * @param Request $request
     */
    abstract public function accessToken(Request $request);

    /**
     * 获取用户信息
     * @param Request $request
     * @return $this
     * @throws UnauthorizedException
     */
    public function getClient(Request $request)
    {

        //先行验证是否有传参
        $this->client_id = $request->param('client_id', null);
        $this->secret = $request->param('secret', null);

        if ($this->client_id && $this->secret) return $this;
        //没有再获取
        try {
            $authorization = $request->header('authorization');
            $authorization = str_replace("Basic ", "", $authorization);
            $authorization = explode(':', base64_decode($authorization));
            $username = $authorization[0];//$_SERVER['PHP_AUTH_USER']
            $secret = $authorization[1];//$_SERVER['PHP_AUTH_PW']

            $this->client_id = $username;
            $this->secret = $secret;
        } catch (Exception $e) {
            throw new UnauthorizedException();
        }

        return $this;
    }

    /**
     * 获取请求的access_token
     * @return string
     * @throws UnauthorizedException
     */
    public function getAccessToken()
    {
        $request = Request();
        //先行验证是否有传参
        $this->access_token = $request->param('access_token', null);


        if ($this->access_token) return $this;
 
        $authorization = $request->header('authorization');
        $session_token=Session::get('access_token');

        if (strpos($authorization, 'token ') !== false) {
            $authorization = trim(str_replace("token ", "", $authorization));
            $this->access_token = $authorization;
        }if($session_token){
            $this->access_token = $session_token;
        } else {
            throw new  UnauthorizedException('token', 'Invalid authentication credentials.');
          }

        return $this;

    }

    /**
     * 获取用户信息后 验证权限
     * @return mixed
     */
    abstract public function certification();

    /**
     * 获取用户信息
     * @return mixed
     */
    abstract public function getUser();

}