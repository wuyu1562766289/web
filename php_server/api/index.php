<?php
            header("Content-Type:text/html;charset=utf-8");
            //我要根据用户的状态去进行一个判断，如果已经登录了。就欢迎，没有登录，告诉用户，你还没有登录。
            session_start();
            //从session 当中拿到user
            if(array_key_exists("user",$_SESSION)){
                    //登录成功
                    echo "欢迎".$_SESSION["user"]["username"];
            }else{
                    echo "你还没有登录，请<a href='../page/login.html'>登录</a>";
            }
?>