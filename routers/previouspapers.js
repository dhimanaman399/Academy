const previouspapersController = require("../controllers/previouspapers");

module.exports = {
  Nda: (req, res) => {
    previouspapersController.Nda(req, res);
  },
  Cds: (req, res) => {
    previouspapersController.Cds(req, res);
  }
};
