const express = require("express");

module.exports = {
  Ssb: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("ssbcourse", { displayData });
  },
  Nda: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("ndacourse", { displayData });
  },
  Cds: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("cdscourse", { displayData });
  },
  Afcat: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("afcatcourse", { displayData });
  },
  Acc: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("acccourse", { displayData });
  },
  ArmyBelowRank: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("armybelowofficerrankcourse", { displayData });
  },
  AirforceBelowRank: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("airforcebelowofficerrankcourse", { displayData });
  },
  NavyBelowRank: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("navybelowofficerrankcourse", { displayData });
  }
};
