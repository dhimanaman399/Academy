//#region  Module 
const express = require("express");
const app = express();
//#endregion


//#region MiddleLayer 
app.use(express.urlencoded())

app.use(express.static("public"));

// Set EJS as templating engine
app.set("view engine", "ejs");

app.use("/", require("./routers/index"));

//#endregion

app.listen(4000, () => {
  console.log("sever started");
});
