<?php

namespace addons\cms;

use addons\AddonsConfig;

class Config extends AddonsConfig{
	 public function menu(){
        $menu = [
            [
              'menu_name' => '网站管理',
              'controller' => 'index',
              'method' => 'index',
              'parent' => [],
              'url' => 'index/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => 'layui-icon-website',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '下载管理',
              'controller' => 'download',
              'method' => 'index',
              'parent' => ['module' => 'cms', 'controller' => 'index',  'method' => 'index'],
              'url' => 'download/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '列表管理',
              'controller' => 'download',
              'method' => 'lists',
              'parent' => ['module' => 'cms', 'controller' => 'download',  'method' => 'index'],
              'url' => 'download/lists',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '分类管理',
              'controller' => 'download',
              'method' => 'category',
              'parent' => ['module' => 'cms', 'controller' => 'download',  'method' => 'index'],
              'url' => 'download/category',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '文章管理',
              'controller' => 'article',
              'method' => 'index',
              'parent' => ['module' => 'cms', 'controller' => 'index',  'method' => 'index'],
              'url' => 'article/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '添加文章',
              'controller' => 'article',
              'method' => 'add',
              'parent' => ['module' => 'cms', 'controller' => 'article',  'method' => 'index'],
              'url' => 'article/add',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '文章列表',
              'controller' => 'article',
              'method' => 'lists',
              'parent' => ['module' => 'cms', 'controller' => 'article',  'method' => 'index'],
              'url' => 'article/lists',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '文章类别',
              'controller' => 'article',
              'method' => 'category',
              'parent' => ['module' => 'cms', 'controller' => 'article',  'method' => 'index'],
              'url' => 'article/category',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '单页管理',
              'controller' => 'about',
              'method' => 'index',
              'parent' => ['module' => 'cms', 'controller' => 'article',  'method' => 'index'],
              'url' => 'about/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            // [
            //   'menu_name' => '商品管理',
            //   'controller' => 'product',
            //   'method' => 'index',
            //   'parent' => ['module' => 'cms', 'controller' => 'index',  'method' => 'index'],
            //   'url' => 'product/index',
            //   'is_menu' => 1,
            //   'is_dev' => 0,
            //   'sort' => 9,
            //   'desc' => '',
            //   'picture' => '',
            //   'icon_class' => '',
            //   'is_control_auth' => 1,
            // ],
            // [
            //   'menu_name' => '添加商品',
            //   'controller' => 'product',
            //   'method' => 'add',
            //   'parent' => ['module' => 'cms', 'controller' => 'product',  'method' => 'index'],
            //   'url' => 'product/add',
            //   'is_menu' => 1,
            //   'is_dev' => 0,
            //   'sort' => 9,
            //   'desc' => '',
            //   'picture' => '',
            //   'icon_class' => '',
            //   'is_control_auth' => 1,
            // ],
            // [
            //   'menu_name' => '商品列表',
            //   'controller' => 'product',
            //   'method' => 'lists',
            //   'parent' => ['module' => 'cms', 'controller' => 'product',  'method' => 'index'],
            //   'url' => 'product/lists',
            //   'is_menu' => 1,
            //   'is_dev' => 0,
            //   'sort' => 9,
            //   'desc' => '',
            //   'picture' => '',
            //   'icon_class' => '',
            //   'is_control_auth' => 1,
            // ],
            // [
            //   'menu_name' => '商品类别',
            //   'controller' => 'product',
            //   'method' => 'category',
            //   'parent' => ['module' => 'cms', 'controller' => 'product',  'method' => 'index'],
            //   'url' => 'product/category',
            //   'is_menu' => 1,
            //   'is_dev' => 0,
            //   'sort' => 9,
            //   'desc' => '',
            //   'picture' => '',
            //   'icon_class' => '',
            //   'is_control_auth' => 1,
            // ],
            [
              'menu_name' => '其他管理',
              'controller' => 'other',
              'method' => 'index',
              'parent' => ['module' => 'cms', 'controller' => 'index',  'method' => 'index'],
              'url' => 'other/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '轮播图',
              'controller' => 'relay',
              'method' => 'index',
              'parent' => ['module' => 'cms', 'controller' => 'other',  'method' => 'index'],
              'url' => 'relay/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ],
            [
              'menu_name' => '友情链接',
              'controller' => 'link',
              'method' => 'index',
              'parent' => ['module' => 'cms', 'controller' => 'other',  'method' => 'index'],
              'url' => 'link/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ]
            ,
            [
              'menu_name' => '关键字管理',
              'controller' => 'keyword',
              'method' => 'index',
              'parent' => ['module' => 'cms', 'controller' => 'other',  'method' => 'index'],
              'url' => 'keyword/index',
              'is_menu' => 1,
              'is_dev' => 0,
              'sort' => 9,
              'desc' => '',
              'picture' => '',
              'icon_class' => '',
              'is_control_auth' => 1,
            ]

            ,
            [
              'menu_name' => '网站配置',
              'controller' => 'config',
              'method' => 'index',
              'parent' => ['module' => 'cms', 'controller' => 'index',  'method' => 'index'],
              'url' => 'config/index',
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