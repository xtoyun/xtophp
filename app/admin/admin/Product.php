<?
namespace app\admin\admin;

use data\model\WebProduct as ProductModel; 
use data\model\WebProductCategory as ProductCategoryModel;
 
use data\model\WebProductSpecs as ProductSpecs;

class Product extends BaseController{

	public function entry(){
		$this->assign('cates',ProductCategoryModel::select());
		return $this->fetch('product/entry');
	}

	public function data_list(){
		$where=[];
		if(!empty(input('title'))){
			$where['title']=input('title');
		} 
		$result=ProductModel::selectpage(10,$where,'pid desc')->toarray();//读取数据
	 
		return json($result); 
	}

	public function index(){
	    $where=[];
		if (!empty(input('field'))) {
			$where=[[input('field'),'like',input('keyword').'%']];
		}  
		$list = ProductModel::selectpage(10,$where,'a.order desc,a.pid desc');//直接用selectpage，里面有相关联的表
		  
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('商品管理')
				//->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete','删除',url('product_delete')) 
				->addColumnButton('','修改',url('edit').'?id=$pid','','fa fa-pencil')
				->addNav('','商品列表',url('index'),'?nid='.input('nid')) 
				->addTopButton('','创建',url('create').'?nid='.input('nid'))
				->setQuickSearch('title','')
				->setPid('pid')
				->setColumns([
					['pid','商品编号'],
					['title','名称'],
					['catename','类别'],
					['order','排序'],
					['create_time','发布时间'],
					['button','操作','btn'],
				])
				->fetch();
	}

