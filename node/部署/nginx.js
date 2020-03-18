// 安装
// yum install nginx
// -----
// apt update
// apt install nginx

// 添加静态路由
// # /etc/nginx/sites-enable/taro
// server {
//   listen 80;
//   server_name taro.josephxia.com;
//   location / {
//     root / root / source / taro - node / dist;
//     index index.html index.htm;
//   }
// }
// # 验证Nginx配置
// nginx -t
// # 重新启动Nginx
// service restart nginx
// nginx -s reload


// # / etc / nginx / sites - enable
// # taro
// server {
//   listen 80;
//   server_name taro.josephxia.com;
//   location / {
//     root / root / source / taro - node / dist;
//     index index.html index.htm;
//   }
//   location ~ \.(gif | jpg | png)$ {
//     root / root / source / taro - node / server / static;
//   }
//   location / api {
//     proxy_pass http://127.0.0.1:3000;
//     proxy_redirect off;
//     proxy_set_header Host $host;
//     proxy_set_header X - Real - IP $remote_addr;
//     proxy_set_header X - Forwarded - For
//     $proxy_add_x_forwarded_for;
//   }
// }


// # 查看配置⽂文件位置
// nginx -t
// # nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
// # nginx: configuration file /etc/nginx/nginx.conf test is successful
// #重启
// service nginx restart