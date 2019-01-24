<?php
namespace app\data\api;

use app\data\membership\Users;

use think\Request;
/**
 * Class User
 * @title 用户接口
 * @url  /v1/user
 * @desc  用户信息相关接口
 * @version 1.0 
 */
class User extends Base
{
    //是否开启授权认证
    public $apiAuth = true; 
    //附加方法
    protected $extraActionList = ['sendCode'];
    //protected $extraActionList = ['sendCode'];
    //跳过鉴权的方法
    //protected $skipAuthActionList = ['sendCode'];
    /**
     * @title 发送CODE
     * @readme /doc/md/method.md
     */
    public function sendCode()
    {
        //send message
        return $this->sendSuccess(['code'=>000]);
    }

    public function authenticate(Request $request)
    {
        // TODO: Implement authenticate() method.
        return false;
    }

    /**
     * @title 获取列表
     * @return string name 名字
     * @return string id  id
     * @return integer age  年龄
     * @readme /doc/md/method.md
     */
    public function index()
    {
        //dump(input('limit'));
        return $this->sendSuccess('api');
    }
    /**
     * @title 创建用户
     * @param Request $request
     * @return string name 名字
     * @return string id  id
     * @return object user  用户信息
     * @readme /doc/md/method.md
     * @param  \think\Request $request
     */
    public function save(Request $request)
    {
        $data = $request->param();
        return $this->sendSuccess($data);
    }
    /**
     * @title 获取单个用户信息
     * @param  int $id
     * @return string name 名字
     * @return string id  id
     * @return object user  用户信息
     * @readme /doc/md/method.md
     * @return \think\Response
     */
    public function read($id)
    {
        $user=Users::find($id); 
        unset($user['password']);
        unset($user['salt']);
        unset($user['secret']);
        unset($user['token']);
        unset($user['password_format']);
        unset($user['password_question']);
        unset($user['password_answer']);
        return $this->sendSuccess($user);
    }

    public function create(){
        return $this->sendSuccess(null);
    }
    /**
     * 保存更新的资源
     *
     * @param  \think\Request $request
     * @param  int $id
     * @param  int $id
     * @title 更新用户
     * @return string name 名字
     * @return string id  id
     * @readme /doc/md/method.md
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        //
        $user=Users::find($id);
        $user->comment=$request->post('comment');
        $user->save();
        unset($user['password']);
        unset($user['salt']);
        unset($user['secret']);
        unset($user['token']);
        unset($user['password_format']);
        unset($user['password_question']);
        unset($user['password_answer']); 
        return $this->sendSuccess($user);
    }
    /**
     * 删除指定资源
     *
     * @param  int $id
     * @return object user  用户信息
     * @title 删除用户
     * @return \think\Response
     */
    public function delete($id)
    {
        return $this->sendSuccess(['user' => null], 'User delete failed.');
    }
}