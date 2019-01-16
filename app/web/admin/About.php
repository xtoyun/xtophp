<?
namespace app\web\admin;

use xto\Util;
use app\web\dao\AboutDao;
use app\web\dao\CategoryDao;
use app\web\dao\FieldDao;

class About extends BaseController{
	private $dao;

	public function __construct(){
		parent::__construct();
		$this->dao=AboutDao::instance();
	}  

	public function edit(){
		$nid=input('nid'); 
		if(empty($nid)){
			$this->error('请选择栏目');
		}
		$fields=[
						['text', 'title', '标题', ''],
						['ueditor', 'content', '内容', ''],
						['text', 'order', '排序', ''],
						['tags', 'keywords', '关键字', ''],
						['textarea', 'description', '描述', ''],
					];
		//合并字段
		$f_dao=FieldDao::instance();			
		$fields=array_merge_recursive($fields,$f_dao->get_fields($this->dao->table));
		//去重
		$fields=Util::array_unset_tt($fields,1);
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑',url('about/edit'),'?nid='.$nid)
				->setTitle('编辑单页')
				->addLeftBlock('nav','选择栏目','nav')
				->addFormItems($fields)
				->setDataSource($this->dao->findByNav($nid))
				->setPid('nid',$nid)
				->submit(url('about/about_update'),'')
				->fetch();
	}

	public function about_update(){
		if(request()->ispost()){
			$data=request()->post();
			$this->dao->map['nid']=input('nid');
			if($this->dao->saveorupdate($data)){
				return Util::message('更新成功',true);
			}
		}
		return Util::message('更新失败',false);
	}
}