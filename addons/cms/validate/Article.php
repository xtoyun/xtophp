<?
namespace addons\cms\validate;

use think\Validate;

//文章验证器
class Article extends Validate
{
	protected $rule =   [
        'cateid'  => 'require',  
        'title'  => 'require|max:100',   
        'content'  => 'require',  
    ];

    protected $message  =   [
        'cateid.require' => '请选择文章类别',
        'title.require' => '文章标题必须',
        'title.max'     => '文章名称最多不能超过100个字符',  
        'content.require' => '文章内容必须',  

    ];

     // 自定义验证规则
    protected function checkName($value,$rule,$data=[])
    {
        return $rule == $value ? true : '名称错误';
    }
}