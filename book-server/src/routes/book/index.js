const Router = require("@koa/router");
const mongoose = require("mongoose");
const Book = mongoose.model("Book");

const router = new Router({
  prefix: "/book",
});

router.post("/add", async (ctx) => {
  const { name, price, author, publishDate, classify } = ctx.request.body;
  const book = new Book({
    name,
    price,
    author,
    publishDate,
    classify,
  });

  const res = await book.save();
  ctx.body = {
    code: 1,
    msg: "添加成功",
    data: res,
  };
});

router.get("/list", async (ctx) => {
  const list = await Book.find().exec();

  ctx.body = {
    data: list,
    code: 1,
    msg: "获取列表成功",
  };
});
module.exports = router;
