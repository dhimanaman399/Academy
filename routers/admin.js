const adminController = require("../controllers/admin");

module.exports = {
  ssb: (req, res) => {
    adminController.ssb(req, res);
  },
  ssbSave: (req, res) => {
    adminController.ssbSave(req, res);
  },
  UploadCurrentAffairsMonthly: (req, res) => {
    adminController.UploadCurrentAffairsMonthly(req, res);
  },
  SaveCurrentAffairsMonthly: (req, res) => {
    adminController.SaveCurrentAffairsMonthly(req, res);
  }
};
