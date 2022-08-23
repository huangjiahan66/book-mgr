const koa = require("koa");
const Koabody = require("koa-body");
const { connect } = require("./db");
const registerRoutes = require("./routes");
const cors = require("@koa/cors");

const app = new koa();
// 数据库连接之后 在todo ...
connect().then(() => {
  app.use(cors()); //允许前后端跨域

  app.use(Koabody()); //让koa 可以接受body 请求参数
  registerRoutes(app); // 注册路由
  app.listen(3000, () => {
    console.log("启动成功");
  });
});
