const url = require('url');

// 第二个参数为true则解析query的内容
let obj = url.parse('https://www.baidu.com/s?tn=50000024_hao_pg&ie=utf-8&sc=UWd1pgw-pA7EnHc1FMfqnHRdPjb3nWn4rjc3nauW5y99U1Dznzu9m1Ykn16zPHndPHb4&ssl_sample=s_102&srcqid=3012661774781716509&f=3&rsp=8&H123Tmp=nunew7&word=%E5%8D%8E%E4%B8%BA%E5%8D%96%E8%8B%B9%E6%9E%9C5g%E8%8A%AF%E7%89%87', true);
console.log(obj);
/* Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search:
   '?tn=50000024_hao_pg&ie=utf-8&sc=UWd1pgw-pA
le=s_102&srcqid=3012661774781716509&f=3&rsp=8&
%E8%8A%AF%E7%89%87',
  query:
   [Object: null prototype] {
     tn: '50000024_hao_pg',
     ie: 'utf-8',
     sc:
      'UWd1pgw-pA7EnHc1FMfqnHRdPjb3nWn4rjc3nau
     ssl_sample: 's_102',
     srcqid: '3012661774781716509',
     f: '3',
     rsp: '8',
     H123Tmp: 'nunew7',
     word: '华为卖苹果5g芯片' },
  pathname: '/s',
  path:
   '/s?tn=50000024_hao_pg&ie=utf-8&sc=UWd1pgw-
mple=s_102&srcqid=3012661774781716509&f=3&rsp=
5g%E8%8A%AF%E7%89%87',
  href:
   'https://www.baidu.com/s?tn=50000024_hao_pg
Ykn16zPHndPHb4&ssl_sample=s_102&srcqid=3012661
%96%E8%8B%B9%E6%9E%9C5g%E8%8A%AF%E7%89%87' }   */
