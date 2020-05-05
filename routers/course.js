const courseController = require("../controllers/course");

module.exports = {
  Ssb: (req, res) => {
    courseController.Ssb(req, res);
  },
  Nda: (req, res) => {
    courseController.Nda(req, res);
  },
  Cds: (req, res) => {
    courseController.Cds(req, res);
  },
  Afcat: (req, res) => {
    courseController.Afcat(req, res);
  },
  Acc: (req, res) => {
    courseController.Acc(req, res);
  },
  ArmyBelowRank: (req, res) => {
    courseController.ArmyBelowRank(req, res);
  },
  AirforceBelowRank: (req, res) => {
    courseController.AirforceBelowRank(req, res);
  },
  NavyBelowRank: (req, res) => {
    courseController.NavyBelowRank(req, res);
  }
};
