<?php

namespace addons\admininfo;

use think\Db;
use addons\Addons;

class AdmininfoAddons extends Addons
{
    public $info = [
        'name' => 'admininfo',
        'title' => '管理页面',
        'description' => '显示管理员默认登录后页面',
        'status' => 1,
        'author' => 'xtoyun',
        'version' => '0.1',
        'img'=>'/addons/admininfo/logo.png',
        'is_sys'=>1,
        'icon'=>''
    ];

    /**
     * 插件安装方法
     * @return bool
     */
    public function install()
    {
        return true;
    }

    /**
     * 插件卸载方法
     * @return bool
     */
    public function uninstall()
    {
        return true;
    }

    /**
     * 实现的 adminIndex 钩子方法
     * @param $param
     * @return mixed
     * @throws \Exception
     */
    public function info($param)
    {  
        return $this->fetch('/widget');
    }

}