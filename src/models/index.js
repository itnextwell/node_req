const Elemento = require("./Elemento");

const Filee = require("./Filee");
const Request = require("./Request");
const User = require("./User");

// Element->userId
User.hasMany(Elemento)//userId
Elemento.belongsTo(User)

//Request ->ElementId
Elemento.hasMany(Request)
Request.belongsTo(Elemento)

//File -> ElementId
Filee.belongsTo(Elemento)
Elemento.hasMany(Filee)