<?php
    header("content-Type:text/html;charset=utf-8");
    // var_dump($_FILES);
    /* 
        文件上传需要做的一些处理：
            1.接受请求；
            2.处理请求；
            3.完成响应；
    */
    // 1.接收请求；
    $files = $_FILES;
    // 获取上传文件的名称
    $fileName = $files['photoFile']['name'];
    // 获取文件上传的临时位置
    $tempName = $files['photoFile']['tmp_name'];

    move_uploaded_file($tempName, "img/".$fileName);
    echo "上传成功";
?>