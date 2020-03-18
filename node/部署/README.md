```js
// pm2启动项目
npm install -g pm2
pm2 start app.js --watch -i 2
// watch 监听⽂文件变化
// -i 启动多少个实例
pm2 stop all
pm2 list
pm2 start app.js -i max # 根据机器器CPU核数，开启对应数⽬目的进程

// 设置为开机启动
pm2 startup
```
```js
// 配置process.yml
apps:
  - script: app.js
    instances: 2
    watch: true
    env:
      NODE_ENV: production

// pm2 start process.yml
```