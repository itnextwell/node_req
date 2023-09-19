const Elemento = require("./Elemento");
const Request = require("./Request");
const User = require("./User");

// Element->userId
User.hasMany(Elemento)//userId
Elemento.belongsTo(User)

//Element ->RequestId
Request.hasMany(Elemento)
Elemento.belongsTo(Request)