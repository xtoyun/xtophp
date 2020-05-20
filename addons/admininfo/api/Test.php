<?php
namespace addons\admininfo\api;

class Test extends \app\api\home\Base
{
	public function index(){
		return $this->outMessage("", 000,-1,'test');
	}
}