<?
namespace app\data\lib; 

class HashTable {
	private $buckets;
	private $size = 100;
 
	public function __construct() {
		$this->buckets = new \SplFixedArray($this->size);
	}
 
	private function hashfunc($key) {
		$strlen = strlen($key);
		$hashval = 0;
		for ($i = 0; $i < $strlen; $i++) {
			$hashval += ord($key{$i});
		}
		return $hashval % $this->size;
	}

	public function remove($key){ 
		$index = $this->hashfunc($key);
		$current = $this->buckets[$index]; 
		$this->buckets[$index]=NULL; /* 查找成功 */
		return true; /* 查找失败 */
	}
 
	public function insert($key, $value) {
		$index = $this->hashfunc($key);
		/* 新创建一个节点 */
		if (isset($this->buckets[$index])) {
			$newNode = new HashNode($key, $value, $this->buckets[$index]);
		} else {
			$newNode = new HashNode($key, $value, NULL);
		}
		$this->buckets[$index] = $newNode; /* 保存新节点 */
	}
 
	public function find($key) {
		$index = $this->hashfunc($key);
		$current = $this->buckets[$index];  
		while (isset($current)) { /* 遍历当前链表 */ 
			if ($current->key == $key) { /* 比较当前节点的关键字 */ 
				return $current->value; /* 查找成功 */
			} 
			$current = $current->nextNode; /* 比较下一个节点 */
		}
		return NULL; /* 查找失败 */
	}
}