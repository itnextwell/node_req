const Elemento = require("./Elemento");
const Request = require("./Request");
const User = require("./User");

// Element->userId
User.hasMany(Elemento)//userId
Elemento.belongsTo(User)

//Request ->ElementId
Elemento.hasMany(Request)
Request.belongsTo(Elemento)
