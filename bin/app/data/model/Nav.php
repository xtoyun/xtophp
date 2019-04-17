<?php

namespace app\data\model;

use app\data\Model;

class Nav extends Model{
	protected $pk='nid'; 

	public function cmodel()
    { 
        return $this->hasOne('Cmodel','mid','model_id');
        //return Cmodel::overall(false)->find($this->model_id);
    } 

    public function smodel(){
        return Cmodel::overall(false)->find($this->model_id);
    }
 
    static function getlist($name){
        return parent::hasWhere('cmodel')->where('name',$name)->select(); 
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
            if($value->model){
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