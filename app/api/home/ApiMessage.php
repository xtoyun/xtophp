<?php
namespace app\api\home;

class ApiMessage
{
	
	public $code;
	
	public $message;
	
	public $data;
	
	public $title;
	
	public function __construct()
	{
		$this->code = 0;
		$this->title = '';
		$this->message = "success";
		$this->data = null;
	}
}