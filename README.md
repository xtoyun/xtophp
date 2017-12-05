## 演示地址<br>
演示版网址：http://demo.xtoyun.net/admin.php <br>
V管理员：admin，密码：admin<br>
最新数据库请加QQ群：[96050256](http://shang.qq.com/wpa/qunwpa?idkey=eaac9f61d68ce78a27105572f096f00b2af174cb78bc73cfd83f5c39c87ae17f)<br>

## V0.2<br>
增加【有站CMS】模块，营销官网、公众号及小程序、支付宝小程序等<br>
主要核心功能：<br>
1、内容设置(内容模型、栏目管理、网站配置)<br>
2、应用插件(关键字、友情链接、放灯片)<br>
3、内容管理(添加新闻、单页管理)<br>
4、支持多模板扩展<br>
5、增加新模块数据库表，以web_开头
演示网址：http://demo.xtoyun.net

## V0.18<br> 
增加单独只显示模板类,
增加xto标签类
<pre>
	<code>
{xto:select dao="\app\web\dao\ArticleDao" id="as" where="nid=$nid" limit="12"}
dao：是指数据源类所在路径
where:条件
limit:显示条数
order:排序
{/xto:select}
	</code>
</pre>

## V0.17<br>
修复界面问题，<br>
为有站项目做些准备，<br>
增加菜单XML当前可以控制多个<br>

## V0.16<br>
修复idao调用方法错误,修复部页面的错误问题，准备开发模块-有站，敬请期待!!!<br>
准备有站新模块相关准备工作，11月我们会出一个有站的CMS模块<br>

## V0.15<br>
1、系统模块因底层数据层统一类xto\data\IDao<br>
2、增加表单快速开发之电话标签、颜色标签<Br>

## V0.14【20171019】<br>
1、增加数据库类xto\data\IDAO<br>
增加，删除，修改，查询，分页等<br><br>

<pre>
	<code>
class LevelDao extends IDao{
	public function __construct() {
		parent::__construct('表名','表主健名称 '); 
	} 
}
	</code>
</pre>
2、表单快速开发支持自定义主健名<br>
3、修改部分页面的错误<br>
 

## V0.13【20171018】<br>
1、增加表格开发快速查询功能<br>
\xto\template\TableTemplate<br>
setQuickSearch($field = '',$default='',$title='',$class='', $vals = [])<br>
$field为字段用逗号隔开,$default:默认框文字,$title: 搜索框文字<br>
例：setQuickSearch('username,email','请输入关键字')<br>
2、数据库默认驱动为InnoDB，阿里云RDS默认为InnoDB。<br>
3、数据库驱动区别请参考http://blog.csdn.net/xifeijian/article/details/20316775<br>
4、xto_users有字段为自动更新时间，部分安装会出错，已经取消<br>
![xtophp](http://src.xtocn.com/xtophp/img/2017101801.png)<br>
5、修改后台登录验证具体错误提示<br>
6、增加表单快速开发--邮件表单项<br>  

## V0.12【20171016】<br>
1、增加文本、时间、时间范围标签<br>
2、修复数据库触发器的错误<br>
3、修复程序相关错误<br>
4、修复模板类继承类只能在_initialize<br>
5、增加\xto\Pay类，调用支付操作类<br>
6、增加membership的member修改登录密码和安全密码<br>
7、增加membership的manager修改登录密码<br>
8、修复xto\data修改错误<br>

## V0.11<br>
1、修复模块应用显示<br>
2、修复支付插件错误显示<br>
3、修复页面显示问题<br>
4、增加QQ群首页链接<br>

## V0.1【20191010】<br>
1、后台地址：http://域名/admin.php/<br>
2、框架核心代码全部整理xtophp目录底下<br>
3、新插件目录/plugins<br>
4、数据库文件请暂时移步到群<br>
5、修复默认后台登录的问题

## 先上传0.1版本<br>
QQ群：96050256<br>

## 项目思路<br>
一般企业实际需求就是建站，商城，行业网站等线上互联网应用<br>
开展线上互联网营销或微营销，通过展示、产品、服务获得用户或粉丝，通过体验获得客户交易<br>
如何快速开发行业应用？抢战先机，商机稍纵即逝，第一时间开发强大的功能；<br>
打好底层开发基础，不用重复造轮子，拿来即可，傻瓜式开发，快速挣钱<br>
我们理念就是苦逼我们，开发者挣钱，客户省钱<br>
网址：http://www.xtoyun.net
社区：http://ask.xtoyun.net

## 框架目录<br>
XtoPHP1.0主要基于ThinkPHP5.0框架开发<br>
ThinkPHP框架请移步于(http://www.thinkphp.cn) ，后期我们会重点整理此方面的学习资料，供大家参考<br>
1、主要XtoPHP框架目录结构<br>
xtophp<br>
------addons（组件目录）<br>
-----------Addons.php（组件基类）<br>
------core（常用类）<br>
-----------Array2XML.php（数组转XML类，第三方提供）<br>
-----------dbs.php（数据库操作类，备份等）<br>
-----------HashNode.php（哈希节点类）<br>
-----------HashTable.php（哈希表类）<br>
-----------smtp.php（邮件发送类）<br>
-----------XML2Array（XML转数组类）<br>
------data（访问数据库层，三层架构思路）<br>
-----------entities（实体层）<br>
-----------model（数据模型层）<br>
-----------service（服务层）<br>
-----------Factory.php(工厂类）<br>
------membership（用户权限）<br>
-----------context（上下文）<br>
---------------ComProvider.php（用户扩展提供类）<br>
---------------Context.php（当前登录上下文类）<br>
---------------Manager.php（管理员类，基于IUser用户类）<br>
---------------ManagerFactory.php（管理员工厂类）<br>
---------------Member.php（会员类，基于IUser用户类）<br>
---------------MemberFactory.php（会员工厂类）<br>
---------------UserFactory.php（用户工厂基类）<br>
---------------Users.php（用户读取类）<br>
-----------core（核心应用类）<br>
---------------AnonymousUser.php（匿名用户）<br>
---------------UserCreateException.php（创建用户异常类）<br>
---------------UserCreateStatus.php（创建返回状态枚举类）<br>
---------------IRole.php（角色对象）<br>
---------------IUser.php（用户对象）<br>
---------------UserLoginStatus.php（登录状态枚举类）<br>
---------------RoleHelper.php（读取角色静态类）<br>
---------------RoleProvider.php（角色提供基类）<br>
---------------UserHelper.php（读取用户静态类）<br>
---------------UserProvider.php（用户提供基类）<br>
---------------UserRole.php<br>
-----------data（数据实现）<br>
---------------ComData.php（用户扩展数据类）<br>
---------------RoleData.php（角色数据类）<br>
---------------UserData.php（用户类据类）<br>
------module（模块类）<br>
---------------IModule.php（模块基类，重写配置、管理员菜单、版本等文件）<br>
------plugins（插件类）<br>
---------------ConfigPlugin.php（插件配置类）<br>
---------------EmailPlugins.php（邮件插件基类，基于PluginContainer)<br>
---------------EmailSender.php（邮件实现类，基于ConfigPlugin)<br>
---------------IPlugin.php（插件接口类，所有实现类都要实现此接口）<br>
---------------OSSPlugins.php（云存储插件基类，基于PluginContainer）<br>
---------------OSSSender.php（云存储插件实现类，基于ConfigPlugin）<br>
---------------PayPlugins.php（支付插件基类，基于PluginContainer）<br>
---------------PayRequest.php（支付插件实现类，基于ConfigPlugin）<br>
---------------PluginContainer.php（插件基类）<br>
---------------SMSPlugins.php（短信插件基类，基于PluginContainer）<br>
---------------SMSSender.php（短信插件实现类，基于ConfigPlugin）<br>
------template（模块模板基类）<br>
---------------BaseController.php（页面控制基类）<br>
---------------FormTemplate.php（表单快速开发基类）<br>
---------------ITemplate.php（模板接口）<br>
---------------TableTemplate.php（表格快速开发基类）<br>
---------------Template.php（模块模板基类）<br>
---------------TemplateContainer.php（模板基类）<br>
---------------TemplateController.php（模板控制类）<br>
App.php（全局类）<br>
Util.php（常用函数类）<br>
注意事项：<br>
1、用户、会员、管理员定义<br>
会员和管理员是要基于用户类，常见的登录、修改密码、权限分配、登录相关管理全部交给用户底层来实现<br>
会员应用层实现诸如支付密码，钱包，积分等<br>
管理员应用层实现权限分配等<br>
2、插件、组件、模块定义<br>
插件是系统提供常用的功能应用之一，一般强调功能实现，不用考虑界面问题的此类应用，如：短信，阿里云OSS、七牛云、支付接口，邮件等<br>
组件是XtoPHP的功能应用之一，实现界面应用，位于/addons/，需要后台定义组件才有效<br>
模块主要是系统大功能实现，比如CMS，商城，旅游等，位于/application/<br>
以上结XtoPHP和thinkphp5的定义功能说明<br>
 
实用场景：<br>
1、读取登录用户<br>
\xto\membership\context\Users::getuser(0,'admin',false)，读取用户名为admin用户，不启用缓存<br>
2、创建会员<br>
$member=new \xto\membership\context\Member();<br>
$member->username='test';<br>
$member->password='123456';<br>
$member->email='test@email.com';<br>
$member->is_approved=true;<br>

$result=\xto\membership\context\Users::createuser($member)<br>
switch($result){<br>
    case \xto\membership\core\CreateUserStatus::Created<br>
    //成功<br>
    break;<br>
}<br>
3、登录
$username=input('username');//用户名<br>
$password=input('password');//密码<br>
$user=\xto\membership\context\Users::getUser(0,$username,false);<br>
$user->password=$password;<br>
$loginUserStatus=\xto\membership\context\Users::validateUser($user);<br>
switch ($loginUserStatus) {<br>
	case \xto\membership\core\UserLoginStatus::Success:<br>
		Session::set(\xto\App::instance()->manager_auth_name,$username);<br>
		break;<br>
	default:<br>
		break;<br>
}<br>