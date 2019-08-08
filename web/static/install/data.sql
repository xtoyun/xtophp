/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50519
Source Host           : localhost:3306
Source Database       : xtophp

Target Server Type    : MYSQL
Target Server Version : 50519
File Encoding         : 65001

Date: 2019-04-24 11:08:46
*/

SET FOREIGN_KEY_CHECKS=0;

/*
20190628
1、统一标题操作
*/

update xto_article set title=(select title from xto_content where cid=xto_article.cid)
update xto_article set content=(select content from xto_content where cid=xto_article.cid)
update xto_article set keywords=(select keywords from xto_content where cid=xto_article.cid)
  update xto_article set description=(select description from xto_content where cid=xto_article.cid)
  update xto_article set img1=(select img1 from xto_content where cid=xto_article.cid)

  update xto_about set content=(select content from xto_content where cid=xto_about.cid)
  update xto_about set keywords=(select keywords from xto_content where cid=xto_about.cid)

DROP TABLE IF EXISTS `xto_member_refers`;
CREATE TABLE `xto_member_refers` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `fuserid` int(11) DEFAULT NULL,
  `layer` int(11) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for xto_about
-- ----------------------------
DROP TABLE IF EXISTS `xto_about`;
CREATE TABLE `xto_about` (
  `abid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `order` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `selfin` varchar(50) DEFAULT NULL,
  `nid` int(11) unsigned zerofill NOT NULL,
  `update_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`abid`)
) ENGINE=InnoDB AUTO_INCREMENT=1056 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_about
-- ----------------------------
INSERT INTO `xto_about` VALUES ('1054', '1057', '', '', '0', '', '00000000004', '1553774940', null, null);
INSERT INTO `xto_about` VALUES ('1055', '1058', '5656', '', '0', '', '00000000005', '1553775036', null, '联系我们1212');

-- ----------------------------
-- Table structure for xto_addons
-- ----------------------------
DROP TABLE IF EXISTS `xto_addons`;
CREATE TABLE `xto_addons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(40) NOT NULL COMMENT '插件名或标识',
  `title` varchar(20) NOT NULL DEFAULT '' COMMENT '中文名',
  `description` text COMMENT '插件描述',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `config` text COMMENT '配置',
  `author` varchar(40) DEFAULT '' COMMENT '作者',
  `version` varchar(20) DEFAULT '' COMMENT '版本号',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '安装时间',
  `has_adminlist` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否有后台列表',
  `addons` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='插件表';

-- ----------------------------
-- Records of xto_addons
-- ----------------------------
INSERT INTO `xto_addons` VALUES ('2', 'admin_index', 'test插件', 'test插件简介', '1', null, '', '0.1', '1438154545', '0', 'app\\admin\\addons\\dashboard', 'admin', '0');

-- ----------------------------
-- Table structure for xto_apps
-- ----------------------------
DROP TABLE IF EXISTS `xto_apps`;
CREATE TABLE `xto_apps` (
  `appid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `host` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`appid`)
) ENGINE=InnoDB AUTO_INCREMENT=10005 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_apps
-- ----------------------------
INSERT INTO `xto_apps` VALUES ('10000', '默认站点', '', null, null, null, 'admin', '1554817212', '1554817674');
INSERT INTO `xto_apps` VALUES ('10004', 'admin2', '', null, null, null, 'admin2', '1554949936', '1554949936');

