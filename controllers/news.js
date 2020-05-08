const express = require("express");
const fs = require("fs");
const path = require("path");

module.exports = {
  CurrentAffairsMonthly: (req, res) => {
    const directoryPath = path.join(
      __dirname,
      "../public/assets/pdf/news/currentaffairs/monthly"
    );
    // [ "year" ,  "month" ,  "document"]

    let filelist = fs.readdirSync(directoryPath);
    filelist.sort();
    filelist.reverse();
    let documentlist = [];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    filelist.forEach(ele => {
      let year = ele.substr(0, 4);
      let month = ele.substr(4, 2);

      month = months[month - 1];

      let temparr = [year, month, ele];
      documentlist.push(temparr);
    });

    let displayData = {
      url: req.url,
      documentlist
    };
    res.render("currentAffairsMonthly", { displayData });
  },
  CurrentAffairsDaily: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("currentAffairsDaily", { displayData });
  }
};
