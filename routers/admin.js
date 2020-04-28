// const express = requrie("express");
// const router = express.Router();

const adminController = require("../controllers/admin");

// router.post("/", adminController.ssbSave);
// module.exports = router;
module.exports = {
  ssb: (req, res) => {
    adminController.ssb(req, res);
  },
  ssbSave: (req, res) => {
    adminController.ssbSave(req, res);
  }
};
