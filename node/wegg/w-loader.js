const fs = require('fs');
const path = require('path');
const Router = require('koa-router');

// 读取目录和文件
function load(dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir);
  // console.log(url);

  // 读取目录
  const files = fs.readdirSync(url);
  // 遍历
  files.forEach(filename => {
    // 去掉扩展名
    filename = filename.replace('.js', '');
    const file = require(url + '/' + filename);

    cb(filename, file);
  });
}

// 根据文件结构去加载路由
// app.get('/', ctx => {})
function initRouter(app) {
  const router = new Router();
  load('routes', (filename, routes) => {
    routes = typeof routes === 'function' ? routes(app) : routes;
    const prefix = filename === 'index' ? '' : `/${filename}`;
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ');
      console.log(`映射地址：${method.toLocaleUpperCase()} ${prefix}${path}`);

      // 注册路由
      // app.get('/', ctx => {})
      // router[method](prefix + path, routes[key]);
      router[method](prefix + path, async ctx => {
        app.ctx = ctx;
        await routes[key](app);
      });
    });
  });

  return router;
}

function initController() {
  const controllers = {};
  load('controller', (filename, controller) => {
    controllers[filename] = controller;
  });

  return controllers;
}

function initService() {
  const services = {};
  load('service', (filename, service) => {
    services[filename] = service;
  });

  return services;
}

const Sequelize = require("sequelize");
function loadConfig(app) {
  load("config", (filename, conf) => {
    if (conf.db) {
      app.$db = new Sequelize(conf.db);

      // 加载模型
      app.$model = {};
      load("model", (filename, { schema, options }) => {
        app.$model[filename] = app.$db.define(filename, schema, options);
      });
      app.$db.sync();
    }

    // 如果有middleware选项，则按其规定循序应用中间件
    if (conf.middleware) {
      conf.middleware.forEach(mid => {
        const midPath = path.resolve(__dirname, "middleware", mid);
        app.$app.use(require(midPath));
      });
    }
  });
}

// 定时任务
const schedule = require('node-schedule');
function initSchedule() {
  load('schedule', (filename, { interval, handler }) => {
    schedule.scheduleJob(interval, handler);
  });
}

// load('routes', filename => console.log(`routes:${filename}`));
// initRouter();
module.exports = { initRouter, initController, initService, initSchedule, loadConfig };