<?
namespace app\plugins\pay;

use xto\plugins\PayRequest;

use xto\data\dao\WalletDao;
use xto\membership\context\Users;

class wallet extends PayRequest{
	protected $钱包比例=''; 

	public function __construct(){
		parent::__construct();
		
	}

	public function send(array $args,$notify_url=null,$return_url=null){
		$amount=$args['amount'];//总额
		$userid=$args['userid'];//总额
		$remark=$args['remark'];

		$member=Users::getuser($userid);
		$dao=WalletDao::instance();
		$amount=($this->钱包比例*$amount)/100;
		return $dao->create($member->userid,0,$amount,$remark);
	}

	public function configShortDescription(){
		return "钱包支付";
	}

	public function configDescription(){
		return "内部钱包支付";
	}

	public function configLogo(){
		return "/config/plugins/pay/wepay.png";
	}

	public function config钱包比例(){
		return $this->钱包比例;
	}   
}