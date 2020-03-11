const Koa = require("koa");
const app = new Koa();
// 处理post请求
const bodyparser = require("koa-bodyparser");
const router = require("koa-router")({prefix: "/api"});

// 设置cookie加密秘钥
app.keys = ["some secret", "another secret"];

const goods = [
  { id: 1, text: "苹果", price: 100 },
  { id: 2, text: "香蕉", price: 500 }
];

// 获取商品列表
// /api/goods
router.get("/goods", ctx => {
  ctx.body = {
    ok: 1, 
    goods
  };
});

router.get("/detail", ctx => {
  ctx.body = {
    ok: 1,
    data: goods.find(good => good.id == ctx.query.id)
  };
});

router.post("/login", ctx => {
  // 获取用户名和密码参数
  const user = ctx.request.body;
  if(user.username == "wx" && user.password == "123") {
    // 将token存入cookie
    const token = 'wangxing token';
    ctx.cookies.set('token', token);
    ctx.body = { ok: 1, token};
  } else {
    ctx.body = { ok: 0 };
  }
});

// 解析post数据并注册路由
app.use(bodyparser());
app.use(router.routes());

app.listen(8080, () => console.log('api服务已启动'));