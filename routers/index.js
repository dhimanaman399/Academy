const express = require("express");
const homeRouter = require("./home");
const aboutUsRouter = require("./aboutUs");
const infoPages = require('./infoPages');
const adminRouter = require('./admin');

const router = express();

router.get("/", homeRouter.home);
router.get("/aboutUS", aboutUsRouter.AboutUs);
//#region info static router
router.get("/army-officers-entry",infoPages.ArmyOfficersEntry);
router.get("/army-soldier-entry",infoPages.ArmySoldierEntry);
router.get("/navy-officers-entry",infoPages.NavyOfficersEntry);
router.get("/navy-soldier-entry",infoPages.NavySoldierEntry);
router.get("/air-force-officers-entry",infoPages.AirForceOfficersEntry);
router.get("/air-force-soldier-entry",infoPages.AirForceSoldierEntry);
router.get("/paramilitary-force",infoPages.ParamilitaryForce);
router.get("/ssb-stage-1",infoPages.SsbStage1);
router.get("/ssb-stage-2",infoPages.SsbStage2);
//#endregion

//#region admin
router.get("/adminssb", adminRouter.ssb);
router.post("/adminssbsave" , adminRouter.ssbSave);
//#endregion

module.exports = router;
