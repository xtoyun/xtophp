<?
namespace app\data\lib;
class HashNode {
	public $key;
	public $value;
	public $nextNode;
 
	public function __construct($key, $value, $nextNode = NULL) {
		$this->key = $key;
		$this->value = $value;
		$this->nextNode = $nextNode;
	}
}