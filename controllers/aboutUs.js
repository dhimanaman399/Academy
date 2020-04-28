const express = require("express");

module.exports = {
  AboutUs: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("aboutUs", { displayData });
  }
};
