<?
namespace app\web\admin;

use app\web\model\WebArticle;
use app\web\model\WebArticleCategory;
use app\web\model\WebContent;

class Article extends BaseController{

	public function index(){
		$where=[];
		if (!empty(input('field'))) {
			$where=[[input('field'),'like',input('keyword').'%']];
		}  
		$where['nid']= input('nid');
		$list = WebArticle::selectpage(15,$where);//直接用selectpage，里面有相关联的表
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('文章管理')
				->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete','删除',url('article/article_delete')) 
				->addNav('','文章列表',url('article/index'),'?nid='.input('nid')) 
				->addTopButton('','创建',url('article/create').'?nid='.input('nid'))
				->addColumnButton('','修改',url('article/edit').'?id=$arid&nid='.input('nid'),'','fa fa-pencil')
				->setQuickSearch('title','')
				->setPid('arid')
				->setColumns([
					['arid', '编号'],
					['title', '文章标题','link','?id=$arid'], 
					['catename', '类别编号'],
                    ['author', '作者'],
					['create_time', '发布时间'], 
                    ['button', '操作', 'btn']
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
		foreach (WebArticleCategory::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}  

		$fields=[['checkbox', 'selfin', '自定义', '',[
							'推荐'=>'tj',
							'置顶'=>'zd'
							
						],'tj'],
						['select','cateid','文章类别','',$data],
						['text', 'title', '文章标题', ''],
						['image', 'img', '图片', ''],
						['ueditor', 'content', '文章内容', ''],
						['text', 'order', '排序', ''],
						['tags', 'keywords', '关键字', ''],
						['text', 'author', '作者', ''],
						['textarea', 'description', '描述', ''],
						['date','update_time','发布时间',''],
					];
		
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addLeftBlock('nav','选择栏目','nav')
				->addNav('','创建文章',url('article/create'))
				->addNav('','文章列表',url('article/index').'?nid='.input('nid'))
				->setTitle('添加文章')
				->addFormItems($fields)
				->submit(url('article/article_create'),'')
				->setPid('nid',$nid)
				->addFormItems([
					])
				->fetch();
	}
	public function delete_post(){
		if (request()->ispost()) {
			$arid = input('id');
			$article = WebArticle::find($arid,'content');
			if ($article) {
				$result = $article->together('content')->delete();
				
				if ($result) {
					return message('删除成功',true);
				}
			}
			return message('删除失败',false);
		}
	}

	public function edit(){
		$arid=input('id'); 
		$article_item = WebArticle::getinfo($arid);

		$data=[];
		foreach (WebArticleCategory::select() as $key => $value) {
			$data[$value['catename']]=$value['cateid'];
		}
		$fields=[['checkbox', 'selfin', '自定义', '',[
							'置顶'=>'zd',
							'推荐'=>'tj'
						]],
						['select','cateid','文章类别','',$data],
						['text', 'title', '文章标题', ''],
						['image', 'img', '选择图片', ''],
						['ueditor', 'content', '文章内容', ''],
						['text', 'order', '排序', ''],
						['tags', 'keywords', '关键字', ''],
						['text', 'author', '作者', ''],
						['textarea', 'description', '描述', ''],
					];
		
		return $this->template
				->FormTemplate 
				->setData('modulename','基础设置') 
				->addNav('','编辑文章',url('article/edit'),'?id='.$arid)
				->addNav('','文章列表',url('article/index').'?nid='.input('nid'))
				->setTitle('编辑文章')
				->addLeftBlock('nav','选择栏目','nav')
				->addFormItems($fields)
				->setDataSource($article_item)
				->setPid('arid',$arid)
				->submit(url('article/article_update'),'')
				->fetch();
	}

	public function article_create(){
		if(request()->ispost()){
			$data=$_POST;
			$validate = new \app\web\validate\Article;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
	        }
	        $article = new WebArticle();
	        $result = $article->save($data);
			if ($result) {
				return message('文章创建成功',true);
			}
			return message('文章创建失败',false); 
		}
	}

	public function article_update(){
		if (request()->ispost()) {
			$data=$_POST;
			$arid = input('arid'); 
			$validate = new \app\web\validate\Article;
			if (!$validate->check($data)) {
				return message($validate->getError(),false);
	        }
			$article = WebArticle::find($arid); 
			$result = $article->allowField(true)->save($data);
			if ($result) {
				return message('修改成功',true);
			}
		}
		return message('修改失败',false);
	}
	public function article_delete(){
		if(request()->ispost()){
			$id 	=input('id'); 
			if($this->dao->delete($id)){
				return Util::message('删除成功',true);
			}
		}
		return Util::message('删除失败',false);
	}
}