<?
namespace app\admin\admin;

use app\data\model\Fields as FieldModel; 
use app\data\model\Cmodel;

class Field extends BaseController{

	public function index(){ 
		//$this->dao->setQuickSearch(input('keyword'),input('field'),'c');
		//$this->dao->setorder('fid','desc');
		//$this->dao->map['mid']=input('mid');
		$list=FieldModel::selectpage(20,'mid='.input('mid'));
		return $this->template
				->TableTemplate
				->setNav(true)
				->setOption(false)
				->setData('modulename','模板管理')
				->setTitle('字段管理')
				->addTopButton('','创建',url('field/create').'?mid='.input('mid'))
				->addColumnButton('delete','删除',url('field/post_delete')) 
				//->addColumnButton('','',url('field/create').'?fid=$fid&mid='.input('mid'),'','fa fa-pencil')
				//->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($list)
				->setQuickSearch('title','')
				->setPid('fid')
				->setColumns([
					['fid', '编号'], 
					['title', '显示名称'], 
					['name', '字段名称'], 
					['type', '表单类型'], 
					['sql_type', '数据类型'], 
					['value', '默认值'], 
					['button', '操作', 'btn'] 
				])
				->fetch();
	}

	public function create(){
		$mid=input('mid');
		$fid=input('fid');
		if(empty($mid)){
			$this->error('请选择模型');
			return;
		} 
		$submit_text=url('field/post_create');
		$data=[
			'文本框'=>'text',
			'列表'=>'select',
			'时间'=>'date',
			'时间范围'=>'deterange',
			'邮件'=>'email',
			'图标'=>'iconpicker',
			'图片'=>'image',
			'密码'=>'password',
			'电话'=>'phone',
			'单选'=>'radio',
			'开关'=>'switch',
			'标签'=>'tags',
			'多文本框'=>'textarea',
			'富文本'=>'ueditor', 
		];
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				//->addLeftBlock('nav','选择栏目','nav')
				->addNav('','创建字段',url('field/create'))
				->addNav('','列表',url('field/index'),'?mid='.$mid)
				->setTitle('添加类别')
				->addFormItems([ 
						['select','type','表单类型','',$data],
						['text', 'title', '显示名称', ''],
						['text', 'name', '字段名称', ''],
						['text','sql_type','数据类型','例：varchar(255)'],
						['hr'],
						['text', 'value', '默认值', ''],
						['text', 'remark', '备注', ''],
						['hidden', 'mid', $mid],
					])
				->setDataSource(Cmodel::find($fid))
				->submit($submit_text)
				->setPid('fid',$fid)
				->fetch();
	}

	public function post_create(){
		if(request()->ispost()){
			$data=request()->param();
			if(empty(input('name'))){
				return message('名称不能为空',false);
			}
			$status=false;
			$fieldmodel=FieldModel::find(input('fid'));
			if(!$fieldmodel){
				$fieldmodel=new FieldModel;
			}
			$status=$fieldmodel->save($data);
			if ($status) {
				return message('提交成功',true);
			}
			
		}
		return message('提交失败，或是字段重复，首字符为英文字母',false);
	}

	public function delete_post(){
		if(request()->ispost()){
			$id 	=input('id'); 
			$data=FieldModel::find($id);
			if ($data) {
				$data->delete();
				return message('删除成功',true);
			} 
		}
		return message('删除失败',false);
	}
}