<?php

namespace xto\addons;

use think\View;

/**
 * 插件类
 */
abstract class Addons extends \xto\template\BaseController{
    /**
     * 视图实例对象
     * @var view
     * @access protected
     */
    protected $view = null;

    /**
     * $info = array(
     *  'name'=>'Editor',
     *  'title'=>'编辑器',
     *  'description'=>'用于增强整站长文本的输入和显示',
     *  'status'=>1,
     *  'author'=>'thinkphp',
     *  'version'=>'0.1'
     *  )
     */
    public $info                =   array();
    public $addon_path          =   '';
    public $config_file         =   '';
    public $custom_config       =   '';
    public $admin_list          =   array();
    public $custom_adminlist    =   '';
    public $access_url          =   array();

    /**
     * 基类构造函数
     * Base constructor.
     */
    public function __construct()
    {  
    	// 获取当前插件目录
        //$this->addon_path = ADDON_PATH . $this->getName() . DS;
        $func = new \ReflectionClass(get_class($this));  
        $this->addon_path = str_replace('Addons.php','',$func->getFileName());
        //die;
        //dump($func->getPath());
        // 读取当前插件配置信息
        //if (is_file($this->addon_path . 'config.php')) {
         //   $this->config_file = $this->addon_path . 'config.php';
        //}
        // 初始化视图模型
        $config = ['view_path' => $this->addon_path];
        $config = array_merge(config('template'), $config);
        $this->view = new View($config, config('view_replace_str'));
        // 控制器初始化
        //if (method_exists($this, '_initialize')) {
        //    $this->_initialize();
        //}
    }

    /**
     * 模板主题设置
     * @access protected
     * @param string $theme 模版主题
     * @return Action
     */
    final protected function theme($theme)
    {
        $this->view->theme($theme);
        return $this;
    }

    /**
     * 模板变量赋值
     * @access protected
     * @param mixed $name 要显示的模板变量
     * @param mixed $value 变量的值
     * @return Action
     */
    final protected function assign($name, $value='')
    {
        $this->view->assign($name,$value);
        return $this;
    }


    //用于显示模板的方法
    final public function fetch($template = '', $vars = [], $replace = [], $config = [])
    {
        if (!is_file($template)) {
            $template = '/view/' . $template;
        }
        // 关闭模板布局
        $this->view->engine->layout(false);
        echo $this->view->fetch($template, $vars, $replace, $config);
    }

        /**
     * 渲染内容输出
     * @access public
     * @param string $content 内容
     * @param array $vars 模板输出变量
     * @param array $replace 替换内容
     * @param array $config 模板参数
     * @return mixed
     */
    //public function display($content, $vars = [], $replace = [], $config = [])
    //{
        // 关闭模板布局
     //   $this->view->engine->layout(false);
      //  echo $this->view->display($content, $vars, $replace, $config);
    //}

     /**
     * 渲染内容输出
     * @access public
     * @param string $content 内容
     * @param array $vars 模板输出变量
     * @return mixed
     */
    public function show($content, $vars = [])
    {
        // 关闭模板布局
        $this->view->engine->layout(false);
        echo $this->view->fetch($content, $vars, [], [], true);
    }

    /**
     * 获取插件名
     * @return string
     */
    final public function getName()
    {
        $class = get_class($this);
        list($space, $name, $class) = explode('\\', $class);

        return $name;
    }

    /**
     * 检查配置信息是否完整
     * @return bool
     */
    final public function checkInfo()
    {
        $info_check_keys = array('name','title','description','status','author','version');
        foreach ($info_check_keys as $value) {
            if(!array_key_exists($value, $this->info))
                return false;
        }
        return true;
    }

    /**
     * 获取插件的配置数组
     */
    final public function getConfig($name = '')
    {
        static $_config = [];
        if(empty($name)){
            $name = $this->getName();
        }
        if(isset($_config[$name])){
            return $_config[$name];
        }

        $map['name']    =   $name;
        $map['status']  =   1;
        $config  =   M('Addons')->where($map)->getField('config');
        if($config){
            $config   =   json_decode($config, true);
        }else{
            $config =   [];
            $temp_arr = include $this->config_file;
            foreach ($temp_arr as $key => $value) {
                if($value['type'] == 'group'){
                    foreach ($value['options'] as $gkey => $gvalue) {
                        foreach ($gvalue['options'] as $ikey => $ivalue) {
                            $config[$ikey] = $ivalue['value'];
                        }
                    }
                }else{
                    $config[$key] = $temp_arr[$key]['value'];
                }
            }
        }
        $_config[$name]     =   $config;
        return $config;
    }

    /**
     * 必须实现安装
     * @return mixed
     */
    abstract public function install();

    /**
     * 必须卸载插件方法
     * @return mixed
     */
    abstract public function uninstall();
}