-- ----------------------------
-- Table structure for xto_article
-- ----------------------------
DROP TABLE IF EXISTS `xto_article`;
CREATE TABLE `xto_article` (
  `arid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `cateid` int(11) DEFAULT NULL,
  `order` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `selfin` varchar(255) DEFAULT NULL,
  `nid` int(11) DEFAULT NULL,
  `f_name` varchar(255) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`arid`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_article
-- ----------------------------
INSERT INTO `xto_article` VALUES ('13', '1060', '6', '', '10000', 'zd,', '9', null, null, '1553774027');
INSERT INTO `xto_article` VALUES ('14', '1061', '6', '', '10000', ',tj', '9', null, null, null);
INSERT INTO `xto_article` VALUES ('15', '1062', '6', '', '10000', 'tj', '9', null, null, null);
INSERT INTO `xto_article` VALUES ('17', '1064', '7', '', '10000', 'tj', '9', null, null, null);
INSERT INTO `xto_article` VALUES ('18', '1065', '8', '', '10000', 'tj', '9', null, null, null);
INSERT INTO `xto_article` VALUES ('19', '1066', '8', '', '10000', 'tj', '9', null, null, null);
INSERT INTO `xto_article` VALUES ('20', '1067', '8', '', '10000', 'tj', '9', null, null, null);
INSERT INTO `xto_article` VALUES ('21', '1068', '7', '', '10000', 'tj', '9', null, null, null);
INSERT INTO `xto_article` VALUES ('23', '1070', '6', '', '10000', 'tj', '10', null, null, null);
INSERT INTO `xto_article` VALUES ('24', '1071', '6', '', '10000', 'tj', '10', null, null, null);
INSERT INTO `xto_article` VALUES ('25', '1072', '6', '', '10000', 'tj', '10', null, null, null);
INSERT INTO `xto_article` VALUES ('42', '1123', '6', '', '10000', 'tj', '2', null, null, null);

-- ----------------------------
-- Table structure for xto_article_category
-- ----------------------------
DROP TABLE IF EXISTS `xto_article_category`;
CREATE TABLE `xto_article_category` (
  `cateid` int(11) NOT NULL AUTO_INCREMENT,
  `parent_cateid` int(11) DEFAULT NULL,
  `catename` varchar(255) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`cateid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_article_category
-- ----------------------------
INSERT INTO `xto_article_category` VALUES ('6', '0', '最新动态', '10', '0');
INSERT INTO `xto_article_category` VALUES ('7', '0', '功能发布', '20', '0');
INSERT INTO `xto_article_category` VALUES ('10', '0', '产品中心', '1212', '0');
INSERT INTO `xto_article_category` VALUES ('30', '0', 'test', '1', '0');

-- ----------------------------
-- Table structure for xto_cmodel
-- ----------------------------
DROP TABLE IF EXISTS `xto_cmodel`;
CREATE TABLE `xto_cmodel` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `appid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `tablename` varchar(255) DEFAULT NULL,
  `default_theme` varchar(255) DEFAULT NULL,
  `category_template` varchar(255) DEFAULT NULL,
  `list_template` varchar(255) DEFAULT NULL,
  `show_template` varchar(255) DEFAULT NULL,
  `is_sys` bit(1) DEFAULT NULL,
  `controller` varchar(255) DEFAULT NULL,
  `createdate` int(11) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_cmodel
-- ----------------------------
INSERT INTO `xto_cmodel` VALUES ('5', '10000', '产品模型', '', 'product', '', '', '', '', null, 'product', null);
INSERT INTO `xto_cmodel` VALUES ('6', '10000', '单页模型', '', 'about', 'default', 'category_about.html', 'list_about.html', 'show_about.html', null, 'about', null);
INSERT INTO `xto_cmodel` VALUES ('8', '10000', '产品模型', '', 'product', '', null, '', '', null, 'product', null);

-- ----------------------------
-- Table structure for xto_config
-- ----------------------------
DROP TABLE IF EXISTS `xto_config`;
CREATE TABLE `xto_config` (
  `name` varchar(255) NOT NULL,
  `value` varchar(2000) DEFAULT NULL,
  `appid` int(11) DEFAULT '0',
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_config
-- ----------------------------
INSERT INTO `xto_config` VALUES ('app_alipay', '', '10000', null);
INSERT INTO `xto_config` VALUES ('app_beian', '', '10000', null);
INSERT INTO `xto_config` VALUES ('app_mobile', '', '10000', null);
INSERT INTO `xto_config` VALUES ('app_name', '1212127667671212', '10000', null);
INSERT INTO `xto_config` VALUES ('app_wechat', '', '10000', null);
INSERT INTO `xto_config` VALUES ('fans_host', '', '10000', null);
INSERT INTO `xto_config` VALUES ('fans_inpay_amount', '', '10000', null);
INSERT INTO `xto_config` VALUES ('fans_name', '吸粉平台', '10000', null);
INSERT INTO `xto_config` VALUES ('fans_reg_min_refers', '', '10000', null);
INSERT INTO `xto_config` VALUES ('fans_reg_pre', '', '10000', null);
INSERT INTO `xto_config` VALUES ('fans_tj_list', '', '10000', null);

-- ----------------------------
-- Table structure for xto_content
-- ----------------------------
DROP TABLE IF EXISTS `xto_content`;
CREATE TABLE `xto_content` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `content` longtext,
  `description` varchar(255) DEFAULT NULL,
  `keywords` varchar(255) DEFAULT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `mgid` int(11) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `seein` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=1124 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_content
-- ----------------------------
INSERT INTO `xto_content` VALUES ('1057', '关于我们', '<p><span style=\"font-family: monospace; white-space: pre-wrap; font-size: 20px;\">XtoPHP是基于TP5的企业快速开发平台，专注互联网营销软件及服务</span></p><p><span style=\"font-family: monospace; white-space: pre-wrap; font-size: 20px;\">目前我们已经成功开发XtoPHP（快速开发），有站（营销网站）；</span></p>', '', '', null, '0', null, null, null, null, null, null);
INSERT INTO `xto_content` VALUES ('1058', '联系我们1212', '<p>官网：<a href=\"http://www.xtoyun.net\">http://www.xtoyun.net</a> </p><p>联系电话：13710429923</p>', 'sdsdsd', '', null, '0', null, '', null, null, null, '1553776056');
INSERT INTO `xto_content` VALUES ('1059', '市税务局开通微信小程序服务', '<p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">如果在办税服务厅办业务不用排队就好了”，这是“老财务”上海伍缘现代杂货有限公司财务负责人吴丹华每次在取号机前排队取号时的梦想。现在，这个梦想实现了。日前，上海市税务局利用微信小程序开通了“微信取号”服务，纳税人可以随时随地获取办税大厅的排队人数和等待时间，并可直接通过手机实现实时取号。</p><p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">　　昨天，在普陀区税务局的办税大厅，吴丹华告诉记者，今天出门办事前通过微信小程序取了号，果然来到办税大厅后就可以“来了即办，办了即走”，“如果人特别多依旧需要排队，我也不用坐着干等了，因为我可以通过小程序看见排队人数和等待时间，甚至可以悠闲地去楼下买杯咖啡。”</p><p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">　　市税务局相关负责人介绍，普陀、徐汇、静安、松江、青浦5个分局的办税大厅目前已开通“微信取号”服务，其余11个分局的办税大厅均将于今年年底前开通此项服务。下一步，市税务局还将在减少时间准备、简化办税流程等其他五大方面进一步提升纳税服务水平。</p><p><br/></p>', '', '', null, '0', null, null, null, null, null, null);
INSERT INTO `xto_content` VALUES ('1060', 'XtoPHP发布有站功能11222', '<p>增加【有站】模块，基于企业建站营销服务</p><p>主要核心功能：</p><p>1、内容设置(内容模型、栏目管理、网站配置)</p><p>2、应用插件(关键字、友情链接、放灯片)</p><p>3、内容管理(添加新闻、单页管理)</p><p>4、支持多模板扩展</p><p>5、增加新模块数据库表，以web_开头</p><p>演示网址：http://demo.xtoyun.net</p><p><br/></p>', '如果在办税服务厅办业务不用排队就好了”，这是“老财务”上海伍缘现代杂货有限公司财务负责人吴丹华每次在取号机前排队取号时的梦想。现在，这个梦想实现了', 'test,jjjjjj', '/uploads/oss/20190328\\80031000187e1a55c658739a2d113fe6.png', '0', '24', '4545', '2065', null, null, '1553774027');
INSERT INTO `xto_content` VALUES ('1061', '&ldquo;小程序&rdquo; 生态助力企业升级', '<p><span style=\"font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53;\">本报11月22日讯&nbsp;&nbsp;&nbsp;自微信小程序上线以来，“小程序热”便开始席卷线上线下各行各业。11月22日，以“小程序&nbsp;大生态”为主题的微盟小程序沙龙登陆长沙，长沙及周边一千多位业内人士参会。微盟创始人兼CEO孙涛勇、湖南日报新媒体发展有限公司董事长张德会等嘉宾和实战专家做了主旨演讲。</span></p>', '自微信小程序上线以来，“小程序热”便开始席卷线上线下各行各业', '', null, '0', null, '', '2087', null, null, null);
INSERT INTO `xto_content` VALUES ('1062', '抢占小程序红利！小鹅通知识变现小程序现免费赠送中', '<p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">小鹅通提供的小程序内，支持直播、音频、视频、图文、社群等多种内容展现形式。小鹅通创始人鲍春健告诉记者，这次针对新客户的小程序赠送活动将会持续到11月26号详情可见小鹅通官网及其微信公众号。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">据了解，小鹅通是内容付费领域知名的技术服务商，已获取大量自媒体、传统媒体、出版社、教育机构等领域的头部客户，如：吴晓波频道、十点读书、张德芬空间、腾讯科技、功夫财经、宋鸿兵、新京报书评、樊登读书会、年糕妈妈、周国平、豆瓣时间等，在微信生态内都布局有自己的小鹅通知识店铺。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">微信团队日前在微信公开课成都站透露了小程序下一步的发展方向将是优化小程序入口，为商家带来更多流量，以及实现在小程序中嵌入广告，提升小程序变现能力。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">对于内容创业者来说，微信的持续投入，很可能使小程序成为微信公众号之后又一波流量红利。大量知识付费领域头部都已尝试小程序实现知识变现，吴晓波频道、十点读书、张德芬空间等大咖今年1月份就通过小鹅通布局小程序知识店铺。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">小程序的在技术上的特殊性，使其本身不会消耗太大流量，省去了下载和卸载的过程，运行时又能独立于其他app，这些特性都让小程序能迸发更多的活力和机会，释放知识付费市场的潜力。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">“最直观的一点就是，使用小鹅通的小程序店铺，用户可以实现收听课程的同时，进行微信聊天或浏览其他页面，这对于目前以音频为主要内容展现形式的情况下，可以极大提高用户的使用体验。”</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">通过小鹅通小程序，可以解决知识变现需要解决的内容展现、支付交互、社群运营、用户管理等问题。同时，小程序可以直接对接公众号，帮助内容创业者实现精准的营销和转化。鲍春健表示，随着微信不断对小程序进行新特性的开放，小鹅通也会做出相应开发，为内容创业者提供持续的技术支持和服务。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">除小程序外，小鹅通提供的内容变现形式包括网页、app等。除此之外，小鹅通还提供开放平台等定制服务，可以植入已有的网站或app，实现不同生态内用户数据互通。</p><p><br/></p>', '自微信小程序上线以来，“小程序热”便开始席卷线上线下各行各业', '', null, '0', null, '', '2214', null, null, null);
INSERT INTO `xto_content` VALUES ('1063', '按摩椅+微信小程序 微播助力共享经济新成员', '<p>&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;要说全世界共享经济业态前途最明朗的地方，那无疑是中国。仅2017年，共享单车行业诞生了首家&amp;ldquo;独角兽企业&amp;rdquo;，共享充电宝企业数周内成功融资1.5亿美元，开展共享雨伞业务的新兴企业宣布今年向广州市投放50万把雨伞，一系列的共享产品引发用户与媒体的广泛关注，这一切都显示出共享经济即将转变成巨大风口的发展态势。在这种趋势下，北京微播易道依托强大的小程序技术优势，助力共享按摩椅的诞生，为共享经济大家庭再添一名新成员。&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;/uploads/ueditor/image/20171123/1511420903114103.jpg&quot; width=&quot;517&quot;/&gt;&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;继(优睡空间)共享睡眠仓之后，微播易道又迎来一个全新共享经济项目-共享按摩椅，这就意味着，往后再去银行、政府、医院排队的时候，不必带上小马扎，直接扫码享受舒适的按摩椅!&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;/uploads/ueditor/image/20171123/1511420904288571.jpg&quot; width=&quot;414&quot;/&gt;&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;据悉，微播易道本次将要打造的按摩椅名字为艾力斯，洋气的名字背后可是接地气的服务理念。艾力斯特共享按摩椅产品是以物联网技术为基础打造的020都市舒压体验空间，艾力斯特是以&amp;lsquo;随时享受智能按摩生活&amp;rdquo;为理念，将舒适专业的按摩服务延伸到银行、医院、政务大厅、办公楼、酒店、棋牌室等公共场所，让消费者以低成本，碎片化的时间享受健康服务。&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;共享按摩椅小程序项目是基于微信小程序唯一的共享按摩椅平台，无需安装下载通过微信二维码扫描直接使用、可以做到按摩椅场所附近五公里范围内的微信自带流量、让9亿用户打开共享按摩椅平台小程序，就能地图上看到按摩椅的所在位置并且可以直接线上导航找到每台按摩椅所在的位置，扫码并使用它。用户还可以获取商家营销红包，用于减免按摩椅使用费用。当然，最诱人的当属预约功能，用户可以提前预约按摩椅，避免排队。&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;/uploads/ueditor/image/20171123/1511420904115669.jpg&quot; width=&quot;472&quot;/&gt;&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;微播易道本次助力艾力斯共享按摩椅项目利用微信小程序+智能硬件，快速实现共享按摩椅功能上线，无需安装app，微信扫码即可进入，快速积累用户，本次小程序开发有助于共享经济+，降低成本，缩短开发周期。&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;中国的共享经济新业态正是一派&amp;ldquo;阳光普照&amp;rdquo;。在国家政策层面，&amp;ldquo;互联网+&amp;rdquo;&amp;ldquo;大众创业、万众创新&amp;rdquo;是政府所鼓励的，各种形式的共享经济，都搭上了这趟便车，要么一路绿灯，要么经过一番博弈，最终也大多胜出。小程序的浪潮到来，助力共享经济+，机会在此，千万不要错过!&lt;/p&gt;&lt;p style=&quot;margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: simsun; color: rgb(37, 37, 37);&quot;&gt;微播易道ceo常和森表示：互联网产业发展至今，任何一个小的变化都可能成为引发行业震荡的风口。小程序如此，共享经济如此，小程序+共享经济更是如此。&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;</p>', '微播易道CEO常和森表示：互联网产业发展至今，任何一个小的变化都可能成为引发行业震荡的风口。小程序如此，共享经济如此，小程序+共享经济更是如此。', '', null, '0', null, '', '1011', null, null, null);
INSERT INTO `xto_content` VALUES ('1064', 'XtoPHP发布有站功能11111232323', '<p>增加【有站】模块，基于企业建站营销服务</p><p>主要核心功能：</p><p>1、内容设置(内容模型、栏目管理、网站配置)</p><p>2、应用插件(关键字、友情链接、放灯片)</p><p>3、内容管理(添加新闻、单页管理)</p><p>4、支持多模板扩展</p><p>5、增加新模块数据库表，以web_开头</p><p>演示网址：http://demo.xtoyun.net</p><p><br/></p>', '', '', null, '0', null, '', '2424', null, null, null);
INSERT INTO `xto_content` VALUES ('1065', 'XtoPHP有站【20171123】更新日志', '<p>## V0.2</p><p>增加【有站】模块，基于企业建站营销服务</p><p>主要核心功能：</p><p>1、内容设置(内容模型、栏目管理、网站配置)</p><p>2、应用插件(关键字、友情链接、放灯片)</p><p>3、内容管理(添加新闻、单页管理)</p><p>4、支持多模板扩展</p><p>5、增加新模块数据库表，以web_开头</p><p>演示网址：http://demo.xtoyun.net</p><p><br/></p>', '', '', null, '0', null, null, '1881', null, null, null);
INSERT INTO `xto_content` VALUES ('1066', 'XtoPHP更新日志V0.18', '<p>## V0.18</p><p>增加单独只显示模板类,</p><p>增加xto标签类</p><p><br/></p>', '', '', null, '0', null, null, '1737', null, null, null);
INSERT INTO `xto_content` VALUES ('1067', 'XtoPHP更新日志V0.17', '<p>## V0.17</p><p>修复界面问题，</p><p>为有站项目做些准备，</p><p>增加菜单XML当前可以控制多个</p><p><br/></p>', '', '', null, '0', null, null, '1766', null, null, null);
INSERT INTO `xto_content` VALUES ('1068', 'XtoPHP增加MVVM开发vue.js框架', '<p><img src=\"/uploads/ueditor/image/20180520/1526809990844842.png\" title=\"1526809990844842.png\" alt=\"code_03.png\"/>&lt;p&gt;vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，vue 采用自底向上增量开发的设计。vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 vue 生态系统支持的库结合使用时，vue 也完全能够为复杂的单页应用程序提供驱动。&lt;/p&gt;</p>', 'Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架', '', null, '0', null, '', '1958', null, null, null);
INSERT INTO `xto_content` VALUES ('1069', '有站CMS专注于企业营销网站', '<p>有站CMS专注于企业营销网站</p>', '', '', null, '0', null, null, null, null, null, null);
INSERT INTO `xto_content` VALUES ('1070', '有站CMS专注于企业营销网站', '<p>有站CMS专注于企业营销网站</p>', '有站CMS专注于企业营销网站，帮助小微企业建立营销官网', '', null, '0', null, null, '2176', null, null, null);
INSERT INTO `xto_content` VALUES ('1114', 'test', '<p><img src=\"/uploads/ueditor/image/20180827/1535356255462806.jpg\" title=\"1535356255462806.jpg\" alt=\"6159252dd42a2834e6d976e257b5c9ea14cebfd8.jpg\"/></p>', '', '', null, '0', null, '', '1', null, null, null);
INSERT INTO `xto_content` VALUES ('1115', 'xtoyun', '<p>4545</p>', '', '', null, '0', null, '', '451', null, null, null);
INSERT INTO `xto_content` VALUES ('1116', '1231237878898989', '<p>123123</p>', null, '', null, '0', null, '', null, null, null, null);
INSERT INTO `xto_content` VALUES ('1117', '454567675656', '<p>6767sdsdsd</p>', '6767677', '6767', '', '0', null, 'sd7', null, null, null, null);
INSERT INTO `xto_content` VALUES ('1118', '67', '<p>6767</p>', '', '', null, '0', null, '', null, null, null, null);
INSERT INTO `xto_content` VALUES ('1119', '5656', '<p>5656</p>', '', '', null, '0', null, '', null, null, null, null);
INSERT INTO `xto_content` VALUES ('1120', '5656', '<p>5656</p>', '', '', null, '0', null, '', null, null, null, null);
INSERT INTO `xto_content` VALUES ('1121', '5656', '<p>5656</p>', '', '', null, '0', null, '', null, null, null, null);
INSERT INTO `xto_content` VALUES ('1122', '6767', '<p>6767</p>', '', '', null, '0', null, '', null, null, null, null);
INSERT INTO `xto_content` VALUES ('1123', 'test3434', '<p>1212</p>', '', '', null, '0', null, '6767', null, null, null, null);

-- ----------------------------
-- Table structure for xto_fans_black
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_black`;
CREATE TABLE `xto_fans_black` (
  `bid` varchar(36) NOT NULL,
  `userid` int(11) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `oid` varchar(255) DEFAULT NULL,
  `pid` varchar(255) DEFAULT NULL,
  `tuserid` int(11) DEFAULT NULL,
  `tmobile` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_black
-- ----------------------------
INSERT INTO `xto_fans_black` VALUES ('2b0a833c-70e5-358e-fea6-75952ebc06bc', '235', 'aaa', '0', '2019-02-26 14:49:35', '等待确认红包', '19a96471-1c46-2248-c433-14edd0ce6e3e', '53d6d4ac-8dbf-9e72-114b-51a9f5873fed', '235', 'aaa', '0');
INSERT INTO `xto_fans_black` VALUES ('f4ae42ac-f149-67e7-67dc-105ef6e05f85', '235', null, '0', '2019-01-09 13:47:13', '等待确认红包', 'eb4c2db5-b55e-11be-7c83-d5a1926d3e18', 'b4171095-6c12-69cf-fc55-3fb9a5bb74c2', '235', null, '0');
INSERT INTO `xto_fans_black` VALUES ('fdd6733e-1663-30ec-be6e-7621ce5515fb', '200', '18578794130', '0', '2019-01-09 14:10:14', '已收到红包', 'eb4c2db5-b55e-11be-7c83-d5a1926d3e18', 'b4171095-6c12-69cf-fc55-3fb9a5bb74c2', '235', null, '0');

-- ----------------------------
-- Table structure for xto_fans_group
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_group`;
CREATE TABLE `xto_fans_group` (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `peoples` int(11) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_group
-- ----------------------------
INSERT INTO `xto_fans_group` VALUES ('9', '2019-02-23 15:18:40', '0', '2019-02-23 15:18:40', '', '0', '', '5', '0');
INSERT INTO `xto_fans_group` VALUES ('10', '2019-02-25 08:59:01', '0', '2019-02-25 08:59:01', '', '0', '', '5', '0');
INSERT INTO `xto_fans_group` VALUES ('11', '2019-02-25 09:36:37', '0', '2019-02-25 09:36:37', '', '0', '', '2', '0');

-- ----------------------------
-- Table structure for xto_fans_group_detail
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_group_detail`;
CREATE TABLE `xto_fans_group_detail` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(11) DEFAULT NULL,
  `pid` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `bmount` decimal(10,0) DEFAULT NULL,
  `zmount` decimal(18,0) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_group_detail
-- ----------------------------
INSERT INTO `xto_fans_group_detail` VALUES ('3', '9', 'b719e9d1-53bd-813c-655e-03a07d357f7d', '200', 'fans', '300', '240', '2019-02-23 15:26:27', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('4', '9', 'a1486f87-5848-0c95-a151-6832bbd389b9', '235', 'aaaa', '300', '240', '2019-02-23 16:02:12', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('5', '9', 'c17871f9-244c-9525-4837-6d3398388670', '244', 'bbbb', '300', '240', '2019-02-23 16:02:20', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('6', '9', 'bee82573-f29a-d80a-b89d-cf15be09aa3c', '245', 'cccc', '300', '240', '2019-02-23 16:02:25', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('7', '9', '3bf75606-96e5-fc6b-2bc5-5b80423f1dd7', '246', 'fans01', '300', '240', '2019-02-23 16:02:31', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('8', '10', 'def39ce4-63bc-63e7-076b-47da25ae1349', '247', 'fans02', '300', '240', '2019-02-25 08:59:01', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('9', '10', '27763ab7-3395-8aaf-53c7-c0e424fd406b', '250', 'fans03', '300', '240', '2019-02-25 09:02:21', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('10', '10', '5f9af074-8c26-09ff-6190-8704e3cbe171', '244', 'bbbb', '300', '240', '2019-02-25 09:34:32', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('11', '10', '7247376b-a845-6188-8b73-3381459f2fb8', '200', 'fans', '300', '240', '2019-02-25 09:34:45', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('12', '10', '2b848243-79ba-0993-ba45-ac46967f5142', '235', 'aaaa', '300', '240', '2019-02-25 09:34:48', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('13', '11', '1d2445f3-83c5-c0c6-f6ea-002ca08c4c0f', '246', 'fans01', '300', '240', '2019-02-25 09:36:37', null, '0');
INSERT INTO `xto_fans_group_detail` VALUES ('14', '11', '25da0e93-5693-f39b-cefd-4bd6824c7cef', '247', 'fans02', '300', '240', '2019-02-25 09:38:37', null, '0');

-- ----------------------------
-- Table structure for xto_fans_note
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_note`;
CREATE TABLE `xto_fans_note` (
  `nid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `createdate` int(11) DEFAULT NULL,
  `istop` bit(1) DEFAULT NULL,
  `istui` bit(1) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_note
-- ----------------------------
INSERT INTO `xto_fans_note` VALUES ('10', '2323', '<p>232323</p>', '1555991495', '\0', '\0', '10000', '2323');

-- ----------------------------
-- Table structure for xto_fans_order
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_order`;
CREATE TABLE `xto_fans_order` (
  `oid` varchar(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pid` varchar(36) NOT NULL,
  `quid` varchar(36) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `rpid` varchar(36) DEFAULT NULL,
  `ruserid` int(11) NOT NULL,
  `rusername` varchar(255) DEFAULT NULL,
  `rmobile` varchar(255) DEFAULT NULL,
  `amount` varchar(18) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `type` smallint(11) DEFAULT NULL,
  `f_date` datetime DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_order
-- ----------------------------
INSERT INTO `xto_fans_order` VALUES ('01fea9ed-5023-9bd5-c15f-f2eb1e7ced4c', '81bd13a0-a1b6-8c54-b180-5ad39312e87d', '85cdafd7-eba3-488b-976c-2da35c5cc289', '254', 'ffff', 'ffff', 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', '235', 'aaaa', 'aaa', '240', '2019-02-28 10:34:53', '0', '', '0', '0', '2019-02-28 15:34:53');
INSERT INTO `xto_fans_order` VALUES ('20362f7a-ec6e-50d4-ec4c-67f33454006a', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', '5a220646-208f-c684-deea-ffe64cd48e33', '253', 'eeee', 'eeee', '1ba52639-6e2f-e456-1814-f9d1ba4bdd0f', '245', 'cccc', 'cccc', '60', '2019-02-28 10:19:11', '0', '', '0', '0', '2019-02-28 15:19:11');
INSERT INTO `xto_fans_order` VALUES ('32650a7d-ef7e-c69f-74e2-ef06e3c2320e', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', 'a276ba6f-5f05-ef54-608d-d3f94af16f86', '253', 'eeee', 'eeee', '37d5bca8-5e25-4f25-be93-9db7ebc811db', '252', 'dddd', 'dddd', '60', '2019-02-28 10:19:11', '0', '', '0', '0', '2019-02-28 15:19:11');
INSERT INTO `xto_fans_order` VALUES ('3d7910d3-a4ba-c59c-93aa-83c5aed23f91', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', '9e954c5d-9bb4-5df1-0436-0e91a7c72f8a', '253', 'eeee', 'eeee', 'dc3583f2-e05e-5f94-d39a-282137ce5831', '244', 'bbbb', 'bbb', '60', '2019-02-28 10:27:37', '0', '', '0', '0', '2019-02-28 15:27:37');
INSERT INTO `xto_fans_order` VALUES ('4f0482ee-5b05-0c7d-534f-5f3d95606920', '81bd13a0-a1b6-8c54-b180-5ad39312e87d', '85cdafd7-eba3-488b-976c-2da35c5cc289', '254', 'ffff', 'ffff', 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', '235', 'aaaa', 'aaa', '240', '2019-02-28 10:36:38', '0', '', '0', '0', '2019-02-28 15:36:38');
INSERT INTO `xto_fans_order` VALUES ('600a25ad-c4fb-0338-7ea6-ce1235a1f429', '81bd13a0-a1b6-8c54-b180-5ad39312e87d', '85cdafd7-eba3-488b-976c-2da35c5cc289', '254', 'ffff', 'ffff', 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', '235', 'aaaa', 'aaa', '240', '2019-02-28 10:20:30', '0', '', '0', '0', '2019-02-28 15:20:30');
INSERT INTO `xto_fans_order` VALUES ('67ec7008-c4dc-f7c5-11ce-5093be63fd7f', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', 'a276ba6f-5f05-ef54-608d-d3f94af16f86', '253', 'eeee', 'eeee', '37d5bca8-5e25-4f25-be93-9db7ebc811db', '252', 'dddd', 'dddd', '60', '2019-02-28 10:27:37', '0', '', '0', '0', '2019-02-28 15:27:37');
INSERT INTO `xto_fans_order` VALUES ('7450111d-5ef6-2cfe-c9e5-ba65332bda0f', '60a5fb79-9abf-36ca-66d5-765ac7f33c36', '9e954c5d-9bb4-5df1-0436-0e91a7c72f8a', '200', 'fans', 'fans', 'dc3583f2-e05e-5f94-d39a-282137ce5831', '244', 'bbbb', 'bbb', '240', '2019-02-28 10:41:27', '0', '', '0', '0', '2019-02-28 15:41:27');
INSERT INTO `xto_fans_order` VALUES ('a3d1616e-0da0-ea5d-2d50-6dee6b19199d', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', '85cdafd7-eba3-488b-976c-2da35c5cc289', '253', 'eeee', 'eeee', 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', '235', 'aaaa', 'aaa', '60', '2019-02-28 10:19:11', '0', '', '0', '0', '2019-02-28 15:19:11');
INSERT INTO `xto_fans_order` VALUES ('af414b9b-1b6d-306b-12c8-ded4b4df56e5', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', '9e954c5d-9bb4-5df1-0436-0e91a7c72f8a', '253', 'eeee', 'eeee', 'dc3583f2-e05e-5f94-d39a-282137ce5831', '244', 'bbbb', 'bbb', '60', '2019-02-28 10:19:11', '0', '', '0', '0', '2019-02-28 15:19:11');
INSERT INTO `xto_fans_order` VALUES ('c005375f-9f3d-2e57-9502-371d953841c6', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', '5a220646-208f-c684-deea-ffe64cd48e33', '253', 'eeee', 'eeee', '1ba52639-6e2f-e456-1814-f9d1ba4bdd0f', '245', 'cccc', 'cccc', '60', '2019-02-28 10:27:37', '0', '', '0', '0', '2019-02-28 15:27:37');
INSERT INTO `xto_fans_order` VALUES ('ef733ebe-7a25-463d-8e05-8f52dda6939b', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', '85cdafd7-eba3-488b-976c-2da35c5cc289', '253', 'eeee', 'eeee', 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', '235', 'aaaa', 'aaa', '60', '2019-02-28 10:27:37', '0', '', '0', '0', '2019-02-28 15:27:37');
INSERT INTO `xto_fans_order` VALUES ('f2e6f957-89fc-6d13-4511-28dfa97e61e9', '81bd13a0-a1b6-8c54-b180-5ad39312e87d', '85cdafd7-eba3-488b-976c-2da35c5cc289', '254', 'ffff', 'ffff', 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', '235', 'aaaa', 'aaa', '240', '2019-02-28 10:29:43', '0', '', '0', '0', '2019-02-28 15:29:43');

-- ----------------------------
-- Table structure for xto_fans_order_me
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_order_me`;
CREATE TABLE `xto_fans_order_me` (
  `mid` varchar(36) NOT NULL,
  `pid` varchar(36) DEFAULT NULL,
  `oid` varchar(36) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `zmount` decimal(10,0) DEFAULT NULL,
  `zmount_balance` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_order_me
-- ----------------------------
INSERT INTO `xto_fans_order_me` VALUES ('04330f8d-2ae6-a28e-cf74-4b9b965f82f0', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', 'ef733ebe-7a25-463d-8e05-8f52dda6939b', '2019-02-28 10:27:37', '', '0', '253', '60', '60');
INSERT INTO `xto_fans_order_me` VALUES ('14e77dc7-32e8-92bf-79cf-2f515cd8bba0', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', 'c005375f-9f3d-2e57-9502-371d953841c6', '2019-02-28 10:27:37', '', '0', '253', '60', '180');
INSERT INTO `xto_fans_order_me` VALUES ('2bb8d740-871f-e721-7c55-8e7b6850c5f6', '81bd13a0-a1b6-8c54-b180-5ad39312e87d', '4f0482ee-5b05-0c7d-534f-5f3d95606920', '2019-02-28 10:36:38', '', '0', '254', '240', '240');
INSERT INTO `xto_fans_order_me` VALUES ('7409fee6-0d9b-e57e-10c5-dc5879ecae76', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', '67ec7008-c4dc-f7c5-11ce-5093be63fd7f', '2019-02-28 10:27:37', '', '0', '253', '60', '240');
INSERT INTO `xto_fans_order_me` VALUES ('9c0caf54-85fe-1423-a813-5b926cf87012', 'bd2a6207-07f6-5a5f-3526-6f64865d718d', '3d7910d3-a4ba-c59c-93aa-83c5aed23f91', '2019-02-28 10:27:37', '', '0', '253', '60', '120');
INSERT INTO `xto_fans_order_me` VALUES ('ce267715-8be3-af3f-b1ad-f9544dcfcf63', '60a5fb79-9abf-36ca-66d5-765ac7f33c36', '7450111d-5ef6-2cfe-c9e5-ba65332bda0f', '2019-02-28 10:41:27', '', '0', '200', '240', '240');

-- ----------------------------
-- Table structure for xto_fans_order_you
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_order_you`;
CREATE TABLE `xto_fans_order_you` (
  `yid` varchar(36) NOT NULL,
  `pid` varchar(36) DEFAULT NULL,
  `oid` varchar(36) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `bmount` decimal(10,0) DEFAULT NULL,
  `bmount_balance` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`yid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_order_you
-- ----------------------------
INSERT INTO `xto_fans_order_you` VALUES ('0e1f0226-6967-f057-cf6c-9e01c83426a8', '37d5bca8-5e25-4f25-be93-9db7ebc811db', '67ec7008-c4dc-f7c5-11ce-5093be63fd7f', '2019-02-28 10:27:37', '', '0', '252', '60', '60');
INSERT INTO `xto_fans_order_you` VALUES ('1bb50e97-c056-7ae6-6fc5-ea8d9ec8fe79', 'dc3583f2-e05e-5f94-d39a-282137ce5831', '3d7910d3-a4ba-c59c-93aa-83c5aed23f91', '2019-02-28 10:27:37', '', '0', '244', '60', '60');
INSERT INTO `xto_fans_order_you` VALUES ('2a820e0b-53ce-211e-9c75-54111da150a1', '1ba52639-6e2f-e456-1814-f9d1ba4bdd0f', 'c005375f-9f3d-2e57-9502-371d953841c6', '2019-02-28 10:27:37', '', '0', '245', '60', '60');
INSERT INTO `xto_fans_order_you` VALUES ('930f5ca1-b195-a10f-e880-ea0060ea8130', 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', '4f0482ee-5b05-0c7d-534f-5f3d95606920', '2019-02-28 10:36:38', '', '0', '235', '240', '300');
INSERT INTO `xto_fans_order_you` VALUES ('d51720e8-0209-eaeb-0898-8f6a58ce0ce6', 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', 'ef733ebe-7a25-463d-8e05-8f52dda6939b', '2019-02-28 10:27:37', '', '0', '235', '60', '60');
INSERT INTO `xto_fans_order_you` VALUES ('e2cc7673-9e89-f7af-9484-66f18041e1f6', 'dc3583f2-e05e-5f94-d39a-282137ce5831', '7450111d-5ef6-2cfe-c9e5-ba65332bda0f', '2019-02-28 10:41:27', '', '0', '244', '240', '300');

-- ----------------------------
-- Table structure for xto_fans_publish
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_publish`;
CREATE TABLE `xto_fans_publish` (
  `pid` varchar(36) NOT NULL,
  `num` varchar(255) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `is_prepay` bit(1) DEFAULT NULL,
  `is_actpay` bit(1) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `wechat` varchar(255) DEFAULT NULL,
  `wechat_img` varchar(255) DEFAULT NULL,
  `is_wait` bit(1) DEFAULT NULL,
  `maxnum` int(11) DEFAULT NULL,
  `last_date` datetime DEFAULT NULL,
  `me_count` int(11) unsigned zerofill DEFAULT NULL,
  `you_count` int(11) unsigned zerofill DEFAULT NULL,
  `c_refers` int(11) unsigned zerofill DEFAULT NULL,
  `type` smallint(6) unsigned zerofill DEFAULT NULL,
  `amount` decimal(18,6) DEFAULT NULL,
  `zmount` decimal(18,0) DEFAULT NULL,
  `bmount` decimal(18,0) DEFAULT NULL,
  `zmount_balance` decimal(18,0) DEFAULT NULL,
  `bmount_balance` decimal(18,0) DEFAULT NULL,
  `modtype` decimal(10,0) DEFAULT NULL,
  `s240` smallint(6) DEFAULT NULL,
  `s60` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_publish
-- ----------------------------

-- ----------------------------
-- Table structure for xto_fans_queue
-- ----------------------------
DROP TABLE IF EXISTS `xto_fans_queue`;
CREATE TABLE `xto_fans_queue` (
  `quid` varchar(36) NOT NULL,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `tradedate` datetime DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `maxnum` int(11) DEFAULT NULL,
  `from_did` varchar(36) DEFAULT NULL,
  `from_pid` varchar(36) DEFAULT NULL,
  `type` smallint(6) DEFAULT NULL,
  `modtype` decimal(18,0) DEFAULT NULL,
  `bmount` decimal(18,0) DEFAULT NULL,
  `bmount_balance` decimal(18,0) DEFAULT NULL,
  `s240` smallint(6) DEFAULT NULL,
  `s60` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`quid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fans_queue
-- ----------------------------
INSERT INTO `xto_fans_queue` VALUES ('5a220646-208f-c684-deea-ffe64cd48e33', '245', 'cccc', 'cccc', '0', null, '2019-02-28 09:49:46', '0', '-1', null, '1ba52639-6e2f-e456-1814-f9d1ba4bdd0f', '0', '60', '300', '60', null, null);
INSERT INTO `xto_fans_queue` VALUES ('85cdafd7-eba3-488b-976c-2da35c5cc289', '235', 'aaaa', 'aaa', '0', null, '2019-02-28 09:49:37', '0', '-1', null, 'a1d4c3f7-02a5-8433-5b02-3caf38a9a8e5', '0', '60', '300', '300', null, null);
INSERT INTO `xto_fans_queue` VALUES ('9e954c5d-9bb4-5df1-0436-0e91a7c72f8a', '244', 'bbbb', 'bbb', '0', null, '2019-02-28 09:49:42', '0', '-1', null, 'dc3583f2-e05e-5f94-d39a-282137ce5831', '0', '60', '300', '300', null, null);
INSERT INTO `xto_fans_queue` VALUES ('a276ba6f-5f05-ef54-608d-d3f94af16f86', '252', 'dddd', 'dddd', '0', null, '2019-02-28 09:49:50', '0', '-1', null, '37d5bca8-5e25-4f25-be93-9db7ebc811db', '0', '60', '300', '60', null, null);

-- ----------------------------
-- Table structure for xto_fields
-- ----------------------------
DROP TABLE IF EXISTS `xto_fields`;
CREATE TABLE `xto_fields` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `sql_type` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `mid` int(11) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_fields
-- ----------------------------
INSERT INTO `xto_fields` VALUES ('27', 'phone', '电话', 'phone', '', '', '5', '', '0', null, null);
INSERT INTO `xto_fields` VALUES ('28', 'email', '邮件', 'text', 'varchar(100)', '', '5', '', '0', null, null);

-- ----------------------------
-- Table structure for xto_imgs
-- ----------------------------
DROP TABLE IF EXISTS `xto_imgs`;
CREATE TABLE `xto_imgs` (
  `mgid` int(11) NOT NULL AUTO_INCREMENT,
  `module` varchar(255) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `img_100` varchar(255) DEFAULT NULL,
  `img_200` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`mgid`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_imgs
-- ----------------------------
INSERT INTO `xto_imgs` VALUES ('1', 'content', '16', '/uploads/oss/20171026\\3ed2c320fc8ba047d50a985e57b6b426.jpg', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('2', 'content', '17', '/uploads/oss/20171026\\4b745f2dfa60f2d11718a358265796b9.jpg', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('3', 'content', '25', '/uploads/oss/20171026\\1ddfd35f5a86c5b0228b0853215cc083.jpg', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('22', 'content', '1071', '/uploads/oss/20171129\\e444ca00f6a0c25265c8f04ac1461b24.jpg', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('23', null, null, '/uploads/oss/20171129\\f6cab8c51cf5e9f2393dfaa8ef173f77.jpg', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('24', null, null, '/uploads/oss/20171129\\7e4aed2ab885fc819f450670c268a9da.jpg', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('25', null, null, '/uploads/oss/20180531/861e94380ff85a5e93694a308a1daba2.png', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('26', null, null, '', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('27', null, null, '', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('28', null, null, '', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('29', null, null, '', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('30', null, null, '', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('31', null, null, '', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('32', null, null, '', '', null, null, '', '0');
INSERT INTO `xto_imgs` VALUES ('33', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('34', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('35', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('36', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('37', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('38', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('39', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('40', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('41', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('42', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('43', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('44', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('45', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('46', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('47', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('48', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('49', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('50', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('51', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('52', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('53', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('54', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('55', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('56', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('57', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('58', null, null, null, null, null, null, null, '0');
INSERT INTO `xto_imgs` VALUES ('59', null, null, null, null, null, null, null, '0');

-- ----------------------------
-- Table structure for xto_keyurl
-- ----------------------------
DROP TABLE IF EXISTS `xto_keyurl`;
CREATE TABLE `xto_keyurl` (
  `kid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`kid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_keyurl
-- ----------------------------
INSERT INTO `xto_keyurl` VALUES ('1', '百度1', 'http://www.baidu.com', null, null, null);
INSERT INTO `xto_keyurl` VALUES ('3', 'xtophp', 'http://www.xtoyun.net', '0', null, null);

-- ----------------------------
-- Table structure for xto_link
-- ----------------------------
DROP TABLE IF EXISTS `xto_link`;
CREATE TABLE `xto_link` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdate` int(11) DEFAULT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_link
-- ----------------------------
INSERT INTO `xto_link` VALUES ('1', 'XtoPHP', 'http://www.xtoyun.net', null, null, '/uploads/oss/20171026\\cdee2e01b5b19fd1b064526142d7eb0e.jpg', null);
INSERT INTO `xto_link` VALUES ('2', 'xtophp', 'http://www.xtoyun.cn', null, '0', '', null);

-- ----------------------------
-- Table structure for xto_logs
-- ----------------------------
DROP TABLE IF EXISTS `xto_logs`;
CREATE TABLE `xto_logs` (
  `logid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `createdate` int(11) DEFAULT NULL,
  PRIMARY KEY (`logid`)
) ENGINE=InnoDB AUTO_INCREMENT=2242 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_logs
-- ----------------------------
INSERT INTO `xto_logs` VALUES ('2192', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2193', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2194', 'test01', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'test01用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2195', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2196', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2197', 'test1', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'test1用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2198', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2199', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2200', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2201', 'test2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'test2用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2202', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2203', 'test2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'test2用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2204', 'test2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'test2用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2205', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2206', 'test1', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'test1用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2207', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2208', 'test1', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'test1用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2209', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2210', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2211', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2212', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '0', null);
INSERT INTO `xto_logs` VALUES ('2213', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2214', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2215', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2216', 'admin2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin2用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2217', 'admin2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin2用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2218', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2219', 'admin2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin2用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2220', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2221', 'admin2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin2用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2222', 'admin2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin2用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2223', 'admin2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin2用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2224', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2225', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2226', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2227', 'admin2', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin2用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2228', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2229', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2230', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2231', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2232', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2233', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2234', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2235', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2236', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2237', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2238', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2239', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2240', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);
INSERT INTO `xto_logs` VALUES ('2241', 'admin', 'http://cms.xtysb.com/admin.php/admin/login/login', '127.0.0.1', 'admin用户于登录成功登录成功', '10000', null);

-- ----------------------------
-- Table structure for xto_managers
-- ----------------------------
DROP TABLE IF EXISTS `xto_managers`;
CREATE TABLE `xto_managers` (
  `userid` int(11) NOT NULL,
  `appid` int(11) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `is_siter` bit(1) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_managers
-- ----------------------------
INSERT INTO `xto_managers` VALUES ('38', '10000', null, null, null, '');
INSERT INTO `xto_managers` VALUES ('100004', '10000', '管理员', '1554885796', '1554885796', '');
INSERT INTO `xto_managers` VALUES ('100006', '10004', null, '1554949936', '1554949936', '');

-- ----------------------------
-- Table structure for xto_members
-- ----------------------------
DROP TABLE IF EXISTS `xto_members`;
CREATE TABLE `xto_members` (
  `appid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `refer_userid` int(11) DEFAULT NULL,
  `refer_username` varchar(255) DEFAULT NULL,
  `trade_password` varchar(50) DEFAULT NULL,
  `trade_password_format` varchar(50) DEFAULT NULL,
  `points` decimal(18,6) DEFAULT NULL,
  `wallets` decimal(18,6) DEFAULT NULL,
  `top_region_id` int(11) unsigned zerofill DEFAULT NULL,
  `region_id` int(11) unsigned zerofill DEFAULT NULL,
  `realname` varchar(50) DEFAULT '',
  `nickname` varchar(50) DEFAULT '',
  `identify_card` varchar(100) DEFAULT '',
  `address` varchar(500) DEFAULT '',
  `zipcode` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `qq` varchar(100) DEFAULT NULL,
  `wangwang` varchar(100) DEFAULT NULL,
  `wechat` varchar(100) DEFAULT NULL,
  `alipay` varchar(100) DEFAULT NULL,
  `splittins` decimal(18,6) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_members
-- ----------------------------
INSERT INTO `xto_members` VALUES ('10000', '100011', null, null, '1f26ca49b75527a3032b477af57718dc', 'md5', '0.000000', '0.000000', null, null, '', '', '', '', null, null, null, null, null, 'test', null, '0.000000', '1555990117', '1556007956');

-- ----------------------------
-- Table structure for xto_message_data
-- ----------------------------
DROP TABLE IF EXISTS `xto_message_data`;
CREATE TABLE `xto_message_data` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `appid` int(11) DEFAULT NULL,
  `remsg` varchar(500) DEFAULT NULL,
  `createdate` int(11) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_message_data
-- ----------------------------
INSERT INTO `xto_message_data` VALUES ('1', '2', '<p>1212</p>', '0', '1', null);
INSERT INTO `xto_message_data` VALUES ('2', '2', '<p>1212</p>', '0', '1', null);
INSERT INTO `xto_message_data` VALUES ('3', '2', '<p>1212</p>', '0', '1', null);
INSERT INTO `xto_message_data` VALUES ('4', '2', '<p>1212</p>', '0', '好的，我们已经收到了您的请求，我们会尽快回复!!!', null);
INSERT INTO `xto_message_data` VALUES ('5', '2323121212', '12', '0', '15656', null);
INSERT INTO `xto_message_data` VALUES ('6', '11', '<p>1212</p>', '0', '1', null);
INSERT INTO `xto_message_data` VALUES ('7', '8121232323', '<p>78wewew</p>', '0', '', null);
INSERT INTO `xto_message_data` VALUES ('8', '2345', '<p>23454545</p>', '0', '', null);
INSERT INTO `xto_message_data` VALUES ('9', '454545', '<p>4545</p>', '0', null, null);
INSERT INTO `xto_message_data` VALUES ('10', '4545', '<p>4545</p>', '0', null, null);

-- ----------------------------
-- Table structure for xto_messages
-- ----------------------------
DROP TABLE IF EXISTS `xto_messages`;
CREATE TABLE `xto_messages` (
  `mbid` int(11) NOT NULL AUTO_INCREMENT,
  `mid` int(11) DEFAULT NULL,
  `sender` varchar(255) DEFAULT NULL,
  `accepter` varchar(255) DEFAULT NULL,
  `isread` bit(1) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `updatetime` int(11) DEFAULT NULL,
  PRIMARY KEY (`mbid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_messages
-- ----------------------------
INSERT INTO `xto_messages` VALUES ('6', '6', 'cn888888', 'cn888888', '', '0', null);

-- ----------------------------
-- Table structure for xto_nav
-- ----------------------------
DROP TABLE IF EXISTS `xto_nav`;
CREATE TABLE `xto_nav` (
  `nid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) unsigned zerofill NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `ename` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `model_id` int(11) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `is_view` bit(1) DEFAULT NULL,
  `nav_order` int(11) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_nav
-- ----------------------------
INSERT INTO `xto_nav` VALUES ('1', '00000000000', 'list', '新闻动态', 'news', '', '5', '10000', '', '', '10', null, null, null, null);
INSERT INTO `xto_nav` VALUES ('2', '00000000001', 'list', '行业动态', '1212', '', '5', '10000', '1212', '', '10', null, null, null, null);
INSERT INTO `xto_nav` VALUES ('4', '00000000000', 'show', '关于我们', 'link', '/web/about/link', '6', '10000', '', '', '40', null, null, null, null);
INSERT INTO `xto_nav` VALUES ('5', '00000000004', 'show', '联系我们', '', '', '6', '10000', '7', '', '40', null, null, null, null);
INSERT INTO `xto_nav` VALUES ('7', '00000000000', 'list', '更新日志', '', '', '5', '10000', '', '', '30', null, null, null, null);
INSERT INTO `xto_nav` VALUES ('8', '00000000000', 'list', '产品中心', 'product', '', '8', '10000', '', '', '20', '', null, null, null);
INSERT INTO `xto_nav` VALUES ('9', '00000000001', 'list', '服务支持', 'service', '', '5', '10000', '', '', '10', null, null, null, null);
INSERT INTO `xto_nav` VALUES ('10', '00000000008', 'list', '有站CMS', 'youzan', '', '8', '10000', '', '', '0', '', null, null, null);
INSERT INTO `xto_nav` VALUES ('11', '00000000000', '', '管理后台', '', '/admin.php', '0', '10000', '', '', '80', null, null, null, null);

-- ----------------------------
-- Table structure for xto_pays
-- ----------------------------
DROP TABLE IF EXISTS `xto_pays`;
CREATE TABLE `xto_pays` (
  `appid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `payid` int(11) NOT NULL AUTO_INCREMENT,
  `paytype` varchar(50) DEFAULT NULL,
  `config` varchar(1000) DEFAULT NULL,
  `remark` varchar(500) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`payid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_pays
-- ----------------------------
INSERT INTO `xto_pays` VALUES ('0', '4545', '7', 'alipay', '{\"\\u7c7b\\u578b\":\"\\u652f\\u4ed8\\u5b9d\",\"\\u63cf\\u8ff0\":\"\\u652f\\u4ed8\\u5b9d(www.alipay.com)\",\"appid\":\"4545\",\"key\":\"\"}', '', null, null);

-- ----------------------------
-- Table structure for xto_points
-- ----------------------------
DROP TABLE IF EXISTS `xto_points`;
CREATE TABLE `xto_points` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `tradetype` smallint(6) DEFAULT NULL,
  `income` decimal(18,0) DEFAULT NULL,
  `expenses` decimal(18,0) DEFAULT NULL,
  `balance` decimal(18,0) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `tradedate` int(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_points
-- ----------------------------
INSERT INTO `xto_points` VALUES ('1', '43', 'utest', null, '11', '0', '23', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('2', '43', 'utest', null, '11', '0', '34', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('3', '43', 'utest', null, '11', '0', '45', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('4', '43', 'utest', null, '11', '0', '56', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('5', '61', 't1222', null, null, '0', '0', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('6', '61', 't1222', null, null, '0', '0', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('7', '61', 't1222', null, '5454', '0', '5454', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('8', '61', 't1222', null, '100', '0', '5554', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('9', '63', 'apple', null, '1', '0', '1', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('10', '63', 'apple', null, '100', '0', '101', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('11', '213', 'j88888', '0', '100', '0', '100', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('12', '213', 'j88888', '0', '100', '0', '200', '后台添加', '0', null);
INSERT INTO `xto_points` VALUES ('13', '288', 'cn888888', '0', '100', '0', '100', '', '0', null);
INSERT INTO `xto_points` VALUES ('14', '288', 'cn888888', '0', '100', '0', '200', '', '0', null);

-- ----------------------------
-- Table structure for xto_product
-- ----------------------------
DROP TABLE IF EXISTS `xto_product`;
CREATE TABLE `xto_product` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT '0' COMMENT '内容id',
  `cateid` int(11) DEFAULT '0' COMMENT '类别id',
  `order` varchar(255) DEFAULT '' COMMENT '排序',
  `appid` int(11) DEFAULT '0' COMMENT 'appid',
  `selfin` varchar(255) DEFAULT '' COMMENT '推荐',
  `version` varchar(255) DEFAULT '' COMMENT '版本',
  `price` decimal(18,4) DEFAULT '0.0000' COMMENT '价格',
  `spec` varchar(255) DEFAULT '0' COMMENT '规格',
  `nid` int(11) DEFAULT '0' COMMENT '栏目',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_product
-- ----------------------------

-- ----------------------------
-- Table structure for xto_product_category
-- ----------------------------
DROP TABLE IF EXISTS `xto_product_category`;
CREATE TABLE `xto_product_category` (
  `cateid` int(11) NOT NULL AUTO_INCREMENT,
  `parent_cateid` int(11) DEFAULT NULL,
  `catename` varchar(255) DEFAULT NULL,
  `order` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`cateid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_product_category
-- ----------------------------
INSERT INTO `xto_product_category` VALUES ('12', '0', 'test', '', '0');

-- ----------------------------
-- Table structure for xto_relays
-- ----------------------------
DROP TABLE IF EXISTS `xto_relays`;
CREATE TABLE `xto_relays` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `appid` int(11) DEFAULT NULL,
  `group` varchar(255) DEFAULT NULL,
  `mgid` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_relays
-- ----------------------------
INSERT INTO `xto_relays` VALUES ('1', '10000', null, null, '首页顶部', '', null, null);

-- ----------------------------
-- Table structure for xto_relays_data
-- ----------------------------
DROP TABLE IF EXISTS `xto_relays_data`;
CREATE TABLE `xto_relays_data` (
  `rdid` int(11) NOT NULL AUTO_INCREMENT,
  `rid` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `createdate` int(11) DEFAULT NULL,
  PRIMARY KEY (`rdid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_relays_data
-- ----------------------------
INSERT INTO `xto_relays_data` VALUES ('2', '1', 'xtoyun76', 'https://xtocn.oss-cn-hangzhou.aliyuncs.com/2018/07/17/782e9790a0a0b612b90e059d8c64bd8a.png', 'http://www.xtoyun.net', '10000', null);

-- ----------------------------
-- Table structure for xto_rolefunction
-- ----------------------------
DROP TABLE IF EXISTS `xto_rolefunction`;
CREATE TABLE `xto_rolefunction` (
  `roleid` int(11) NOT NULL,
  `funid` varchar(50) NOT NULL,
  `appid` int(11) NOT NULL,
  PRIMARY KEY (`roleid`,`funid`,`appid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_rolefunction
-- ----------------------------
INSERT INTO `xto_rolefunction` VALUES ('27', '', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/about/create', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/about/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/account/init', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/api/create_nav', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/api/delete_nav', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/api/update_nav', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/article/create', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/article/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/basic/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/category/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/config/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/content/init', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/inbox/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/manager/create', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/manager/delete_post', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/manager/edit', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/manager/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/member/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/member/init', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/message/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/model/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/nav/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/pcategory/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/point/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/product/create', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/product/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/product/init', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/roles/allot', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/roles/create', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/roles/delete_post', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/roles/edit', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/roles/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/sendbox/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/sendbox/send', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/splittin/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/upteam/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('27', '/admin/wallet/index', '0');

-- ----------------------------
-- Table structure for xto_roles
-- ----------------------------
DROP TABLE IF EXISTS `xto_roles`;
CREATE TABLE `xto_roles` (
  `roleid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_roles
-- ----------------------------
INSERT INTO `xto_roles` VALUES ('27', '雇主', ' ', '0', null, null);

-- ----------------------------
-- Table structure for xto_splittins
-- ----------------------------
DROP TABLE IF EXISTS `xto_splittins`;
CREATE TABLE `xto_splittins` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `tradetype` smallint(6) DEFAULT NULL,
  `fromuser` int(11) DEFAULT NULL,
  `income` decimal(18,4) DEFAULT NULL,
  `expenses` decimal(18,4) DEFAULT NULL,
  `balance` decimal(18,4) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `fax` decimal(10,0) DEFAULT NULL,
  `classid` int(11) DEFAULT NULL,
  `isuse` bit(1) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `tradedate` int(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_splittins
-- ----------------------------
INSERT INTO `xto_splittins` VALUES ('29', '76', 'cn888888', null, null, '100.0000', '0.0000', '100.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('30', '76', 'cn888888', null, null, '100.0000', '0.0000', '200.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('31', '76', 'cn888888', null, null, '100.0000', '0.0000', '300.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('32', '76', 'cn888888', null, null, '100.0000', '0.0000', '400.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('33', '76', 'cn888888', null, null, '100.0000', '0.0000', '500.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('34', '76', 'cn888888', null, null, '100.0000', '0.0000', '600.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('35', '76', 'cn888888', null, null, '100.0000', '0.0000', '700.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('36', '76', 'cn888888', null, null, '99.0000', '0.0000', '799.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('37', '76', 'cn888888', null, null, '100.0000', '0.0000', '899.0000', '后台添加', null, null, '', '0', null);
INSERT INTO `xto_splittins` VALUES ('38', '213', 'j88888', '0', null, '100.0000', '0.0000', '181.0000', '后台添加', null, null, null, '0', null);
INSERT INTO `xto_splittins` VALUES ('39', '213', 'j88888', '0', null, '100.0000', '0.0000', '100.0000', '后台添加', null, null, null, '0', null);
INSERT INTO `xto_splittins` VALUES ('40', '288', 'cn888888', '0', null, '100.0000', '0.0000', '100.0000', '后台添加', null, null, null, '0', null);
INSERT INTO `xto_splittins` VALUES ('41', '288', 'cn888888', '0', null, '100.0000', '0.0000', '100.0000', '7', null, null, null, '0', null);
INSERT INTO `xto_splittins` VALUES ('42', '288', 'cn888888', '0', null, '100.0000', '0.0000', '100.0000', '', null, null, null, '0', null);
INSERT INTO `xto_splittins` VALUES ('43', '288', 'cn888888', '0', null, '100.0000', '0.0000', '100.0000', '', null, null, null, '0', null);

-- ----------------------------
-- Table structure for xto_users
-- ----------------------------
DROP TABLE IF EXISTS `xto_users`;
CREATE TABLE `xto_users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `password_format` varchar(50) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobilein` varchar(100) DEFAULT NULL,
  `password_question` varchar(200) DEFAULT NULL,
  `password_answer` varchar(50) DEFAULT NULL,
  `is_approved` bit(1) DEFAULT NULL,
  `is_locked` bit(1) DEFAULT NULL,
  `createdate` int(11) DEFAULT NULL,
  `userrole` smallint(6) DEFAULT NULL,
  `funrole` smallint(6) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `last_login_date` int(11) DEFAULT NULL,
  `last_password_changeddate` int(11) DEFAULT NULL,
  `last_lockeddate` int(11) DEFAULT NULL,
  `failed_password_attemptcount` int(11) DEFAULT NULL,
  `comment` text,
  `gender` smallint(6) DEFAULT NULL,
  `birthdate` datetime DEFAULT NULL,
  `session_id` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `is_admin` bit(1) DEFAULT NULL,
  `headimg` varchar(255) DEFAULT NULL,
  `secret` varchar(255) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `is_plat` bit(1) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=100012 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_users
-- ----------------------------
INSERT INTO `xto_users` VALUES ('38', 'admin', '6bf091982bfa20d44b61df5a45abdb00', 'md5', '5cac97cb11983', null, null, null, null, '', '\0', '1554814343', null, null, '10000', '1555990063', null, null, null, null, null, null, null, null, '', null, null, null, '');
INSERT INTO `xto_users` VALUES ('100000', 'ttt111', '593109162c9f84a35dd2cb06c364ff1c', 'md5', '5cadaa1f5433e', null, null, null, null, '', '\0', '1554885151', null, null, '10000', null, null, null, null, null, null, null, null, null, '\0', null, null, null, '\0');
INSERT INTO `xto_users` VALUES ('100006', 'admin2', 'bf0a519bbc10b3ce2c977c0a87701497', 'md5', '5caea73032df8', null, null, null, null, '', '\0', '1554949936', null, null, '10004', null, null, null, null, null, null, null, null, null, '', null, null, null, '\0');
INSERT INTO `xto_users` VALUES ('100011', 'test', 'd4dca6b1884a5b5e885c685d4edeca64', 'md5', '5cbe866563f64', null, null, null, null, '', '\0', '1555990117', null, null, '10000', '1556006235', null, null, null, null, null, null, null, null, '\0', null, null, null, '\0');

-- ----------------------------
-- Table structure for xto_usersinroles
-- ----------------------------
DROP TABLE IF EXISTS `xto_usersinroles`;
CREATE TABLE `xto_usersinroles` (
  `userid` int(11) NOT NULL,
  `roleid` int(11) NOT NULL,
  `appid` int(11) NOT NULL,
  PRIMARY KEY (`userid`,`roleid`,`appid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_usersinroles
-- ----------------------------
INSERT INTO `xto_usersinroles` VALUES ('38', '27', '0');

-- ----------------------------
-- Table structure for xto_wallets
-- ----------------------------
DROP TABLE IF EXISTS `xto_wallets`;
CREATE TABLE `xto_wallets` (
  `wid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `tradetype` int(11) DEFAULT NULL,
  `income` decimal(20,6) NOT NULL,
  `expenses` decimal(20,6) DEFAULT NULL,
  `balance` decimal(20,6) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `fromuser` int(11) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `tradedate` int(11) DEFAULT NULL,
  PRIMARY KEY (`wid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_wallets
-- ----------------------------
DROP TRIGGER IF EXISTS `insert`;
DELIMITER ;;
CREATE TRIGGER `insert` AFTER INSERT ON `xto_fans_group_detail` FOR EACH ROW begin
update xto_fans_group set  peoples=peoples+1 where gid = new.gid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `delete`;
DELIMITER ;;
CREATE TRIGGER `delete` AFTER DELETE ON `xto_fans_group_detail` FOR EACH ROW begin
update xto_fans_group set  peoples=peoples-1 where gid = old.gid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `me_insert`;
DELIMITER ;;
CREATE TRIGGER `me_insert` AFTER INSERT ON `xto_fans_order_me` FOR EACH ROW begin
update xto_fans_publish set  zmount_balance=new.zmount_balance where pid = new.pid and appid=new.appid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `me_delete`;
DELIMITER ;;
CREATE TRIGGER `me_delete` AFTER DELETE ON `xto_fans_order_me` FOR EACH ROW begin
update xto_fans_publish set  zmount_balance=zmount_balance-old.zmount where pid = old.pid and appid=old.appid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `you_insert`;
DELIMITER ;;
CREATE TRIGGER `you_insert` AFTER INSERT ON `xto_fans_order_you` FOR EACH ROW begin
update xto_fans_queue set bmount_balance=new.bmount_balance where from_pid=new.pid;
update xto_fans_publish set bmount_balance=new.bmount_balance where pid=new.pid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `you_delete`;
DELIMITER ;;
CREATE TRIGGER `you_delete` AFTER DELETE ON `xto_fans_order_you` FOR EACH ROW begin
update xto_fans_queue set  bmount_balance= bmount_balance-old.bmount where from_pid = old.pid and appid=old.appid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `tr_point_insert`;
DELIMITER ;;
CREATE TRIGGER `tr_point_insert` AFTER INSERT ON `xto_points` FOR EACH ROW begin
update xto_members set points = new.balance where userid = new.userid and appid=new.appid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `tr_splittin_insert`;
DELIMITER ;;
CREATE TRIGGER `tr_splittin_insert` AFTER INSERT ON `xto_splittins` FOR EACH ROW begin
update xto_members set splittins = new.balance where userid = new.userid and new.isuse=1 and appid=new.appid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `tr_wallet_insert`;
DELIMITER ;;
CREATE TRIGGER `tr_wallet_insert` AFTER INSERT ON `xto_wallets` FOR EACH ROW begin
update xto_members set wallets = new.balance where userid = new.userid and appid=new.appid;
end
;;
DELIMITER ;
