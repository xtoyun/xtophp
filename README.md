XtoPHP主要基于Tp5.0框架应用的企业快速开发框架<br>
ThinkPHP框架请移步于（http://www.thinkphp.cn），后期我们会重点整理此方面的学习资料，供大家参考<br>
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
---------------CreateUserException.php（创建用户异常类）<br>
---------------CreateUserStatus.php（创建返回状态枚举类）<br>
---------------IRole.php（角色对象）<br>
---------------IUser.php（用户对象）<br>
---------------LoginUserStatus.php（登录状态枚举类）<br>
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
---------------email（邮件插件）<br>
-------------------phpmail.php（第三方组件phpmailer）<br>
-------------------sendcloud.php（第三方组件sendcloud）<br>
-------------------taomail.php（自己团队写邮件组件，牛刀小试：(）<br>
---------------sms（短信插件）
-------------------alidayu.php（阿里云大于，名字变来变去，是大鱼还是大于，反正是阿里云）<br>
-------------------baiduapi.php（百度云接口，服务商凯媒，http://apistore.baidu.com）<br>
---------------oss（云存储插件）
-------------------alioss.php（阿里云OSS，请参考（http://www.aliyun.com/oss））<br>
-------------------locoss.php（本地存储）<br>
---------------pay（支付插件）<br>
-------------------alipay.php（支付宝pc）<br>
-------------------wepay.php（微信支付）<br>
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