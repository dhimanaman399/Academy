const aboutUsController = require("../controllers/aboutUs");

module.exports = {
  AboutUs: (req, res) => {
    aboutUsController.AboutUs(req, res);
  }
};
