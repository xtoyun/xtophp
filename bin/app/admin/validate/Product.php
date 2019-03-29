<?
namespace app\admin\validate;

use think\Validate;

//文章验证器
class Product extends Validate
{
	protected $rule =   [
        'cateid'  => 'require',  
        // 'title'  => 'require|max:100',
        'content'  => 'require',  
    ];

    protected $message  =   [
        'cateid.require' => '请选择产品类别',
        // 'title.require' => '产品名称必须',
        // 'title.max'     => '产品名称最多不能超过100个字符', 
        'content.require' => '产品介绍必须',  

    ];

     // 自定义验证规则
    protected function checkName($value,$rule,$data=[])
    {
        return $rule == $value ? true : '名称错误';
    }
}