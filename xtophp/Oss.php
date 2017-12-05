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
namespace xto;

use think\Cache;
use xto\data\dao\ConfigDao;

//支付类
class Oss {
    private $_osstype='';
    private $_osssender='';
    private $_status=true;
    private $_dao;

	public function __construct($type='',$config='') {
        $this->_osstype=$type; 
        $this->_osssender=$config;
        $this->_dao=ConfigDao::instance();
        $this->init();
    }

    private function init(){
        if(empty($this->_osstype)){
            $this->_osstype=$this->_dao->getConfig('osstype');
        } 
        if(empty($this->_osssender)){
            $this->_osssender=$this->_dao->getConfig('osssender');
        }
        if (!empty($this->_osssender)) {
            $this->_status=true;
        }
    }

    //发送支付
    public function save($file){
        if ($this->_status) {
            $result=\xto\plugins\OSSSender::createInstance($this->_osstype,$this->_osssender);
            if(!empty($result)){
                return $result->save($file); 
            }else{
                $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');  
                if ($info) {
                    return array(
                        'msg'       => '上传成功',
                        'success'   => true,
                        'path'      => DS . 'public' . DS . 'uploads'. DS .$info->getSaveName()
                    );
                }
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