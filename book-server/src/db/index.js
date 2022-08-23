require("./Schemas/User");
require("./Schemas/InviteCode");
require("./Schemas/Book");
const mongoose = require("mongoose");

const connect = () => {
  return new Promise((resolve) => {
    mongoose.connect("mongodb://127.0.0.1:27017/book-mgr");
    mongoose.connection.on("open", () => {
      console.log("数据库连接成功");
      resolve();
    });
  });
};
// connect();

module.exports = {
  connect,
};