	public function create(){
		$nid=input('nid');
		// if(empty($nid)){
		// 	$this->error('请选择栏目');
		// 	return;
		// }
		$data=[];
		foreach (ProductCategoryModel::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		$fields=[['checkbox', 'selfin', '自定义', '',[
							'推荐'=>'tj',
							'置顶'=>'zd',
							'热门'=>'rm'
							
						],''],
						['select','cateid','商品类别','',$data],
						['text', 'title', '商品名称', ''],
						['image', 'img1', '缩图', ''],
						['textarea', 'description', '商品描述', ''],
						['ckeditor', 'content', '商品介绍', ''],
						['paras', 'paras', '商品参数', ''],
						['specs', 'spec', '商品规格', ''],
						['text', 'order', '排序', ''],
						// ['text', 'nid','栏目id'],
						['tags', 'keywords', '关键字', ''],
						['hr', 'author', '发布者', ''],
						
					];

		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				//->addLeftBlock('nav','选择栏目','nav')
				->addNav('','创建商品',url('product/create'))
				->addNav('','商品列表',url('product/index').'?nid='.input('nid'))
				->setTitle('添加商品')
				->addFormItems($fields)
				->submit(url('create_post'))
				->setPid('nid',$nid)
				->fetch();
	}

	public function edit(){
		$pid = input('id'); 
		$product_item = ProductModel::find($pid)->toarray();

		$data=[];
		foreach (ProductCategoryModel::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		$fields=[['checkbox', 'selfin', '自定义', '',[
							'推荐'=>'tj',
							'置顶'=>'zd',
							'热门'=>'rm'
							
						],'tj'],
						['select','cateid','商品类别','',$data],
						['text', 'title', '商品名称', ''],
						['image', 'img1', '图片', ''],
						['textarea', 'description', '商品描述', ''],
						['ckeditor', 'content', '商品介绍', ''],
						['paras', 'paras', '商品参数', ''],
						['specs', 'spec', '商品规格', ''],
						['text', 'order', '排序', ''],
						// ['text', 'nid','栏目id'],
						['tags', 'keywords', '关键字', ''],
						['hr', 'author', '发布者', ''],
						
					];

		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑商品',url('edit'),'?id='.$pid)
				->addNav('','商品列表',url('index').'?nid='.input('nid'))
				->setTitle('编辑商品')
				->addFormItems($fields)
				->setDataSource($product_item)
				->setPid('pid',$pid)
				->submit(url('update_post'))
				->fetch();
	}


	public function create_post(){
		if (request()->ispost()) {
			$data = $_POST; 
			$validate = new \app\admin\validate\Product;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
			}


			$product = new ProductModel();
			if(isset($data['selfin'])){
				$data['is_tui']=0;
				$data['is_top']=0;
				$data['is_home']=0;
				$data['is_hot']=0;
				foreach ($data['selfin'] as $key => $value) {

					if($key=='tj' && $value=='on'){
						$data['is_tui']=1;
					}

					if($key=='zd' && $value=='on'){
						$data['is_top']=1;
					}
					if($key=='ts' && $value=='on'){
						$data['is_home']=1;
					}
					if($key=='lm' && $value=='on'){
						$data['is_hot']=1;
					}
				}  
				$data['selfin']=json_encode($data['selfin']);
		    } 
			
			$product->appid=appid();
			$result = $product->save($data);
			if ($result) {
				$specs=json_decode($data['spec']);
				if ($specs) {
					foreach ($specs as $key => $value) {
						$spec=new ProductSpecs;
						$spec->pid=$product->pid;
						$spec->title=$value->title;
						$spec->specs=$value->specs;
						$spec->price=$value->price;
						$spec->m_price=$value->m_price;
						$spec->stor=$value->stor;
						$spec->appid=appid();
						$spec->save();
						if($spec->title=='默认'){
							$product->d_spid=$spec->spid;
							$product->price=$spec->price;
							$product->save();
						}
					}
				}
				return message('商品添加成功',true);
			}
			return message('商品添加失败',false);
		}	
	}

	public function update_post(){
		if (request()->ispost()) {
			$data = $_POST; 
			$pid = input('pid');
			$validate = new \app\admin\validate\Product;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
			}
			$product = ProductModel::find($pid);
			if($product){
				if(isset($data['selfin'])){
					$data['is_tui']=0;
					$data['is_top']=0;
					$data['is_home']=0;
					$data['is_hot']=0;
					foreach ($data['selfin'] as $key => $value) {
						if($key=='tj' && $value=='on'){
							$data['is_tui']=1;
						}
						if($key=='zd' && $value=='on'){
							$data['is_top']=1;
						}
						if($key=='ts' && $value=='on'){
							$data['is_home']=1;
						}
						if($key=='lm' && $value=='on'){
							$data['is_hot']=1;
						}
					}  
					$data['selfin']=json_encode($data['selfin']);
			    }

				
				$result = $product->allowField(true)->save($data);

				//更新规格
				$specs=json_decode($data['spec']);				 
				if ($specs) {
					 $result=ProductSpecs::where('pid',$product->pid)->delete();
					foreach ($specs as $key => $value) {
						$spec=new ProductSpecs;
						$spec->pid=$product->pid;
						$spec->title=$value->title;
						$spec->specs=$value->specs;
						$spec->price=$value->price;
						$spec->m_price=$value->m_price;
						$spec->stor=$value->stor;
						$spec->appid=appid();
						$spec->save();
						if($spec->title=='默认'){
							$product->d_spid=$spec->spid;
							$product->price=$spec->price;
							$product->save();
						}
					}
				}
				if ($result) {

					return message('修改成功',true);
				}
			}
			
			return message('修改失败',false);
		}
	}

	public function delete_post(){
		if(request()->ispost()){
			$id 	=input('id'); 
			$info=ProductModel::find($id);
			if ($info) {
				$info->delete();
				return message('删除成功',true);
			} 
		}
		return message('删除失败',false);
	}

	public function delete_list_post(){
		$ids=input('ids');
		if($ids){
			foreach ($ids as $key => $value) {
				$info=ProductModel::find($value['pid']);
				if ($info) {
					$info->delete();				
				}
			}
			return message('删除成功',true); 
		}
		return message('删除失败',false); 
	}
}