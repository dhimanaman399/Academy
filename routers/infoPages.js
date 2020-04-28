const infoPagesController = require("../controllers/infoPages");

module.exports = {
  ArmyOfficersEntry: (req, res) => {
    infoPagesController.ArmyOfficersEntry(req, res);
  },
  ArmySoldierEntry: (req, res) => {
    infoPagesController.ArmySoldierEntry(req, res);
  },
  NavyOfficersEntry: (req, res) => {
    infoPagesController.NavyOfficersEntry(req, res);
  },
  NavySoldierEntry: (req, res) => {
    infoPagesController.NavySoldierEntry(req, res);
  },
  AirForceOfficersEntry: (req, res) => {
    infoPagesController.AirForceOfficersEntry(req, res);
  },
  AirForceSoldierEntry: (req, res) => {
    infoPagesController.AirForceSoldierEntry(req, res);
  },
  ParamilitaryForce: (req, res) => {
    infoPagesController.ParamilitaryForce(req, res);
  },
  SsbStage1: (req, res) => {
    infoPagesController.SsbStage1(req, res);
  },
  SsbStage2: (req, res) => {
    infoPagesController.SsbStage2(req, res);
  }
};
