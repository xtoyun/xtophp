<?
namespace addons\goods\admin;

use addons\goods\model\Goods as ProductModel; 
use addons\goods\model\GoodsCategory as ProductCategoryModel;


class Product extends Base{
	public function lists(){ 
		return $this->fetch('product/lists');
	}
	public function add(){ 
		return $this->fetch('product/add');
	}
	public function entry(){
		$this->assign('cates',ProductCategoryModel::select());
		return $this->fetch('product/entry');
	}

	public function category(){ 
		return $this->fetch('product/category');
	}

	public function get_product(){
		if (request()->ispost()) {
			$arid = input('id');

			$article = ProductModel::find($arid);
			$article['cates']=$article->category->cateid_str;
			if ($article) {
				return json($article);			
			}
		}
	}

	public function data_list(){
		$where=[];
		if(!empty(input('title'))){
			$where['title']=input('title');
		} 
		$result=ProductModel::selectpage(10,$where,'pid desc')->toarray();//读取数据
	 
		return json($result); 
	}
  
	public function product_create(){
		if (request()->ispost()) {
			$data = $_POST; 
			$validate = new \addons\cms\validate\Product;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
			}


			$product = new ProductModel();
			if(isset($data['is_tui']) && $data['is_tui']=='on'){
				$data['is_tui']=1;
			}else{
				$data['is_tui']=0;
			}
			if(isset($data['is_top']) && $data['is_top']=='on'){
				$data['is_top']=1;
			}else{
				$data['is_top']=0;
			}
			if(isset($data['is_home']) && $data['is_home']=='on'){
				$data['is_home']=1;
			}else{
				$data['is_home']=0;
			}
			if(isset($data['is_hot']) && $data['is_hot']=='on'){
				$data['is_hot']=1;
			}  else{
				$data['is_hot']=0;
			} 
			
			$product->appid=appid();
			$result = $product->save($data);
			if ($result) {
				// $specs=json_decode($data['spec']);
				// if ($specs) {
				// 	foreach ($specs as $key => $value) {
				// 		$spec=new ProductSpecs;
				// 		$spec->pid=$product->pid;
				// 		$spec->title=$value->title;
				// 		$spec->specs=$value->specs;
				// 		$spec->price=$value->price;
				// 		$spec->m_price=$value->m_price;
				// 		$spec->stor=$value->stor;
				// 		$spec->appid=appid();
				// 		$spec->save();
				// 		if($spec->title=='默认'){
				// 			$product->d_spid=$spec->spid;
				// 			$product->price=$spec->price;
				// 			$product->save();
				// 		}
				// 	}
				// }
				return message('商品添加成功',true);
			}
			return message('商品添加失败',false);
		}	
	}

	public function product_update(){
		if (request()->ispost()) {
			$data = $_POST; 
			$pid = input('pid');
			$validate = new \addons\cms\validate\Product;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
			}
			$product = ProductModel::find($pid);
			if($product){
				if(isset($data['is_tui']) && $data['is_tui']=='on'){
					$data['is_tui']=1;
				}else{
					$data['is_tui']=0;
				}
				if(isset($data['is_top']) && $data['is_top']=='on'){
					$data['is_top']=1;
				}else{
					$data['is_top']=0;
				}
				if(isset($data['is_home']) && $data['is_home']=='on'){
					$data['is_home']=1;
				}else{
					$data['is_home']=0;
				}
				if(isset($data['is_hot']) && $data['is_hot']=='on'){
					$data['is_hot']=1;
				}  else{
					$data['is_hot']=0;
				} 
				
				$result = $product->allowField(true)->save($data);

				// //更新规格
				// $specs=json_decode($data['spec']);				 
				// if ($specs) {
				// 	 $result=ProductSpecs::where('pid',$product->pid)->delete();
				// 	foreach ($specs as $key => $value) {
				// 		$spec=new ProductSpecs;
				// 		$spec->pid=$product->pid;
				// 		$spec->title=$value->title;
				// 		$spec->specs=$value->specs;
				// 		$spec->price=$value->price;
				// 		$spec->m_price=$value->m_price;
				// 		$spec->stor=$value->stor;
				// 		$spec->appid=appid();
				// 		$spec->save();
				// 		if($spec->title=='默认'){
				// 			$product->d_spid=$spec->spid;
				// 			$product->price=$spec->price;
				// 			$product->save();
				// 		}
				// 	}
				// }
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

	public function get_product_category_data(){
		$cateid=input('cateid'); 
		if(empty($cateid)) $cateid=-1;

		$condition['parent_cateid']=$cateid;
		if(!empty($current_id)){
			$condition['cateid']=['<>',$current_id]; 
		}
		
		$list=ProductCategoryModel::where($condition)->select()->toarray();
		$result=[];
		foreach ($list as $key => $value) {
			$count=ProductCategoryModel::where(['parent_cateid'=>$value['cateid']])->count();
			$result[$key]=[
				'value'=>$value['cateid'],
				'label'=>$value['catename'],
				'haveChildren'=>($count>0?true:false)
			];
		}
		return json($result);
	}

	public function get_category_list(){
		$where=[];
		if(!empty(input('catename'))){
			$where['catename']=input('catename');
		} 
		 
		$result=ProductCategoryModel::selectpage(99,$where,'cateid desc')->toarray();//读取数据
	 
	 	$res=['code'=>0,
	 	'count'=>$result['total'],
	 	'msg'=>'',
	 	'data'=>$result['data']];
		return json($res); 
	}

	public function create_category_post(){
		if(request()->ispost()){
			$catename = input('catename');
			$order = input('order');
			$parent_cateid = input('parent_cateid');
			$parent_ids=input('parent_ids');

			if(empty($catename)){
				return message('名称不能为空',false);
			}
			if(empty($parent_cateid)) $parent_cateid=-1;

			$category = new ProductCategoryModel();
			$category->catename = $catename;
			$category->parent_ids=$parent_ids;
			$category->parent_cateid = $parent_cateid;
			$category->img1 = input('img1');
			$category->order = (empty($order)?0:$order);
			$category->appid=appid();

			$result = $category->save();

			if($result){
				return message('保存成功',true);
			}
		}
		return message('保存失败',false);
	}
 
	public function edit_category_post(){
        if(request()->ispost()){
 			$catename = input('catename');
 			$order = input('order');
 			$cateid = input('cateid');

	 		$category_item = ProductCategoryModel::find($cateid);
	 		if($category_item->parent_cateid==$cateid){
 				return message('请选择其他分类',false);
 			}
	 		if ($category_item) {
	 			$category_item->catename = $catename;
	 			$category_item->order = $order;
	 			$category_item->appid=appid();
	 			$result = $category_item->force()->save();
	 			if ($result) {
	 				return message('保存成功',true);
	 			}
	 		}
	        return message('保存失败',false);
		}
	}

	public function delete_category_post(){
		if (request()->ispost()) {
			$cateid = input('id');
			$category_item = ProductCategoryModel::get($cateid,'GoodsList');
			if ($category_item) {
				$result = $category_item->together('GoodsList')->delete();
				if($result){
					return message('删除成功',true);
				}
			}
		}
		return message('删除失败',false);
 	}
}