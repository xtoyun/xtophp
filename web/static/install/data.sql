/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50519
Source Host           : localhost:3306
Source Database       : xtophp

Target Server Type    : MYSQL
Target Server Version : 50519
File Encoding         : 65001

Date: 2019-04-02 11:19:52
*/

SET FOREIGN_KEY_CHECKS=0;

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
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`appid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=2178 DEFAULT CHARSET=utf8;

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
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

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
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=295 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=386 DEFAULT CHARSET=utf8;

DROP TRIGGER IF EXISTS `tr_point_insert`;
CREATE TRIGGER `tr_point_insert` AFTER INSERT ON `xto_points` FOR EACH ROW begin
update xto_members set points = new.balance where userid = new.userid and appid=new.appid;
end


DROP TRIGGER IF EXISTS `tr_splittin_insert`;
CREATE TRIGGER `tr_splittin_insert` AFTER INSERT ON `xto_splittins` FOR EACH ROW begin
update xto_members set splittins = new.balance where userid = new.userid and new.isuse=1 and appid=new.appid;
end


DROP TRIGGER IF EXISTS `tr_wallet_insert`;
CREATE TRIGGER `tr_wallet_insert` AFTER INSERT ON `xto_wallets` FOR EACH ROW begin
update xto_members set wallets = new.balance where userid = new.userid and appid=new.appid;
end