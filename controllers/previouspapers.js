const express = require("express");
const fs = require("fs");

module.exports = {
  Nda: (req, res) => {
    let currentyear = new Date().getFullYear();
    console.log(currentyear);

    let url = [];

    let i = currentyear;
    for (i; i >= currentyear - 10; i--) {
      // fs.existsSync
      //console.log(__dirname);
      //console.log(__filename);
  //    console.log(process.cwd());
//      let path = process.cwd() + `\public\assets\pdf\previousPaper\nda\20131G.pdf`;
      //let path =  "../public/assets/pdf/previousPaper/nda/20131G.pdf";
      // console.log("Add me ", path);
      // if (fs.existsSync(path)) {
      //   console.log("Add me ", path);
      // }
      // console.log("###########");
    }

    let displayData = {
      url: req.url
    };
    res.render("previousPapersNda", { displayData });
  },
  Cds: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("previousPapersCds", { displayData });
  }
};
