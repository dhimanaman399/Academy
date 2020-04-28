const homeController = require("../controllers/home");

module.exports = {
  home: (req, res) => {
    homeController.home(req, res);
  }
};
