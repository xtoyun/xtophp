<?php
namespace app\web\dao;

use xto\data\Sql;
use xto\App;
use xto\Util;
use xto\membership\context\Users;

use xto\data\IDao;
use think\Db;

class LinkDao extends IDao{
	public function __construct() {
		parent::__construct('web_link','lid'); 
	}  
}