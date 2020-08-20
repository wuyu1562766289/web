// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const doubanbook = require('doubanbook')
const cheerio = require("cheerio")

cloud.init()

// 获取isbn码图书信息
async function getDoubanBook(isbn) {
  const url = "https://search.douban.com/book/subject_search?search_text=" + isbn;

  let res = await axios.get(url);

  let reg = /window\.__DATA__ = "(.*)"/;
  if (reg.test(res.data)) {
    let searchData = doubanbook(RegExp.$1)[0];

    return searchData;
  }
}
getDoubanBook("9787536692930");

// 云函数入口函数
// event接收小程序端传过来的数据
exports.main = async (event, context) => {
  let {a, b, isbn} = event;
  const bookInfo = await getDoubanBook(isbn);
  const detailPage = await axios.get(bookInfo.url);
  const $ = cheerio.load(detailPage.data);
  const summary = $("#link-report .intro").text();

  console.log(summary);

  return {
    sum: a + b,
    title: bookInfo.title,
    summary,
    image: bookInfo.cover_url
  }
}