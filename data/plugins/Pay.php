<?
/**
 * ============================================================================
 * * 版权所有 2013-2017 xtoyun.net，并保留所有权利。
 * 网站地址: http://www.xtoyun.net；
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
 * 使用；不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * $Author: xtoyun $ 
*/
namespace data\plugins;

use think\Cache;
use app\data\model\Pays as Pays;

//支付类
class Pay{
    private $_payid=0;
    private $_args;
    private $_notify_url;
    private $_return_url;
    private $_data;
    private $_status=true;
    private $_name='';

	public function __construct($payid,array $args,$notify_url=null,$return_url=null) {
        $this->_payid=$payid;
        $this->_args=$args;
        $this->_notify_url=$notify_url;
        $this->_return_url=$return_url;
        $this->init();
    }

    private function init(){
        $dao=PayDao::instance();
        $result=Pays::find($this->_payid)->toArray();//读取数据
        if(isset($result['config'])){
            $this->_name=$result['paytype'];
            $this->_data=$result['config'];
        }
        if (!empty($this->_data)) {
            $this->_status=true;
        }
    }

    //发送支付
    public function send(){ 
        if ($this->_status) {
            $result=\xto\plugins\PayRequest::createInstance($this->_name,$this->_data);
            if(!empty($result)){
                $result->send($this->_args,$this->_notify_url,$this->_return_url);
            }
        }
    }

	public function __get($name)              // 这里$name是属性名
    {
        $getter = 'get' . $name;              // getter函数的函数名
        if (method_exists($this, $getter)) {
            return $this->$getter();          // 调用了getter函数
        } else {
            if(isset($this->$name)){
                return $this->$name; 
            } 
        }
    }

    public function __set($name, $value)
    {
        $setter = 'set' . $name;             // setter函数的函数名
        if (method_exists($this, $setter)) {
            $this->$setter($value);          // 调用setter函数
        } else {
            if(isset($this->$name)){
                $this->$name = $value; 
            } 
        }
    }
}