// navigator
const ua = navigator.userAgent; // 获取浏览器信息
const isChrome = ua.indexOf('Chrome');
console.log(isChrome);

// screen
console.log(screen.width);
console.log(screen.height);

// location
console.log(location.href);     // http://localhost:8080/
// 协议
console.log(location.protocol); // http:
// 域名
console.log(location.host);
// 路径信息
console.log(location.pathname); // /
// 查询参数
console.log(location.search);   
// 哈希（#）
console.log(location.hash);

// history
history.back();     // 返回
history.forward();  // 前进


