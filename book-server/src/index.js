const koa = require("koa");
const app = new koa();

app.use((ctx) => {
  console.log(ctx.URL);
});

app.listen(3000, () => {
  console.log("启动成功");
});
