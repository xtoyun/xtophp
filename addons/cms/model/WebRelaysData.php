<?php

namespace addons\cms\model;

use data\Model;

class WebRelaysData extends Model{
	protected $pk="rdid"; 

	public function category()
    { 
        return $this->hasOne('WebRelays','rid','rid');
    }  
}