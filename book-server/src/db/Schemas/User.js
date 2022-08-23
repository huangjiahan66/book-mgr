const mongoose = require("mongoose");
const { getMeta } = require("../helper");
// 映射到用户文档有哪些数据
const UserSchema = new mongoose.Schema({
  account: String,
  password: String,
  meta: getMeta(),
});

mongoose.model("User", UserSchema);
