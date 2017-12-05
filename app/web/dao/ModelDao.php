<?php
namespace app\web\dao;

use xto\data\IDao;
 
class ModelDao extends IDao{
	public function __construct() {
		parent::__construct('web_model','mid'); 
	}  
}