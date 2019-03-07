<?php

namespace app\web\model;

use app\data\Model;

class WebRelays extends Model{
	protected $pk="rid"; 

    public function Items()
    { 
        return $this->hasMany('WebRelaysData','rid','rid');
    }
}