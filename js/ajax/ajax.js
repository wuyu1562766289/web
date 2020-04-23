let xhr = new XMLHttpRequest();
// 第三个参数为true则为异步处理，否则为同步
xhr.open('GET', 'data/test.json', true);
// 必须有send才会进行数据交互处理，get方式传null即可
xhr.send(null);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    } else if (xhr.status === 404) {
      console.log('404 not found');
    }
  }
}

/**
 * readyState的状态值：
 *    0：（未初始化）对象已建立，但是尚未初始化（未调用open方法）；
 *    1：（初始化）对象已建立，尚未调用send方法；
 *    2：（发送数据）send方法已调用，但是当前的状态及http头未知；
 *    3：（数据传送中）已接收部分数据，因为响应及http头不全，此时
 *        通过responseBody、responseText获取部分数据会出错；
 *    4：（完成）数据接收完毕，此时可用通过responseBody和responseText
 *        获取完整的回应数据；
 */

 /**
  * status状态值：
  * 1xx - 信息提示，服务器收到请求，需要请求者继续执行操作
  *   100：初始请求已接受，客户应继续发送请求的其余部分；
  *   101：服务器将遵从客户的请求转换到另外一种协议；
  * 2xx - 成功，操作被成功接收并处理
  *   200：请求成功，获得响应内容进行处理；
  *   201：请求完成，创建了新的资源；
  *   202：请求被接受，但处理尚未完成，阻塞等待；
  *   203：请求成功，但非授权信息（没有权限）；
  *   204：服务器处理成功，但未返回内容；
  *   205：重置内容；
  *   206：部分内容，服务器成功处理了部分GET请求；
  * 3xx - 重定向，需要进一步的操作以完成请求
  *   301：永久移动，返回信息会包括新的url，浏览器自动定向到新url；
  *   302：临时移动；
  *   303：查看其它地址，类似301；
  *   304：未修改，所请求的资源未修改，服务器不会返回任何资源，客户端从缓存访问；
  *   305：使用代理，请求的资源必须通过代理访问；  *   
  * 4xx - 客户端错误，请求包含语法错误或无法完成请求
  *   400：客户端请求的语法错误；
  *   401：请求要求用户身份认证；
  *   402：保留，将来使用；
  *   403：服务器拒绝执行此请求；
  *   404：服务器无法根据客户端请求找到资源；
  *   405：客户端请求中的方法被禁止；  *   
  * 5xx - 服务器错误，服务器在处理请求的过程中发生了错误
  *   500：服务器内部错误；
  *   501：服务器不支持请求的功能；
  *   502：作为网关或者代理工作的服务器尝试执行请求时从远程服务器收到了一个无效响应；
  *   503：超载或系统维护，服务器暂时无法处理客户端的请求；
  *   504：充当网关或代理的服务器，未及时从远端服务器获取请求；
  *   505： 服务器不支持请求的HTTP协议版本
  */

/**
 * 
 * @param {请求地址} url 
 * @param {请求方式} type 
 * @param {要发送的数据} data 
 */
function ajax(url, type = "GET", data = null) {
  type = type.toLocaleUpperCase();
  let pro = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error('error'));
        }
      }
    };
  })

  return pro;
}

ajax('/data/test.json', 'get')
  .then(res => console.log(res))
  .catch(err => console.log(err))

