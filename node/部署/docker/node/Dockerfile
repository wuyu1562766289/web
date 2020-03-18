#制定node镜像的版本
FROM node:10-alpine
#移动当前目录下⾯的⽂文件到app⽬目录下
ADD . /app/
#进⼊到app目录下面，类似cd
WORKDIR /app
#安装依赖
RUN npm install
#对外暴露的端⼝
EXPOSE 3000
#程序启动脚本
CMD ["node", "app.js"]