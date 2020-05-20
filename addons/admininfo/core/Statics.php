<?
namespace addons\admininfo\core;
 

class Statics
{ 
	 public function reports(){
	 	$logs=\data\model\SysLogs::where('')->count();
	 	$members=\data\membership\Members::where('')->count();
	 	$addons=\data\model\SysAddons::where('')->count();

	 	return [
	 		'logs'=>$logs,
	 		'members'=>$members,
	 		'addons'=>$addons,
	 		'online'=>1
	 	];
	 }
}