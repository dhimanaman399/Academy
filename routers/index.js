const express = require("express");
const homeRouter = require("./home");
const aboutUsRouter = require("./aboutUs");
const adminRouter = require('./admin');

const router = express();

router.get("/", homeRouter.home);
router.get("/aboutUS", aboutUsRouter.AboutUs);
router.get("/adminssb", adminRouter.ssb);
router.post("/adminssbsave" , adminRouter.ssbSave);
// // app.use("/users", adminRouter)
// function routes(app){
//     app.use()
// }
// module.exports = routes;
module.exports = router;
