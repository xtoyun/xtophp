<?php

namespace addons\goods;

use addons\AddonsConfig;

class Config extends AddonsConfig{
	 public function menu(){
        $menu = [
            [
              'menu_name' => '商品管理',
              'controller' => 'index',
              'method' => 'index',
              'parent' => [],
              'url' => 'index/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => 'layui-icon-list',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '添加商品',
              'controller' => 'product',
              'method' => 'add',
              'parent' => ['module' => 'goods', 'controller' => 'index',  'method' => 'index'],
              'url' => 'product/add',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '商品列表',
              'controller' => 'product',
              'method' => 'lists',
              'parent' => ['module' => 'goods', 'controller' => 'index',  'method' => 'index'],
              'url' => 'product/lists',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '商品类别',
              'controller' => 'product',
              'method' => 'category',
              'parent' => ['module' => 'goods', 'controller' => 'index',  'method' => 'index'],
              'url' => 'product/category',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ]
        ];
        return $menu;
    }

    public function exesql(){
      

    }
}