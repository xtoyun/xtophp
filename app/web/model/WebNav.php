<?php

namespace app\web\model;

use app\data\Model;

class WebNav extends Model{
	protected $pk="nid"; 

	public function model()
    { 
        return $this->hasOne('WebModel','mid','model_id');
    } 
    public function sublist()
    { 
        return $this->hasMany('WebNav','pid','nid');
    }

    public function get_parent_data($pid){
        return $this::where("pid=$pid")->select();
    }

    public function get_data($pid=0,$issub=false){ 
        $list=$this->get_parent_data($pid);
        $info=[];

        foreach ($list as $key => $value) {
   
            $link=$value['url'];
            if (!empty($link)) {
                $icon='/app/web/view/admin/res/images/url.gif';
            }else{
                $icon='';
            } 
            switch ($value->model->controller) {
                case 'article':
                    $link=url('article/index').'?nid='.$value['nid'];
                    $icon='/app/web/view/admin/res/images/folder.gif';
                    break;
                case 'product':
                    $link=url('product/index').'?nid='.$value['nid'];
                    $icon='/app/web/view/admin/res/images/folder.gif';
                    break;
                case 'about':
                    $link=url('about/edit').'?nid='.$value['nid'];
                    $icon='/app/web/view/admin/res/images/file.gif';
                    break;
            }
            
            $info[]=[
                'id'        => $value['nid'],
                'text'      => $value['title'],
                'state'     => ["opened" => true],
                'icon'      => $icon,
                'link'      =>$link,
                'children'  => $this->get_data($value['nid'],true)//检查是否有子栏目
            ];
        }
        return $info;
    }
}