<?
namespace app\web\admin;

use xto\Util;
use app\web\dao\ArticleDao;
use app\web\dao\CategoryDao;
use app\web\dao\FieldDao;
use app\web\model\WebArticle;
use app\web\model\WebArticleCategory;

class Article extends BaseController{

	public function index(){
		$list = WebArticle::where(null)->order('arid desc')->paginate(10);
		return $this->template
				->TableTemplate 
				->setData('modulename','内容管理')
				->setTitle('文章管理')
				->addLeftBlock('nav','选择栏目','nav')
				->setDataSource($list)
				->setPager($list->render())
				->addColumnButton('delete','删除',url('article/article_delete')) 
				->addNav('','文章列表',url('article/index').'?arid='.input('arid')) 
				->addTopButton('','创建',url('article/create').'?arid='.input('arid'))
				->addColumnButton('','修改',url('article/edit').'?id=$arid'.'&arid='.input('arid'),'','fa fa-pencil')
				->setQuickSearch('title','')
				->setPid('arid')
				->setColumns([
					['arid', '编号'],
					['cid', '文章标题','link','?id=$arid'], 
					['cateid', '类别编号'],
                    ['catename', '上级栏目名称'],
					['update_time', '发布时间'], 
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
			$article_item = WebArticle::get($arid,'sublist');
			if ($article_item) {
				$result = $article_item->delete();
				if ($result) {
					return message('删除成功',true);
				}
			}
			return message('删除失败',false);
		}
	}

	public function edit(){
		$arid=input('id'); 
		$article_item = WebArticle::find($arid)->toArray();
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
			$cateid = input('cateid');
			$catename = input('catename');
			$title = input('title');
			$img = input('img');
			$content = input('content');
			$order = input('order');
			$keywords = input('keywords');
			$author = input('author');
			$description = input('description');
			$update_time = input('update_time');

			if (empty($cateid)) {
				return message('请选择文章类别',false);
			}

			if (empty($title)) {
				return message('文章标题不能为空',false);
			}
			if (empty($content)) {
				return message('文章内容不能为空',false);
			}

			$category_item = new WebArticle();
			$category_item->cateid = $cateid;
			$category_item->catename = $catename;
			$category_item->title = $title;
			$category_item->img = $img;
			$category_item->content = $content;
			$category_item->order = $order;
			$category_item->keywords = $keywords;
			$category_item->author = $author;
			$category_item->description = $description;
			$category_item->update_time = $update_time;

			$result = $category_item->save();
			if ($result) {
				return message('文章创建成功',true);
			}
			return message('文章创建失败',false);
		}
	}

	public function article_update(){
		if (request()->ispost()) {
			$arid = input('id');
			$cateid = input('cateid');
			$title = input('title');
			$img = input('img');
			$content = input('content');
			$order = input('order');
			$keywords = input('keywords');
			$author = input('author');
			$description = input('description');

		if (empty($cateid)) {
			return message('请选择类别',false);
		}
		if (empty($title)) {
			return message('请输入标题',false);
		}
		if (empty($content)) {
			return message('请输入内容',false);
		}

			$article_item = WebArticle::find($arid);
			$article_item->cateid = $cateid;
			$article_item->title = $title;
			$article_item->img = $img;
			$article_item->content = $content;
			$article_item->order = $order;
			$article_item->keywords = $keywords;
			$article_item->author = $author;
			$article_item->description = $description;

			$result = $article_item->save();
		if ($result) {
			return message('修改成功',true);
		}
		return message('修改失败',false);
	}
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