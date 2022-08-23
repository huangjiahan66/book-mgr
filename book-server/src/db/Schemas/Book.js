const mongoose = require("mongoose");
const { getMeta } = require("../helper");

// 表结构
const BookSchema = new mongoose.Schema({
  name: String,
  price: Number,
  author: String,
  publishDate: String,
  classify: String,
  meta: getMeta(),
});

//第一个参数和数据库中映射的集合名 （也就是创建了一个叫Book的表）
mongoose.model("Book", BookSchema);
