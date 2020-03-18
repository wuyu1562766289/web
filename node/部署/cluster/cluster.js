const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;
const process = require('process');

console.log(`numCpu:${numCPUs}`);

const workers = {};
if(cluster.isMaster) {
  // 主进程
  cluster.on('death', function(worker) {
    // 当进程结束的时候
    worker = cluster.fork();
    workers[worker.pid] = worker;
  });

  // 初始化开启和cpu数量一致的进程
  for(let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    worker[worker.pid] = worker;
  }
} else {
  // 工作分支
  const app = require('./app');
  app.use(async (ctx, next) => {
    console.log('worker' + cluster.worker.id + ', PID' + process.pid);
    next();
  });

  app.listen(3000);
}

// 当主进程终止
process.on('SIGTERM', function() {
  // 关闭所有子进程
  for(let pid in workers) {
    process.kill(pid);
  }
  // 关闭自己
  process.exit(0);
});

require('./test');