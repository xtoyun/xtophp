
<?php
header('content-Type: text/html; charset=utf-8');
define('DS', DIRECTORY_SEPARATOR);


// 定义根目录
define('ROOT_PATH', __DIR__ . DS);

// 定义应用目录
define('APP_PATH', ROOT_PATH . 'app' . DS);

// 安装包目录
define('INSTALL_PATH', ROOT_PATH . 'static' . DS . 'install' . DS);

$lockFile = INSTALL_PATH . 'install.lock';

// 判断文件或目录是否有写的权限
function is_really_writable($file)
{
    if (DIRECTORY_SEPARATOR == '/' AND @ ini_get("safe_mode") == FALSE) {
        return is_writable($file);
    }
    if (!is_file($file) OR ($fp = @fopen($file, "r+")) === FALSE) {
        return FALSE;
    }

    fclose($fp);
    return TRUE;
}

$checkDirs = [
    'thinkphp',
    'vendor',
];

//错误信息
$errInfo = '';

//数据库配置文件
$dbConfigFile = ROOT_PATH . 'config'. DS .'database.php';

// 锁定的文件
$lockFile = INSTALL_PATH . 'install.lock';
if (is_file($lockFile)) {
    $errInfo = "当前已经安装，如果需要重新安装，请手动移除/static/install/install.lock文件";
} else if (version_compare(PHP_VERSION, '5.6.0', '<')) {
    $errInfo = "当前版本(" . PHP_VERSION . ")过低，请使用PHP5.6以上版本";
} else if (!extension_loaded("PDO")) {
    $errInfo = "当前未开启PDO，无法进行安装";
} else if (!is_really_writable($dbConfigFile)) {
    $open_basedir = ini_get('open_basedir');
    if ($open_basedir) {
        $dirArr = explode(PATH_SEPARATOR, $open_basedir);
        if ($dirArr && in_array(__DIR__, $dirArr)) {
            $errInfo = '当前服务器因配置了open_basedir，导致无法读取父目录';
        }
    }
    if (!$errInfo) {
        $errInfo = '当前权限不足，无法写入配置文件/config/database.php';
    }
} else {
    $dirArr = [];
    foreach ($checkDirs as $k => $v) { 
        if (!is_dir(ROOT_PATH . $v)) {
            $errInfo = '当前代码仅包含核心代码，请前往官网下载完整包或资源包覆盖后再尝试安装';
            break;
        }
    }
}

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($errInfo) {
        echo $errInfo;
        exit;
    }
    $err = '';
    $mysqlHostname = isset($_POST['mysqlHost']) ? $_POST['mysqlHost'] : '127.0.0.1';
    $mysqlHostport = 3306;
    $hostArr = explode(':', $mysqlHostname);
    if (count($hostArr) > 1) {
        $mysqlHostname = $hostArr[0];
        $mysqlHostport = $hostArr[1];
    }
    $mysqlUsername = isset($_POST['mysqlUsername']) ? $_POST['mysqlUsername'] : 'root';
    $mysqlPassword = isset($_POST['mysqlPassword']) ? $_POST['mysqlPassword'] : '';
    $mysqlDatabase = isset($_POST['mysqlDatabase']) ? $_POST['mysqlDatabase'] : 'xtophp';
    $mysqlPrefix = isset($_POST['mysqlPrefix']) ? $_POST['mysqlPrefix'] : 'xto_';
    $adminUsername = isset($_POST['adminUsername']) ? $_POST['adminUsername'] : 'admin';
    $adminPassword = isset($_POST['adminPassword']) ? $_POST['adminPassword'] : '123456';
    $adminPasswordConfirmation = isset($_POST['adminPasswordConfirmation']) ? $_POST['adminPasswordConfirmation'] : '123456';
    $adminEmail = isset($_POST['adminEmail']) ? $_POST['adminEmail'] : 'admin@admin.com';

    if ($adminPassword !== $adminPasswordConfirmation) {
        echo "两次输入的密码不一致";
        exit;
    } else if (!preg_match("/^\w+$/", $adminUsername)) {
        echo "用户名只能输入字母、数字、下划线";
        exit;
    } else if (!preg_match("/^[\S]+$/", $adminPassword)) {
        echo "密码不能包含空格";
        exit;
    } else if (strlen($adminUsername) < 3 || strlen($adminUsername) > 12) {
        echo "用户名请输入3~12位字符";
        exit;
    } else if (strlen($adminPassword) < 6 || strlen($adminPassword) > 16) {
        echo "密码请输入6~16位字符";
        exit;
    }
    try {
        //检测能否读取安装文件
        $sql = @file_get_contents(INSTALL_PATH . 'data.sql');
        if (!$sql) {
            throw new Exception("无法读取/static/install/data.sql文件，请检查是否有读权限");
        }
        $sql = str_replace("`fa_", "`{$mysqlPrefix}", $sql);
        $pdo = new PDO("mysql:host={$mysqlHostname};port={$mysqlHostport}", $mysqlUsername, $mysqlPassword, array(
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
        ));



        //检测是否支持innodb存储引擎
        $pdoStatement = $pdo->query("SHOW VARIABLES LIKE 'innodb_version'");
        $result = $pdoStatement->fetch();
        if (!$result) {
            throw new Exception("当前数据库不支持innodb存储引擎，请开启后再重新尝试安装");
        }

        $pdo->query("CREATE DATABASE IF NOT EXISTS `{$mysqlDatabase}` CHARACTER SET utf8 COLLATE utf8_general_ci;");

        $pdo->query("USE `{$mysqlDatabase}`");

        $pdo->exec($sql);

        $config = @file_get_contents($dbConfigFile);
        $callback = function ($matches) use ($mysqlHostname, $mysqlHostport, $mysqlUsername, $mysqlPassword, $mysqlDatabase, $mysqlPrefix) {
            $field = ucfirst($matches[1]);
            $replace = ${"mysql{$field}"};
            if ($matches[1] == 'hostport' && $mysqlHostport == 3306) {
                $replace = '3306';
            }
            return "'{$matches[1]}'{$matches[2]}=>{$matches[3]}'{$replace}',";
        };
        
        $config = preg_replace_callback("/'(hostname|database|username|password|hostport|prefix)'(\s+)=>(\s+)'(.*)'\,/", $callback, $config);

        //检测能否成功写入数据库配置
        $result = @file_put_contents($dbConfigFile, $config);
        if (!$result) {
            throw new Exception("无法写入数据库信息到application/database.php文件，请检查是否有写权限");
        }

        

        $salt=uniqid();

         //$result=include('/config/app.php'); 

        $c='4a37f44b13923A5245b2497399d7a93';
        
        $newPassword = md5($adminPassword.$salt.$c);
        

        $pdo->query("INSERT xto_users(username,email,password,salt,is_admin,is_approved,appid,is_plat) values('{$adminUsername}', '{$adminEmail}','{$newPassword}','{$salt}',1,1,10000,1)");
        
        $newID = $pdo->lastInsertId();
        $pdo->query("INSERT xto_managers(userid,appid) values({$newID},10000)");

       //检测能否成功写入lock文件
        $result = @file_put_contents($lockFile, 1);
        if (!$result) {
            throw new Exception("无法写入安装锁定到/static/install/install.lock文件，请检查是否有写权限");
        }
        


        // $pdo->query("UPDATE xto_users SET username = '{$adminUsername}', email = '{$adminEmail}',password = '{$newPassword}' WHERE username = 'admin'");

        // $pdo->query("UPDATE xto_users SET username = '{$adminUsername}', email = '{$adminEmail}',password = '{$newPassword}' WHERE username = 'admin'");
        echo "成功"; 
    } catch (PDOException $e) {
        $err = $e->getMessage();
    } catch (Exception $e) {
        $err = $e->getMessage();
    }
    echo $err;
    exit;
}
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>安装XtoPHP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
    <meta name="renderer" content="webkit">
    <style>
        body {
            background: #fff;
            margin: 0;
            padding: 0;
            line-height: 1.5;
        }

        body, input, button {
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            color: #7E96B3;
        }

        .container {
            max-width: 515px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }

        a {
            color: #18bc9c;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        h1 {
            margin-top: 0;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 28px;
            font-weight: normal;
            color: #3C5675;
            margin-bottom: 0;
        }

        form {
            margin-top: 40px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group .form-field:first-child input {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        .form-group .form-field:last-child input {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        .form-field input {
            background: #EDF2F7;
            margin: 0 0 1px;
            border: 2px solid transparent;
            transition: background 0.2s, border-color 0.2s, color 0.2s;
            width: 100%;
            padding: 15px 15px 15px 180px;
            box-sizing: border-box;
        }

        .form-field input:focus {
            border-color: #18bc9c;
            background: #fff;
            color: #444;
            outline: none;
        }

        .form-field label {
            float: left;
            width: 160px;
            text-align: right;
            margin-right: -160px;
            position: relative;
            margin-top: 18px;
            font-size: 14px;
            pointer-events: none;
            opacity: 0.7;
        }

        button, .btn {
            background: #3C5675;
            color: #fff;
            border: 0;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            padding: 15px 30px;
            -webkit-appearance: none;
        }

        button[disabled] {
            opacity: 0.5;
        }

        #error, .error, #success, .success {
            background: #D83E3E;
            color: #fff;
            padding: 15px 20px;
            border-radius: 4px;
            margin-bottom: 20px;
        }

        #success {
            background: #3C5675;
        }

        #error a, .error a {
            color: white;
            text-decoration: underline;
        }
    </style>
