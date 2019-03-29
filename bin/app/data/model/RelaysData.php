<?php

namespace app\data\model;

use app\data\Model;

class RelaysData extends Model{
	protected $pk="rdid"; 

	public function category()
    { 
        return $this->hasOne('Relays','rid','rid');
    }  
}