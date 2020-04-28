const adminController = require("../controllers/admin");

module.exports = {
  ssb: (req, res) => {
    adminController.ssb(req, res);
  },
  ssbSave: (req, res) => {
    adminController.ssbSave(req, res);
  }
};
