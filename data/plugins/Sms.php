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
use app\data\model\Config as ConfigModel;
use data\plugins\core\SMSSender;

//支付类
class Sms {
    private $_smstype='';
    private $_smssender='';
    private $_status=true;
    private $_dao;

	public function __construct($type='',$config='') {
        $this->_smstype=$type; 
        $this->_smssender=$config; 
        $this->init();
    }

    private function init(){
        if(empty($this->_smstype)){
            $this->_smstype=ConfigModel::find_value('smstype');
        } 
        if(empty($this->_smssender)){
            $this->_smssender=ConfigModel::find_value('smssender');
        }
        if (!empty($this->_smssender)) {
            $this->_status=ConfigModel::find_value('smsopen');
        }
    }

    //发送支付
    public function send($mobile,$content){
        if ($this->_status) {
            $result=SMSSender::createInstance($this->_smstype,$this->_smssender);
            if(!empty($result)){
                return $result->send($mobile,$content); 
            }
        }
        return false;
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