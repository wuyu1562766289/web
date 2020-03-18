//log.js
module.exports = {
  // cron表达式
  interval: '*/3 * * * * *',
  handler() {
    console.log('定时任务  三秒执行一次' + new Date())
  }
}

// user.js
