<?php
            header("Content-Type:text/html;charset=utf-8");

            //获取到客户端的账号密码
            $loginName=$_POST['loginName'];
            $password=$_POST['password'];
            //在数据库里面去进行查询
             $con = mysql_connect("127.0.0.1","root","");
            if (!$con){
                 die('Could not connect: ' . mysql_error());
            }
            mysql_select_db("huike", $con);
            $sql="select * from employee where loginName='$loginName' and password='$password'";
            //根据查询的结果进行响应.
            $result=mysql_query($sql);

            if($row=mysql_fetch_array($result)){
                    //登录成功 obj={key:value}
                   $user=array("username"=>$row['username'],"password"=>$row['password']);
                   //我要把$user 放在session 当中去.
                   session_start();
                   $_SESSION["user"]=$user;
                   header("Refresh:3;url=index.php");
            }else{
                    //登录失败.用户名或者密码错误.
                   header("Refresh:3;url=../page/login.html");
                   echo "登录失败，3s 之后跳转到登录页面";

            }

?>