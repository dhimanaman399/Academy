"use strict";
 //const {} = requrie("./_KEYS");
const schemaNames = require("./schema-names");
function constructDbPath(){
    return "mongodb://localhost:27017/abcd"
}
const config = {
    DB_URL: constructDbPath(),
    schemaNames,
};
module.exports = config;