let jwt = require("jsonwebtoken");
let token = jwt.sign({ foo: "bar" }, "jack");
console.log(token);
