<?php

namespace app\web\model;

use app\data\Model;
use think\Db;

class WebProduct extends Model{
	protected $pk="pid"; 
	
	public function parent()
    { 
        return $this->hasOne('WebProduct','pid','pid');
    }

    public function sublist()
    { 
        return $this->hasMany('WebProduct','pid','pid');
    }

    public function ArticleCount(){
    	return Db::view('WebProduct')->where('pid',$this->pid)->count(); 
    }

    private $is_update=true;

    public function Content()
    { 
        $result = $this->hasOne('WebContent','cid','cid');
        //dump($result->toArray());
        if (empty($result->toArray())) {
            $this->is_update=false;
            $result= new WebContent();
        }
        return $result;
    }

    public function updateProduct(){
        $this->force()->save();

        $this->content()->isupdate($this->is_update)->save();
    }
}