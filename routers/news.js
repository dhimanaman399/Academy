const newsController = require("../controllers/news");

module.exports = {
  CurrentAffairsMonthly: (req, res) => {
    newsController.CurrentAffairsMonthly(req, res);
  },
  CurrentAffairsDaily: (req, res) => {
    newsController.CurrentAffairsDaily(req, res);
  }
};
