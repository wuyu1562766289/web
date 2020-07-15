<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录</title>
</head>
<body>
<form action="../api/login.php" method="post">
    登录名：<input type="text" name="loginName"> <br><br>
    密码:<input type="text" name="password"><br><br>
    <input type="submit" value="登录">
</form>
</body>
</html>
<?php

            //接收请求，处理请求，完成响应
            $username=$_POST['username'];
            $password=$_POST['password'];
            $loginName=$_POST['loginName'];
           //处理请求 往数据库里面添加一条数据.
            //建立连接
            $con = mysql_connect("127.0.0.1","root","");
            if (!$con){
                 die('Could not connect: ' . mysql_error());
            }
            $sql="insert into employee(username,password,loginName) values('$username','$password','$loginName')";
            mysql_select_db("huike", $con);
            mysql_query($sql);
            //注册成功，我们可以让它跳转到登录页面.

?>
