SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for web_about
-- ----------------------------
DROP TABLE IF EXISTS `web_about`;
CREATE TABLE `web_about` (
  `abid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `order` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `selfin` varchar(50) DEFAULT NULL,
  `nid` int(11) unsigned zerofill NOT NULL,
  PRIMARY KEY (`abid`)
) ENGINE=InnoDB AUTO_INCREMENT=1056 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_about
-- ----------------------------
INSERT INTO `web_about` VALUES ('1054', '1057', '', '', null, '2017-11-23 15:01:57', '', '00000000004');
INSERT INTO `web_about` VALUES ('1055', '1058', '', '', null, '2017-11-23 15:03:00', '', '00000000005');

-- ----------------------------
-- Table structure for web_article
-- ----------------------------
DROP TABLE IF EXISTS `web_article`;
CREATE TABLE `web_article` (
  `arid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `cateid` int(11) DEFAULT NULL,
  `order` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `selfin` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `nid` int(11) DEFAULT NULL,
  PRIMARY KEY (`arid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_article
-- ----------------------------
INSERT INTO `web_article` VALUES ('13', '1060', '6', '', '0', 'tj', null, '2');
INSERT INTO `web_article` VALUES ('14', '1061', '6', '', '0', 'tj', '2017-11-23 15:13:58', '2');
INSERT INTO `web_article` VALUES ('15', '1062', '6', '', '0', 'tj', '2017-11-23 15:13:51', '2');
INSERT INTO `web_article` VALUES ('16', '1063', '6', '', '0', 'tj', '2017-11-23 15:23:26', '2');
INSERT INTO `web_article` VALUES ('17', '1064', '7', '', '0', 'tj', null, '9');
INSERT INTO `web_article` VALUES ('18', '1065', '8', '', '0', 'tj', null, '9');
INSERT INTO `web_article` VALUES ('19', '1066', '8', '', '0', 'tj', null, '9');
INSERT INTO `web_article` VALUES ('20', '1067', '8', '', '0', 'tj', null, '9');
INSERT INTO `web_article` VALUES ('21', '1068', '7', '', '0', 'tj', '2017-11-23 15:44:40', '9');
INSERT INTO `web_article` VALUES ('23', '1070', '6', '', '0', 'tj', '2017-11-24 14:44:45', '10');

-- ----------------------------
-- Table structure for web_article_category
-- ----------------------------
DROP TABLE IF EXISTS `web_article_category`;
CREATE TABLE `web_article_category` (
  `cateid` int(11) NOT NULL AUTO_INCREMENT,
  `parent_cateid` int(11) DEFAULT NULL,
  `catename` varchar(255) DEFAULT NULL,
  `order` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`cateid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_article_category
-- ----------------------------
INSERT INTO `web_article_category` VALUES ('6', '0', '最新动态', '10', null);
INSERT INTO `web_article_category` VALUES ('7', '0', '功能发布', '20', null);
INSERT INTO `web_article_category` VALUES ('8', '0', '更新日志', '30', null);

-- ----------------------------
-- Table structure for web_content
-- ----------------------------
DROP TABLE IF EXISTS `web_content`;
CREATE TABLE `web_content` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `content` longtext,
  `createdate` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `keywords` varchar(255) DEFAULT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=1071 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_content
-- ----------------------------
INSERT INTO `web_content` VALUES ('1057', '关于我们', '<p><span style=\"font-family: monospace; white-space: pre-wrap; font-size: 20px;\">XtoPHP是基于TP5的企业快速开发平台，专注互联网营销软件及服务</span></p><p><span style=\"font-family: monospace; white-space: pre-wrap; font-size: 20px;\">目前我们已经成功开发XtoPHP（快速开发），有站（营销网站）；</span></p>', '2017-11-23 15:00:48', '', '', null, '0', '2017-11-23 15:01:57');
INSERT INTO `web_content` VALUES ('1058', '联系我们', '<p>官网：<a href=\"http://www.xtoyun.net\">http://www.xtoyun.net</a> </p><p>联系电话：13710429923</p>', '2017-11-23 15:02:40', '', '', null, '0', '2017-11-23 15:03:00');
INSERT INTO `web_content` VALUES ('1059', '市税务局开通微信小程序服务', '<p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">如果在办税服务厅办业务不用排队就好了”，这是“老财务”上海伍缘现代杂货有限公司财务负责人吴丹华每次在取号机前排队取号时的梦想。现在，这个梦想实现了。日前，上海市税务局利用微信小程序开通了“微信取号”服务，纳税人可以随时随地获取办税大厅的排队人数和等待时间，并可直接通过手机实现实时取号。</p><p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">　　昨天，在普陀区税务局的办税大厅，吴丹华告诉记者，今天出门办事前通过微信小程序取了号，果然来到办税大厅后就可以“来了即办，办了即走”，“如果人特别多依旧需要排队，我也不用坐着干等了，因为我可以通过小程序看见排队人数和等待时间，甚至可以悠闲地去楼下买杯咖啡。”</p><p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">　　市税务局相关负责人介绍，普陀、徐汇、静安、松江、青浦5个分局的办税大厅目前已开通“微信取号”服务，其余11个分局的办税大厅均将于今年年底前开通此项服务。下一步，市税务局还将在减少时间准备、简化办税流程等其他五大方面进一步提升纳税服务水平。</p><p><br/></p>', '2017-11-23 15:05:44', '', '', null, '0', null);
INSERT INTO `web_content` VALUES ('1060', '市税务局开通微信小程序服务', '<p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">如果在办税服务厅办业务不用排队就好了”，这是“老财务”上海伍缘现代杂货有限公司财务负责人吴丹华每次在取号机前排队取号时的梦想。现在，这个梦想实现了。日前，上海市税务局利用微信小程序开通了“微信取号”服务，纳税人可以随时随地获取办税大厅的排队人数和等待时间，并可直接通过手机实现实时取号。</p><p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">　　昨天，在普陀区税务局的办税大厅，吴丹华告诉记者，今天出门办事前通过微信小程序取了号，果然来到办税大厅后就可以“来了即办，办了即走”，“如果人特别多依旧需要排队，我也不用坐着干等了，因为我可以通过小程序看见排队人数和等待时间，甚至可以悠闲地去楼下买杯咖啡。”</p><p style=\"margin-top: 15px; margin-bottom: 15px; padding: 0px; line-height: 2em; font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53; white-space: normal;\">　　市税务局相关负责人介绍，普陀、徐汇、静安、松江、青浦5个分局的办税大厅目前已开通“微信取号”服务，其余11个分局的办税大厅均将于今年年底前开通此项服务。下一步，市税务局还将在减少时间准备、简化办税流程等其他五大方面进一步提升纳税服务水平。</p><p><br/></p>', '2017-11-23 15:05:56', '如果在办税服务厅办业务不用排队就好了”，这是“老财务”上海伍缘现代杂货有限公司财务负责人吴丹华每次在取号机前排队取号时的梦想。现在，这个梦想实现了', '', null, '0', null);
INSERT INTO `web_content` VALUES ('1061', '“小程序” 生态助力企业升级', '<p><span style=\"font-family: &quot;Microsoft YaHei&quot;, u5FAEu8F6Fu96C5u9ED1, Arial, SimSun, u5B8Bu4F53;\">本报11月22日讯&nbsp;&nbsp;&nbsp;自微信小程序上线以来，“小程序热”便开始席卷线上线下各行各业。11月22日，以“小程序&nbsp;大生态”为主题的微盟小程序沙龙登陆长沙，长沙及周边一千多位业内人士参会。微盟创始人兼CEO孙涛勇、湖南日报新媒体发展有限公司董事长张德会等嘉宾和实战专家做了主旨演讲。</span></p>', '2017-11-23 15:06:52', '自微信小程序上线以来，“小程序热”便开始席卷线上线下各行各业', '', null, '0', '2017-11-23 15:13:58');
INSERT INTO `web_content` VALUES ('1062', '抢占小程序红利！小鹅通知识变现小程序现免费赠送中', '<p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">小鹅通提供的小程序内，支持直播、音频、视频、图文、社群等多种内容展现形式。小鹅通创始人鲍春健告诉记者，这次针对新客户的小程序赠送活动将会持续到11月26号详情可见小鹅通官网及其微信公众号。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">据了解，小鹅通是内容付费领域知名的技术服务商，已获取大量自媒体、传统媒体、出版社、教育机构等领域的头部客户，如：吴晓波频道、十点读书、张德芬空间、腾讯科技、功夫财经、宋鸿兵、新京报书评、樊登读书会、年糕妈妈、周国平、豆瓣时间等，在微信生态内都布局有自己的小鹅通知识店铺。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">微信团队日前在微信公开课成都站透露了小程序下一步的发展方向将是优化小程序入口，为商家带来更多流量，以及实现在小程序中嵌入广告，提升小程序变现能力。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">对于内容创业者来说，微信的持续投入，很可能使小程序成为微信公众号之后又一波流量红利。大量知识付费领域头部都已尝试小程序实现知识变现，吴晓波频道、十点读书、张德芬空间等大咖今年1月份就通过小鹅通布局小程序知识店铺。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">小程序的在技术上的特殊性，使其本身不会消耗太大流量，省去了下载和卸载的过程，运行时又能独立于其他APP，这些特性都让小程序能迸发更多的活力和机会，释放知识付费市场的潜力。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">“最直观的一点就是，使用小鹅通的小程序店铺，用户可以实现收听课程的同时，进行微信聊天或浏览其他页面，这对于目前以音频为主要内容展现形式的情况下，可以极大提高用户的使用体验。”</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">通过小鹅通小程序，可以解决知识变现需要解决的内容展现、支付交互、社群运营、用户管理等问题。同时，小程序可以直接对接公众号，帮助内容创业者实现精准的营销和转化。鲍春健表示，随着微信不断对小程序进行新特性的开放，小鹅通也会做出相应开发，为内容创业者提供持续的技术支持和服务。</p><p style=\"padding: 0px; margin-top: 0px; margin-bottom: 25px; text-indent: 30px; clear: both; color: rgb(51, 51, 51); font-family: &quot;microsoft yahei&quot;, simhei; white-space: normal; background-color: rgb(255, 255, 255);\">除小程序外，小鹅通提供的内容变现形式包括网页、APP等。除此之外，小鹅通还提供开放平台等定制服务，可以植入已有的网站或APP，实现不同生态内用户数据互通。</p><p><br/></p>', '2017-11-23 15:07:30', '自微信小程序上线以来，“小程序热”便开始席卷线上线下各行各业', '', null, '0', '2017-11-23 15:13:51');
INSERT INTO `web_content` VALUES ('1063', '按摩椅+微信小程序 微播助力共享经济新成员', '<p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\">要说全世界共享经济业态前途最明朗的地方，那无疑是中国。仅2017年，共享单车行业诞生了首家“独角兽企业”，共享充电宝企业数周内成功融资1.5亿美元，开展共享雨伞业务的新兴企业宣布今年向广州市投放50万把雨伞，一系列的共享产品引发用户与媒体的广泛关注，这一切都显示出共享经济即将转变成巨大风口的发展态势。在这种趋势下，北京微播易道依托强大的小程序技术优势，助力共享按摩椅的诞生，为共享经济大家庭再添一名新成员。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\"><img alt=\"\" src=\"/uploads/ueditor/image/20171123/1511420903114103.jpg\" width=\"517\"/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\">继(优睡空间)共享睡眠仓之后，微播易道又迎来一个全新共享经济项目-共享按摩椅，这就意味着，往后再去银行、政府、医院排队的时候，不必带上小马扎，直接扫码享受舒适的按摩椅!</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\"><img alt=\"\" src=\"/uploads/ueditor/image/20171123/1511420904288571.jpg\" width=\"414\"/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\">据悉，微播易道本次将要打造的按摩椅名字为艾力斯，洋气的名字背后可是接地气的服务理念。艾力斯特共享按摩椅产品是以物联网技术为基础打造的020都市舒压体验空间，艾力斯特是以‘随时享受智能按摩生活”为理念，将舒适专业的按摩服务延伸到银行、医院、政务大厅、办公楼、酒店、棋牌室等公共场所，让消费者以低成本，碎片化的时间享受健康服务。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\">共享按摩椅小程序项目是基于微信小程序唯一的共享按摩椅平台，无需安装下载通过微信二维码扫描直接使用、可以做到按摩椅场所附近五公里范围内的微信自带流量、让9亿用户打开共享按摩椅平台小程序，就能地图上看到按摩椅的所在位置并且可以直接线上导航找到每台按摩椅所在的位置，扫码并使用它。用户还可以获取商家营销红包，用于减免按摩椅使用费用。当然，最诱人的当属预约功能，用户可以提前预约按摩椅，避免排队。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\"><img alt=\"\" src=\"/uploads/ueditor/image/20171123/1511420904115669.jpg\" width=\"472\"/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\">微播易道本次助力艾力斯共享按摩椅项目利用微信小程序+智能硬件，快速实现共享按摩椅功能上线，无需安装APP，微信扫码即可进入，快速积累用户，本次小程序开发有助于共享经济+，降低成本，缩短开发周期。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\">中国的共享经济新业态正是一派“阳光普照”。在国家政策层面，“互联网+”“大众创业、万众创新”是政府所鼓励的，各种形式的共享经济，都搭上了这趟便车，要么一路绿灯，要么经过一番博弈，最终也大多胜出。小程序的浪潮到来，助力共享经济+，机会在此，千万不要错过!</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px 0px 24px; text-indent: 32px; white-space: normal; background-color: rgb(255, 255, 255); font-family: SimSun; color: rgb(37, 37, 37);\">微播易道CEO常和森表示：互联网产业发展至今，任何一个小的变化都可能成为引发行业震荡的风口。小程序如此，共享经济如此，小程序+共享经济更是如此。</p><p><br/></p>', '2017-11-23 15:08:32', '微播易道CEO常和森表示：互联网产业发展至今，任何一个小的变化都可能成为引发行业震荡的风口。小程序如此，共享经济如此，小程序+共享经济更是如此。', '', null, '0', '2017-11-23 15:23:25');
INSERT INTO `web_content` VALUES ('1064', 'XtoPHP发布有站功能', '<p>增加【有站】模块，基于企业建站营销服务</p><p>主要核心功能：</p><p>1、内容设置(内容模型、栏目管理、网站配置)</p><p>2、应用插件(关键字、友情链接、放灯片)</p><p>3、内容管理(添加新闻、单页管理)</p><p>4、支持多模板扩展</p><p>5、增加新模块数据库表，以web_开头</p><p>演示网址：http://demo.xtoyun.net</p><p><br/></p>', '2017-11-23 15:32:08', '', '', null, '0', null);
INSERT INTO `web_content` VALUES ('1065', 'XtoPHP有站【20171123】更新日志', '<p>## V0.2</p><p>增加【有站】模块，基于企业建站营销服务</p><p>主要核心功能：</p><p>1、内容设置(内容模型、栏目管理、网站配置)</p><p>2、应用插件(关键字、友情链接、放灯片)</p><p>3、内容管理(添加新闻、单页管理)</p><p>4、支持多模板扩展</p><p>5、增加新模块数据库表，以web_开头</p><p>演示网址：http://demo.xtoyun.net</p><p><br/></p>', '2017-11-23 15:33:41', '', '', null, '0', null);
INSERT INTO `web_content` VALUES ('1066', 'XtoPHP更新日志V0.18', '<p>## V0.18</p><p>增加单独只显示模板类,</p><p>增加xto标签类</p><p><br/></p>', '2017-11-23 15:37:27', '', '', null, '0', null);
INSERT INTO `web_content` VALUES ('1067', 'XtoPHP更新日志V0.17', '<p>## V0.17</p><p>修复界面问题，</p><p>为有站项目做些准备，</p><p>增加菜单XML当前可以控制多个</p><p><br/></p>', '2017-11-23 15:42:41', '', '', null, '0', null);
INSERT INTO `web_content` VALUES ('1068', 'XtoPHP增加MVVM开发vue.js框架', '<p>Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。</p>', '2017-11-23 15:44:00', 'Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架', '', null, '0', '2017-11-23 15:44:40');
INSERT INTO `web_content` VALUES ('1069', '有站CMS专注于企业营销网站', '<p>有站CMS专注于企业营销网站</p>', '2017-11-24 14:36:52', '', '', null, '0', null);
INSERT INTO `web_content` VALUES ('1070', '有站CMS专注于企业营销网站', '<p>有站CMS专注于企业营销网站</p>', '2017-11-24 14:37:30', '有站CMS专注于企业营销网站，帮助小微企业建立营销官网', '', null, '0', '2017-11-24 14:44:45');

-- ----------------------------
-- Table structure for web_imgs
-- ----------------------------
DROP TABLE IF EXISTS `web_imgs`;
CREATE TABLE `web_imgs` (
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_imgs
-- ----------------------------
INSERT INTO `web_imgs` VALUES ('1', 'content', '16', '/uploads/oss/20171026\\3ed2c320fc8ba047d50a985e57b6b426.jpg', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('2', 'content', '17', '/uploads/oss/20171026\\4b745f2dfa60f2d11718a358265796b9.jpg', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('3', 'content', '25', '/uploads/oss/20171026\\1ddfd35f5a86c5b0228b0853215cc083.jpg', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('4', 'content', '26', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('5', 'content', '1051', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('6', 'content', '1052', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('7', 'content', '1053', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('8', 'content', '1055', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('9', 'content', '1056', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('10', 'content', '1059', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('11', 'content', '1060', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('12', 'content', '1061', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('13', 'content', '1062', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('14', 'content', '1063', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('15', 'content', '1064', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('16', 'content', '1065', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('17', 'content', '1066', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('18', 'content', '1067', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('19', 'content', '1068', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('20', 'content', '1069', '', '', null, null, '', '0');
INSERT INTO `web_imgs` VALUES ('21', 'content', '1070', '', '', null, null, '', '0');

-- ----------------------------
-- Table structure for web_keyurl
-- ----------------------------
DROP TABLE IF EXISTS `web_keyurl`;
CREATE TABLE `web_keyurl` (
  `kid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`kid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_keyurl
-- ----------------------------
INSERT INTO `web_keyurl` VALUES ('1', '百度1', 'http://www.baidu.com', null);

-- ----------------------------
-- Table structure for web_link
-- ----------------------------
DROP TABLE IF EXISTS `web_link`;
CREATE TABLE `web_link` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_link
-- ----------------------------
INSERT INTO `web_link` VALUES ('1', 'XtoPHP', 'http://www.xtoyun.net', null, null, null, '/uploads/oss/20171026\\cdee2e01b5b19fd1b064526142d7eb0e.jpg');
INSERT INTO `web_link` VALUES ('2', '雄韬软件', 'http://www.xtocn.com', null, null, null, '');

-- ----------------------------
-- Table structure for web_model
-- ----------------------------
DROP TABLE IF EXISTS `web_model`;
CREATE TABLE `web_model` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `appid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `tablename` varchar(255) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `default_theme` varchar(255) DEFAULT NULL,
  `category_template` varchar(255) DEFAULT NULL,
  `list_template` varchar(255) DEFAULT NULL,
  `show_template` varchar(255) DEFAULT NULL,
  `is_sys` bit(1) DEFAULT NULL,
  `controller` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_model
-- ----------------------------
INSERT INTO `web_model` VALUES ('3', null, '文章模型', '', 'web_article', null, 'default', 'category_article.html', 'list_article.html', 'show_article.html', '', 'article');
INSERT INTO `web_model` VALUES ('4', null, '单页模型', '', 'web_about', null, 'default', 'category_about.html', 'list_about.html', 'show_about.html', '', 'about');

-- ----------------------------
-- Table structure for web_nav
-- ----------------------------
DROP TABLE IF EXISTS `web_nav`;
CREATE TABLE `web_nav` (
  `nid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) unsigned zerofill NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `ename` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `model_id` int(11) DEFAULT NULL,
  `default_theme` varchar(255) DEFAULT NULL,
  `category_template` varchar(255) DEFAULT NULL,
  `list_template` varchar(255) DEFAULT NULL,
  `show_template` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `is_view` bit(1) DEFAULT NULL,
  `nav_order` int(11) DEFAULT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_nav
-- ----------------------------
INSERT INTO `web_nav` VALUES ('1', '00000000000', 'list', '新闻动态', 'news', '', '3', 'default', 'category_article.html', 'list_article.html', 'show_article.html', null, '', '', '10');
INSERT INTO `web_nav` VALUES ('2', '00000000001', 'list', '行业动态', '1212', '', '3', 'default', 'category_article.html', 'list_article.html', 'show_article.html', null, '1212', '', '10');
INSERT INTO `web_nav` VALUES ('4', '00000000000', 'show', '关于我们', 'link', '/web/about/link', '4', 'default', 'category_about.html', 'list_about.html', 'show_about.html', null, '', '', '40');
INSERT INTO `web_nav` VALUES ('5', '00000000004', 'show', '联系我们', '', '', '4', 'default', 'category_about.html', 'list_about.html', 'show_about.html', null, '7', '', '40');
INSERT INTO `web_nav` VALUES ('6', '00000000000', 'list', '最新动态', 'news', '', '3', 'default', 'category_article.html', 'list_article.html', 'show_article.html', null, '', '\0', null);
INSERT INTO `web_nav` VALUES ('7', '00000000000', 'list', '更新日志', '', '', '3', 'default', 'category_article.html', 'list_article.html', 'show_article.html', null, '', '', '30');
INSERT INTO `web_nav` VALUES ('8', '00000000000', 'list', '产品中心', 'product', '', '3', 'default', 'category_article.html', 'list_article.html', 'show_article.html', null, '', '', '20');
INSERT INTO `web_nav` VALUES ('9', '00000000001', 'list', '服务支持', 'service', '', '3', 'default', 'category_article.html', 'list_article.html', 'show_article.html', null, '', '', '10');
INSERT INTO `web_nav` VALUES ('10', '00000000008', 'list', '有站CMS', 'youzan', '', '3', 'default', 'category_article.html', 'list_article.html', 'show_article.html', null, '', '', '0');

-- ----------------------------
-- Table structure for web_relays
-- ----------------------------
DROP TABLE IF EXISTS `web_relays`;
CREATE TABLE `web_relays` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `appid` int(11) DEFAULT NULL,
  `group` varchar(255) DEFAULT NULL,
  `mgid` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_relays
-- ----------------------------
INSERT INTO `web_relays` VALUES ('1', null, null, null, '首页顶部', 'teste');

-- ----------------------------
-- Table structure for web_relays_data
-- ----------------------------
DROP TABLE IF EXISTS `web_relays_data`;
CREATE TABLE `web_relays_data` (
  `rdid` int(11) NOT NULL AUTO_INCREMENT,
  `rid` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`rdid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of web_relays_data
-- ----------------------------
INSERT INTO `web_relays_data` VALUES ('2', '1', '34434', '/uploads/oss/20171122\\b84b4cfea96e18f144012171bc312a7c.png', 'http://www.xtoyun.net', null, null);

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='插件表';

-- ----------------------------
-- Records of xto_addons
-- ----------------------------
INSERT INTO `xto_addons` VALUES ('2', 'admin_index', 'test插件', 'test插件简介', '1', null, '', '0.1', '1438154545', '0', 'app\\admin\\addons\\dashboard', 'admin');

-- ----------------------------
-- Table structure for xto_config
-- ----------------------------
DROP TABLE IF EXISTS `xto_config`;
CREATE TABLE `xto_config` (
  `name` varchar(255) NOT NULL,
  `value` varchar(2000) DEFAULT NULL,
  `appid` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`appid`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_config
-- ----------------------------
INSERT INTO `xto_config` VALUES ('agent_1', 'true', '0', 'agent_pay');
INSERT INTO `xto_config` VALUES ('agent_alipay', 'true', '0', 'agent_pay');
INSERT INTO `xto_config` VALUES ('agent_description', '', '0', '');
INSERT INTO `xto_config` VALUES ('agent_name', '报单中心', '0', '');
INSERT INTO `xto_config` VALUES ('agent_tags', '', '0', '');
INSERT INTO `xto_config` VALUES ('agent_wepay', 'true', '0', 'agent_pay');
INSERT INTO `xto_config` VALUES ('alipay', 'true', '0', null);
INSERT INTO `xto_config` VALUES ('app_alipay', 'ipay@alipay.com', '0', '');
INSERT INTO `xto_config` VALUES ('app_beian', '343434', '0', '');
INSERT INTO `xto_config` VALUES ('app_color', '#823a3a', '0', '');
INSERT INTO `xto_config` VALUES ('app_date', '2017-09-15', '0', '');
INSERT INTO `xto_config` VALUES ('app_hone', '', '0', '');
INSERT INTO `xto_config` VALUES ('app_mobile', '13710429985', '0', '');
INSERT INTO `xto_config` VALUES ('app_name', 'xtophp', '0', '');
INSERT INTO `xto_config` VALUES ('app_open', 'false', '0', '');
INSERT INTO `xto_config` VALUES ('app_test', '544545', '0', '');
INSERT INTO `xto_config` VALUES ('app_wechat', 'gqiancom', '0', '');
INSERT INTO `xto_config` VALUES ('cms_address', '45345', '0', null);
INSERT INTO `xto_config` VALUES ('cms_alipay', '345', '0', null);
INSERT INTO `xto_config` VALUES ('cms_beian', '3434', '0', null);
INSERT INTO `xto_config` VALUES ('cms_description', '54', '0', null);
INSERT INTO `xto_config` VALUES ('cms_keywords', '4554', '0', null);
INSERT INTO `xto_config` VALUES ('cms_link', '345345', '0', null);
INSERT INTO `xto_config` VALUES ('cms_mobile', '5345', '0', null);
INSERT INTO `xto_config` VALUES ('cms_name', '545', '0', null);
INSERT INTO `xto_config` VALUES ('cms_wang', '3453', '0', null);
INSERT INTO `xto_config` VALUES ('cms_wechat', '345345', '0', null);
INSERT INTO `xto_config` VALUES ('cms_wema', '/uploads/oss/20170929\\fcd44b42c28fbc92e0232b244dc92e4b.jpg', '0', null);
INSERT INTO `xto_config` VALUES ('emailsender', '{\"\\u540d\\u79f0\":\"phpmailer\",\"\\u63cf\\u8ff0\":\"phpmailer\\u90ae\\u4ef6\\u53d1\\u9001\",\"\\u56fe\\u6807\":\"\\/config\\/plugins\\/email\\/phpmailer.png\",\"\\u90ae\\u4ef6\\u5934\":\"34\",\"\\u53d1\\u4ef6\\u4eba\":\"343\",\"\\u670d\\u52a1\\u5668\":\"434\",\"\\u9700\\u8981\\u9a8c\\u8bc1\":true,\"\\u7528\\u6237\\u540d\":\"34\",\"\\u5bc6\\u7801\":\"34\"}', '0', '');
INSERT INTO `xto_config` VALUES ('emailtype', 'phpmail', '0', '');
INSERT INTO `xto_config` VALUES ('example-daterange1', '', '0', '');
INSERT INTO `xto_config` VALUES ('example-daterange2', '', '0', '');
INSERT INTO `xto_config` VALUES ('osssender', '{\"\\u540d\\u79f0\":\"locoss\",\"\\u63cf\\u8ff0\":\"\\u672c\\u5730\\u5b58\\u50a8\",\"\\u56fe\\u6807\":\"\\/config\\/plugins\\/oss\\/alioss.png\",\"folder\":\"\\/uploads\\/oss\\/\"}', '0', '');
INSERT INTO `xto_config` VALUES ('osstype', 'locoss', '0', '');
INSERT INTO `xto_config` VALUES ('smssender', '{\"\\u540d\\u79f0\":\"\\u767e\\u5ea6api1\",\"\\u63cf\\u8ff0\":\"\\u767e\\u5ea6api\",\"\\u56fe\\u6807\":\"\\/config\\/plugins\\/sms\\/baiduapi.png\",\"apikey\":\"56565656561212\"}', '0', '');
INSERT INTO `xto_config` VALUES ('smstype', 'baiduapi', '0', '');
INSERT INTO `xto_config` VALUES ('web_address', '广州番禺区', '0', '');
INSERT INTO `xto_config` VALUES ('web_alipay', 'ipay@xtocn.com', '0', '');
INSERT INTO `xto_config` VALUES ('web_beian', '', '0', '');
INSERT INTO `xto_config` VALUES ('web_description', 'xtophp快速开发框架', '0', '');
INSERT INTO `xto_config` VALUES ('web_keywords', 'XtoPHP,cms,thinkphp5', '0', '');
INSERT INTO `xto_config` VALUES ('web_link', '谢辰', '0', '');
INSERT INTO `xto_config` VALUES ('web_logo', '/uploads/oss/20171122\\201fb12f1505f2d23b6d9c953188a1b6.png', '0', '');
INSERT INTO `xto_config` VALUES ('web_mobile', '13710429985', '0', '');
INSERT INTO `xto_config` VALUES ('web_name', 'XtoPHP是基于TP5的企业快速开发平台', '0', '');
INSERT INTO `xto_config` VALUES ('web_site_name', '云算宝XtoYUN', '0', null);
INSERT INTO `xto_config` VALUES ('web_site_open', 'true', '0', null);
INSERT INTO `xto_config` VALUES ('web_tags', '', '0', '');
INSERT INTO `xto_config` VALUES ('web_test', '', '0', null);
INSERT INTO `xto_config` VALUES ('web_test1', '', '0', null);
INSERT INTO `xto_config` VALUES ('web_wang', '', '0', '');
INSERT INTO `xto_config` VALUES ('web_wechat', 'gqiancom', '0', '');
INSERT INTO `xto_config` VALUES ('web_wema', '', '0', '');

-- ----------------------------
-- Table structure for xto_doc
-- ----------------------------
DROP TABLE IF EXISTS `xto_doc`;
CREATE TABLE `xto_doc` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `content` text,
  `createdate` datetime DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_doc
-- ----------------------------
INSERT INTO `xto_doc` VALUES ('5', '0', '根目录 ', '2', '<p>12121212</p>', null);
INSERT INTO `xto_doc` VALUES ('6', '0', '根文档', '2', '<p>12121212</p>', null);
INSERT INTO `xto_doc` VALUES ('7', '6', '123', '1', '<p>23123123</p>', null);
INSERT INTO `xto_doc` VALUES ('8', '7', '121212', '1', '<p>12</p>', null);

-- ----------------------------
-- Table structure for xto_logs
-- ----------------------------
DROP TABLE IF EXISTS `xto_logs`;
CREATE TABLE `xto_logs` (
  `logid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`logid`)
) ENGINE=InnoDB AUTO_INCREMENT=373 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for xto_manager_message
-- ----------------------------
DROP TABLE IF EXISTS `xto_manager_message`;
CREATE TABLE `xto_manager_message` (
  `mgid` int(11) NOT NULL AUTO_INCREMENT,
  `mid` int(11) DEFAULT NULL,
  `sender` varchar(255) DEFAULT NULL,
  `accepter` varchar(255) DEFAULT NULL,
  `isread` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`mgid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_manager_message
-- ----------------------------

-- ----------------------------
-- Table structure for xto_managers
-- ----------------------------
DROP TABLE IF EXISTS `xto_managers`;
CREATE TABLE `xto_managers` (
  `userid` int(11) NOT NULL,
  `appid` int(11) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`userid`,`appid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_managers
-- ----------------------------
INSERT INTO `xto_managers` VALUES ('38', '0', '管理员');
INSERT INTO `xto_managers` VALUES ('45', '0', '12');
INSERT INTO `xto_managers` VALUES ('46', '0', '123123');
INSERT INTO `xto_managers` VALUES ('47', '0', '123123');
INSERT INTO `xto_managers` VALUES ('48', '0', '234234');
INSERT INTO `xto_managers` VALUES ('49', '0', '');
INSERT INTO `xto_managers` VALUES ('50', '0', '');
INSERT INTO `xto_managers` VALUES ('51', '0', '');
INSERT INTO `xto_managers` VALUES ('62', '0', '开发测试人员');
INSERT INTO `xto_managers` VALUES ('64', '0', '');

-- ----------------------------
-- Table structure for xto_member_message
-- ----------------------------
DROP TABLE IF EXISTS `xto_member_message`;
CREATE TABLE `xto_member_message` (
  `mbid` int(11) NOT NULL AUTO_INCREMENT,
  `mid` int(11) DEFAULT NULL,
  `sender` varchar(255) DEFAULT NULL,
  `accepter` varchar(255) DEFAULT NULL,
  `isread` bit(1) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`mbid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_member_message
-- ----------------------------

-- ----------------------------
-- Table structure for xto_members
-- ----------------------------
DROP TABLE IF EXISTS `xto_members`;
CREATE TABLE `xto_members` (
  `appid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `refer_userid` int(11) DEFAULT NULL,
  `refer_username` varchar(255) DEFAULT NULL,
  `refer_date` datetime DEFAULT NULL,
  `is_balance` bit(1) DEFAULT NULL,
  `trade_password` varchar(50) DEFAULT NULL,
  `trade_password_format` varchar(50) DEFAULT NULL,
  `points` decimal(10,0) DEFAULT NULL,
  `wallets` decimal(10,6) NOT NULL DEFAULT '0.000000',
  `top_region_id` int(11) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  `realname` varchar(50) DEFAULT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `identify_card` varchar(100) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `zipcode` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `qq` varchar(100) DEFAULT NULL,
  `wangwang` varchar(100) DEFAULT NULL,
  `wechat` varchar(100) DEFAULT NULL,
  `alipay` varchar(100) DEFAULT NULL,
  `splittins` decimal(10,6) DEFAULT NULL,
  PRIMARY KEY (`appid`,`userid`,`wallets`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_members
-- ----------------------------
INSERT INTO `xto_members` VALUES ('0', '31', '0', null, null, null, null, null, null, '0.000000', null, null, '1502701122', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `xto_members` VALUES ('0', '32', '0', null, null, null, null, null, null, '0.000000', null, null, '1502701153', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `xto_members` VALUES ('0', '33', '0', null, null, null, null, null, null, '0.000000', null, null, '1502701206', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `xto_members` VALUES ('0', '34', '0', null, null, null, null, null, null, '0.000000', null, null, 'test11', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `xto_members` VALUES ('0', '35', '0', null, null, null, null, null, null, '0.000000', null, null, 'test11', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `xto_members` VALUES ('0', '43', '0', null, null, null, null, null, '56', '107.000000', null, null, '新年好', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '105.000000');
INSERT INTO `xto_members` VALUES ('0', '55', null, null, '2017-10-13 15:40:38', null, '21218cca77804d2ba1922c33e0151105', 'md5', null, '0.000000', null, null, '', '12323', '', '', '1', '1', '1', '1', '1', '', '', null);
INSERT INTO `xto_members` VALUES ('0', '56', null, null, '2017-10-13 15:45:01', null, '21218cca77804d2ba1922c33e0151105', 'md5', null, '0.000000', null, null, null, '', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `xto_members` VALUES ('0', '57', '43', null, '2017-10-13 15:45:26', null, '21218cca77804d2ba1922c33e0151105', 'md5', null, '0.000000', null, null, null, '', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `xto_members` VALUES ('0', '61', null, null, '2017-10-20 11:52:30', null, '21218cca77804d2ba1922c33e0151105', 'md5', '5554', '0.000000', null, null, '', '', '', '', '', '', '', '', '', '', '', null);
INSERT INTO `xto_members` VALUES ('0', '63', null, null, '2017-11-09 12:00:00', null, '21218cca77804d2ba1922c33e0151105', 'md5', '1', '0.000000', null, null, null, 'apple', null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for xto_menus
-- ----------------------------
DROP TABLE IF EXISTS `xto_menus`;
CREATE TABLE `xto_menus` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `funid` int(11) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_menus
-- ----------------------------

-- ----------------------------
-- Table structure for xto_messages
-- ----------------------------
DROP TABLE IF EXISTS `xto_messages`;
CREATE TABLE `xto_messages` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `createdate` datetime DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_messages
-- ----------------------------

-- ----------------------------
-- Table structure for xto_module
-- ----------------------------
DROP TABLE IF EXISTS `xto_module`;
CREATE TABLE `xto_module` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(40) NOT NULL DEFAULT '' COMMENT '钩子名称',
  `description` text NOT NULL COMMENT '描述',
  `type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '类型',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `addons` varchar(255) NOT NULL DEFAULT '' COMMENT '钩子挂载的插件 ''，''分割',
  `status` tinyint(2) DEFAULT '1',
  `version` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of xto_module
-- ----------------------------
INSERT INTO `xto_module` VALUES ('21', '系统模块', '管理首页', '1', '1384481614', 'admin', '1', null);

-- ----------------------------
-- Table structure for xto_pays
-- ----------------------------
DROP TABLE IF EXISTS `xto_pays`;
CREATE TABLE `xto_pays` (
  `appid` int(11) DEFAULT NULL,
  `payid` int(11) NOT NULL AUTO_INCREMENT,
  `paytype` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `config` varchar(1000) DEFAULT NULL,
  `remark` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`payid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_pays
-- ----------------------------
INSERT INTO `xto_pays` VALUES ('0', '2', 'alipay', '{\"\\u540d\\u79f0\":\"\\u652f\\u4ed8\\u5b9d\",\"\\u63cf\\u8ff0\":\"\\u652f\\u4ed8\\u5b9d(www.alipay.com)\",\"\\u56fe\\u6807\":\"\\/config\\/plugins\\/pay\\/alipay.png\",\"appid\":\"1212122\",\"key\":\"1212\"}', null);
INSERT INTO `xto_pays` VALUES ('0', '4', 'wepay', '{\"\\u540d\\u79f0\":\"\\u5fae\\u4fe1\\u652f\\u4ed8\",\"\\u63cf\\u8ff0\":\"\\u5fae\\u4fe1\\u652f\\u4ed8(mp.weixin.qq.com)\",\"\\u56fe\\u6807\":\"\\/config\\/plugins\\/pay\\/wepay.png\",\"appid\":\"12\",\"key\":\"1212\"}', null);

-- ----------------------------
-- Table structure for xto_points
-- ----------------------------
DROP TABLE IF EXISTS `xto_points`;
CREATE TABLE `xto_points` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `tradedate` datetime DEFAULT NULL,
  `tradetype` smallint(6) DEFAULT NULL,
  `income` decimal(10,0) DEFAULT NULL,
  `expenses` decimal(10,0) DEFAULT NULL,
  `balance` decimal(10,0) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_points
-- ----------------------------
INSERT INTO `xto_points` VALUES ('1', '43', 'utest', '2017-09-07 16:28:59', null, '11', '0', '23', '后台添加', '0');
INSERT INTO `xto_points` VALUES ('2', '43', 'utest', '2017-09-07 16:31:00', null, '11', '0', '34', '后台添加', '0');
INSERT INTO `xto_points` VALUES ('3', '43', 'utest', '2017-09-07 16:34:59', null, '11', '0', '45', '后台添加', '0');
INSERT INTO `xto_points` VALUES ('4', '43', 'utest', '2017-09-07 16:35:01', null, '11', '0', '56', '后台添加', '0');
INSERT INTO `xto_points` VALUES ('5', '61', 't1222', '2017-10-20 12:01:24', null, null, '0', '0', '后台添加', '0');
INSERT INTO `xto_points` VALUES ('6', '61', 't1222', '2017-10-20 12:01:37', null, null, '0', '0', '后台添加', '0');
INSERT INTO `xto_points` VALUES ('7', '61', 't1222', '2017-10-20 12:02:58', null, '5454', '0', '5454', '后台添加', '0');
INSERT INTO `xto_points` VALUES ('8', '61', 't1222', '2017-10-20 12:25:12', null, '100', '0', '5554', '后台添加', '0');
INSERT INTO `xto_points` VALUES ('9', '63', 'apple', '2017-11-09 12:00:17', null, '1', '0', '1', '后台添加', '0');

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
INSERT INTO `xto_rolefunction` VALUES ('8', 'admin_manager', '0');
INSERT INTO `xto_rolefunction` VALUES ('8', 'admin_manager_update', '0');
INSERT INTO `xto_rolefunction` VALUES ('8', 'admin_setting_basic', '0');
INSERT INTO `xto_rolefunction` VALUES ('8', 'doc_docer', '0');
INSERT INTO `xto_rolefunction` VALUES ('8', 'doc_docer_create', '0');
INSERT INTO `xto_rolefunction` VALUES ('8', 'doc_docer_list', '0');
INSERT INTO `xto_rolefunction` VALUES ('8', 'j1_26', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/api/createmanager', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/api/deletemanager', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/api/updatemanager', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/database/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/logs/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/manager/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/member/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/module/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/plugs/setsms', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/roles/index', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', '/admin/setting/basic', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', 'admin_roles_add', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', 'admin_roles_delete', '0');
INSERT INTO `xto_rolefunction` VALUES ('9', 'admin_roles_update', '0');
INSERT INTO `xto_rolefunction` VALUES ('11', 'config/basic', '0');
INSERT INTO `xto_rolefunction` VALUES ('11', 'config/index', '0');

-- ----------------------------
-- Table structure for xto_roles
-- ----------------------------
DROP TABLE IF EXISTS `xto_roles`;
CREATE TABLE `xto_roles` (
  `roleid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_roles
-- ----------------------------
INSERT INTO `xto_roles` VALUES ('8', '财务管理', null, '0');
INSERT INTO `xto_roles` VALUES ('9', '测试角色', null, '0');

-- ----------------------------
-- Table structure for xto_splittins
-- ----------------------------
DROP TABLE IF EXISTS `xto_splittins`;
CREATE TABLE `xto_splittins` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `tradedate` datetime DEFAULT NULL,
  `tradetype` smallint(6) DEFAULT NULL,
  `fromuser` int(11) DEFAULT NULL,
  `income` decimal(10,0) DEFAULT NULL,
  `expenses` decimal(10,0) DEFAULT NULL,
  `balance` decimal(10,0) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `fax` decimal(10,0) DEFAULT NULL,
  `classid` int(11) DEFAULT NULL,
  `isuse` bit(1) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_splittins
-- ----------------------------
INSERT INTO `xto_splittins` VALUES ('1', '43', 'utest', '2017-09-07 16:49:23', null, null, '1', '0', '1', '后台添加', null, null, '', '0');
INSERT INTO `xto_splittins` VALUES ('2', '43', 'utest', '2017-09-07 16:54:19', null, null, '1', '0', '2', '后台添加', null, null, '', '0');
INSERT INTO `xto_splittins` VALUES ('3', '42', '1123', '2017-09-07 16:54:34', null, null, '1', '0', '1', '后台添加', null, null, '', '0');
INSERT INTO `xto_splittins` VALUES ('4', '42', '1123', '2017-09-07 16:54:46', null, null, '1', '0', '2', '后台添加', null, null, '', '0');
INSERT INTO `xto_splittins` VALUES ('5', '42', '1123', '2017-09-07 16:55:05', null, null, '10', '0', '12', '后台添加', null, null, '', '0');
INSERT INTO `xto_splittins` VALUES ('6', '43', 'utest', '2017-09-29 14:28:19', null, null, '1', '0', '3', '后台添加', null, null, '', '0');
INSERT INTO `xto_splittins` VALUES ('7', '43', 'utest', '2017-10-19 18:31:43', null, null, '1', '0', '4', '后台添加', null, null, '', '0');
INSERT INTO `xto_splittins` VALUES ('8', '43', 'utest', '2017-10-19 18:35:43', null, null, '1', '0', '5', '后台添加', null, null, '', '0');
INSERT INTO `xto_splittins` VALUES ('9', '43', 'utest', '2017-10-20 12:22:35', null, null, '100', '0', '105', '后台添加', null, null, '', '0');

-- ----------------------------
-- Table structure for xto_users
-- ----------------------------
DROP TABLE IF EXISTS `xto_users`;
CREATE TABLE `xto_users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `lower_username` varchar(255) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `password_format` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobilein` varchar(100) DEFAULT NULL,
  `password_question` varchar(200) DEFAULT NULL,
  `password_answer` varchar(50) DEFAULT NULL,
  `is_approved` bit(1) DEFAULT NULL,
  `is_locked` bit(1) DEFAULT NULL,
  `createdate` datetime DEFAULT NULL,
  `userrole` smallint(6) DEFAULT NULL,
  `funrole` smallint(6) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  `last_login_date` datetime DEFAULT NULL,
  `last_password_changeddate` datetime DEFAULT NULL,
  `last_lockeddate` datetime DEFAULT NULL,
  `failed_password_attemptcount` int(11) DEFAULT NULL,
  `comment` text,
  `gender` smallint(6) DEFAULT NULL,
  `birthdate` datetime DEFAULT NULL,
  `session_id` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `is_admin` bit(1) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_users
-- ----------------------------
INSERT INTO `xto_users` VALUES ('38', 'admin', null, '21232f297a57a5a743894a0e4a801fc3', 'md5', 'admin@qq.com', null, '0', null, '', '\0', '2017-09-03 20:01:30', '2', '8', '0', '2017-11-24 11:31:57', null, null, null, null, null, null, 'uuid()', null, '2017-10-16 09:20:40', '');
INSERT INTO `xto_users` VALUES ('39', '', null, 'd41d8cd98f00b204e9800998ecf8427e', 'md5', '', null, null, null, '\0', '\0', '2017-08-31 16:12:04', '2', null, '0', null, null, null, null, null, null, null, 'uuid()', null, null, null);
INSERT INTO `xto_users` VALUES ('43', 'utest', null, '4297f44b13955235245b2497399d7a93', 'md5', '123123@qq.com', null, '0', null, '', '\0', '2017-09-04 18:12:55', '1', null, '0', '2017-10-23 17:27:46', null, null, null, null, null, null, null, null, '2017-10-12 17:42:33', '\0');
INSERT INTO `xto_users` VALUES ('54', 'yy001', null, '21218cca77804d2ba1922c33e0151105', 'md5', '', null, null, null, '', '\0', '2017-10-13 15:38:25', '1', null, '0', null, null, null, null, null, null, null, null, null, '2017-10-13 15:38:14', '\0');
INSERT INTO `xto_users` VALUES ('55', 'yy002', null, '21218cca77804d2ba1922c33e0151105', 'md5', '', null, '0', null, '', '\0', '2017-10-13 15:40:37', '1', null, '0', '2017-10-13 15:41:11', null, null, null, null, null, null, null, null, '2017-10-13 15:41:47', '\0');
INSERT INTO `xto_users` VALUES ('56', 'yy003', null, '21218cca77804d2ba1922c33e0151105', 'md5', '', null, null, null, '', '\0', '2017-10-13 15:45:01', '1', null, '0', '2017-10-14 09:27:26', null, null, null, null, null, null, null, null, '2017-10-14 09:27:16', '\0');
INSERT INTO `xto_users` VALUES ('57', 'yy004', null, '21218cca77804d2ba1922c33e0151105', 'md5', '', null, null, null, '', '\0', '2017-10-13 15:45:26', '1', null, '0', '2017-10-16 09:19:01', null, null, null, null, null, null, null, null, '2017-10-16 09:18:51', '\0');
INSERT INTO `xto_users` VALUES ('61', 't1222', null, '21218cca77804d2ba1922c33e0151105', 'md5', '', null, '0', null, '', '\0', '2017-10-20 11:52:30', '1', null, '0', null, null, null, null, null, null, null, null, null, null, '\0');
INSERT INTO `xto_users` VALUES ('62', 'dev', 'dev', '4297f44b13955235245b2497399d7a93', 'md5', 'dev@xtoyun.net', null, null, null, '', '\0', '2017-11-04 10:39:43', '2', '8', '0', '2017-11-04 10:40:46', null, null, null, null, null, null, null, null, null, '\0');
INSERT INTO `xto_users` VALUES ('63', 'apple', 'apple', '21218cca77804d2ba1922c33e0151105', 'md5', '', null, null, null, '', '\0', '2017-11-09 12:00:00', '1', null, '0', null, null, null, null, null, null, null, null, null, null, '\0');
INSERT INTO `xto_users` VALUES ('64', '小高', '小高', '4297f44b13955235245b2497399d7a93', 'md5', '', null, null, null, '', '\0', '2017-11-16 11:19:42', '2', '8', '0', null, null, null, null, null, null, null, null, null, null, '\0');

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
INSERT INTO `xto_usersinroles` VALUES ('38', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('40', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('41', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('42', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('43', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('44', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('45', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('46', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('47', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('48', '2', '0');
INSERT INTO `xto_usersinroles` VALUES ('49', '9', '0');
INSERT INTO `xto_usersinroles` VALUES ('50', '2', '0');
INSERT INTO `xto_usersinroles` VALUES ('51', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('52', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('53', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('54', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('55', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('56', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('57', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('58', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('59', '8', '0');
INSERT INTO `xto_usersinroles` VALUES ('60', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('61', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('62', '2', '0');
INSERT INTO `xto_usersinroles` VALUES ('63', '1', '0');
INSERT INTO `xto_usersinroles` VALUES ('64', '2', '0');

-- ----------------------------
-- Table structure for xto_wallets
-- ----------------------------
DROP TABLE IF EXISTS `xto_wallets`;
CREATE TABLE `xto_wallets` (
  `wid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `tradedate` datetime DEFAULT NULL,
  `tradetype` int(11) DEFAULT NULL,
  `income` decimal(10,6) DEFAULT NULL,
  `expenses` decimal(10,6) DEFAULT NULL,
  `balance` decimal(10,6) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `fromuser` int(11) DEFAULT NULL,
  `appid` int(11) DEFAULT NULL,
  PRIMARY KEY (`wid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xto_wallets
-- ----------------------------
INSERT INTO `xto_wallets` VALUES ('1', '43', 'utest', '2017-09-07 15:37:41', null, '1.000000', '0.000000', null, '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('2', '43', 'utest', '2017-09-07 15:40:34', null, '1.000000', '0.000000', '1.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('3', '43', 'utest', '2017-09-07 15:40:45', null, '1212.000000', '0.000000', '1212.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('4', '43', 'utest', '2017-09-07 15:44:42', null, '11.000000', '0.000000', '11.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('5', '43', 'utest', '2017-09-07 15:44:56', null, '1.000000', '0.000000', '1.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('6', '43', 'utest', '2017-09-07 15:45:37', null, '9999.999999', '0.000000', '9999.999999', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('7', '43', 'utest', '2017-09-07 15:48:55', null, '222.000000', '0.000000', '222.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('8', '43', 'utest', '2017-09-07 15:49:05', null, '1.000000', '0.000000', '1.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('9', '43', 'utest', '2017-09-07 15:49:23', null, '1.000000', '0.000000', '2.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('10', '43', 'utest', '2017-09-07 15:49:25', null, '1.000000', '0.000000', '3.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('11', '43', 'utest', '2017-09-07 15:49:39', null, '1.000000', '0.000000', '4.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('12', '43', 'utest', '2017-09-07 15:51:03', null, '1.010000', '0.000000', '5.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('13', '43', 'utest', '2017-09-07 15:53:06', null, '11.000000', '0.000000', '16.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('14', '43', 'utest', '2017-09-07 15:53:16', null, '11.000000', '0.000000', '27.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('15', '43', 'utest', '2017-09-07 16:27:46', null, '1.000000', '0.000000', '28.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('16', '43', 'utest', '2017-09-07 16:28:01', null, '1.000000', '0.000000', '29.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('17', '43', 'utest', '2017-09-07 16:47:50', null, '1.000000', '0.000000', '30.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('18', '43', 'utest', '2017-09-07 16:48:35', null, '1.000000', '0.000000', '31.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('19', '43', 'utest', '2017-09-11 17:57:53', null, '34.000000', '0.000000', '65.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('20', '43', 'utest', '2017-09-29 14:26:17', null, '11.000000', '0.000000', '76.010000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('21', '58', 'yy005', '2017-10-13 16:04:20', null, '100.000000', '0.000000', '100.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('22', '58', 'yy005', '2017-10-13 16:05:00', null, '1000.000000', '0.000000', '1100.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('23', '43', 'utest', '2017-10-20 12:11:33', null, '1.000000', '0.000000', '6.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('24', '43', 'utest', '2017-10-20 12:12:59', null, '1.000000', '0.000000', '7.000000', '后台添加', null, '0');
INSERT INTO `xto_wallets` VALUES ('25', '43', 'utest', '2017-10-20 12:21:17', null, '100.000000', '0.000000', '107.000000', '后台添加', null, '0');
DROP TRIGGER IF EXISTS `tr_point_insert`;
DELIMITER ;;
CREATE TRIGGER `tr_point_insert` AFTER INSERT ON `xto_points` FOR EACH ROW begin
update xto_members set points = new.balance where userid = new.userid;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `tr_splittin_insert`;
DELIMITER ;;
CREATE TRIGGER `tr_splittin_insert` AFTER INSERT ON `xto_splittins` FOR EACH ROW begin
update xto_members set splittins = new.balance where userid = new.userid and new.isuse=1;
end
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `tr_wallet_insert`;
DELIMITER ;;
CREATE TRIGGER `tr_wallet_insert` AFTER INSERT ON `xto_wallets` FOR EACH ROW begin
update xto_members set wallets = new.balance where userid = new.userid;
end
;;
DELIMITER ;
