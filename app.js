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
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log("sever started");
});
