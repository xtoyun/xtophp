<?php

namespace addons\admininfo;

use addons\AddonsConfig;

class Config extends AddonsConfig{
	 public function menu(){
        $menu = [
            [
              'menu_name' => '后台管理',
              'controller' => 'index',
              'method' => 'index',
              'parent' => [],
              'url' => 'index/index',
              'is_menu' => 0,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '后台管理',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ]
        ];
        return $menu;
    }
}