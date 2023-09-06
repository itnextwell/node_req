const Elemento = require("./Elemento");
const User = require("./User");

// Element->userId
User.hasMany(Elemento)//userId
Elemento.belongsTo(User)