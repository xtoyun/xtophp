<?php
namespace app\admin\addons\dashboard;

class Addons extends \xto\addons\Addons
{ 
    public function adminIndex($params = []){  
        echo $this->fetch('admin');
    }

    /**
     * 安装方法
     */
    public function install()
    {
        echo 'install';
        // TODO: Implement install() method.
    }

    /**
     * 卸载方法
     */
    public function uninstall()
    {
        // TODO: Implement uninstall() method.
    }
}