</head>

<body>
<div class="container">
    <h2>安装 XtoPHP</h2>
    <div>
        <form method="post" name="form">
             <div class="error" style="display:none">
                    当前已经安装XtoPHP，如果需要重新安装，请手动移除application/admin/command/Install/install.lock文件                </div>
            <div id="error" style="display:none"></div>
            <div id="success" style="display:none"></div>

            <div class="form-group">
                <div class="form-field">
                    <label>MySQL 数据库地址</label>
                    <input type="text" name="mysqlHost" value="localhost" required="">
                </div>

                <div class="form-field">
                    <label>MySQL 数据库名</label>
                    <input type="text" name="mysqlDatabase" value="xtophp" required="">
                </div>

                <div class="form-field">
                    <label>MySQL 用户名</label>
                    <input type="text" name="mysqlUsername" value="root" required="">
                </div>

                <div class="form-field">
                    <label>MySQL 密码</label>
                    <input type="password" name="mysqlPassword">
                </div>
            </div>

            <div class="form-group">
                <div class="form-field">
                    <label>管理者用户名</label>
                    <input name="adminUsername" value="admin" required=""/>
                </div>

                <div class="form-field">
                    <label>管理者Email</label>
                    <input name="adminEmail" value="admin@admin.com" required="">
                </div>

                <div class="form-field">
                    <label>管理者密码</label>
                    <input type="password" name="adminPassword" required="">
                </div>

                <div class="form-field">
                    <label>重复密码</label>
                    <input type="password" name="adminPasswordConfirmation" required="">
                </div>
            </div>

            <div class="form-buttons">
                <button type="submit">点击安装</button>
            </div>
        </form>

        <script src="https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
        <script>
            $(function () { 
                $('form :input:first').select();

                $('form').on('submit', function (e) { 
                    e.preventDefault();

                    var $button = $(this).find('button')
                        .text('安装中...')
                        .prop('disabled', true);

                    $.post('', $(this).serialize())
                        .done(function (ret) {
                            //ret前会返回类似回车的字符
                            var obj = new String(ret.replace(/\r\n/g,'')); 
                            if (obj == "成功") {
                                $('#error').hide();
                                $("#success").text("安装成功！开始你的XtoPHP之旅吧！").show();
                                $('<a class="btn" href="./">访问首页</a> <a class="btn" href="/admin.php/admin/login" style="background:#18bc9c">访问后台</a>').insertAfter($button);
                                $button.remove();
                                localStorage.setItem("installed", "installed");
                            } else {
                                $('#error').show().text(ret);
                                $button.prop('disabled', false).text('点击安装');
                                $("html,body").animate({
                                    scrollTop: 0
                                }, 500);
                            }
                        })
                        .fail(function (data) {
                            $('#error').show().text('发生错误:\n\n' + data.responseText);
                            $button.prop('disabled', false).text('点击安装');
                            $("html,body").animate({
                                scrollTop: 0
                            }, 500);
                        });

                    return false;
                });
            });
        </script>
    </div>
</div>
</body>
</html>