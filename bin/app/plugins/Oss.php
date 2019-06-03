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
namespace app\plugins;

use think\Cache;
use app\data\model\Config as ConfigModel;

//支付类
class Oss {
    private $_osstype='';
    private $_osssender='';
    private $_status=true;
    private $_dao;

	public function __construct($type='',$config='') {
        $this->_osstype=$type; 
        $this->_osssender=$config; 
        $this->init();
    }

    private function init(){
        if(empty($this->_osstype)){
            $this->_osstype=ConfigModel::find_value('osstype');
        } 
        if(empty($this->_osssender)){
            $this->_osssender=ConfigModel::find_value('osssender'); 
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
                $info = $file->move(WEB_PATH . '/uploads');  
                if ($info) {
                    return array(
                        'msg'       => '上传成功',
                        'success'   => true,
                        'path'      => '/uploads/' .$info->getSaveName()
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