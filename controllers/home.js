const express = require("express");

module.exports = {
  home: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("index", { displayData });
  }
};
