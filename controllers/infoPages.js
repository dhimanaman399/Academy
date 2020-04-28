module.exports = {
  ArmyOfficersEntry: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("armyOfficersEntry", { displayData });
  },
  ArmySoldierEntry: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("armySoldierEntry", { displayData });
  },
  NavyOfficersEntry: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("navyOfficersEntry", { displayData });
  },
  NavySoldierEntry: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("navySoldierEntry", { displayData });
  },
  AirForceOfficersEntry: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("airForceOfficersEntry", { displayData });
  },
  AirForceSoldierEntry: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("airForceSoldierEntry", { displayData });
  },
  ParamilitaryForce: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("paramilitaryForce", { displayData });
  },
  SsbStage1: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("ssbStage1", { displayData });
  },
  SsbStage2: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("ssbStage2", { displayData });
  }
};
