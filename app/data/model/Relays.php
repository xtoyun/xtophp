<?php

namespace app\data\model;

use app\data\Model;

class Relays extends Model{
	protected $pk="rid"; 

    public function Items()
    { 
        return $this->hasMany('RelaysData','rid','rid');
    }
}