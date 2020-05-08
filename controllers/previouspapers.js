const express = require("express");
const fs = require("fs");
const path = require("path");

module.exports = {
  Nda: (req, res) => {
    const directoryPath = path.join(
      __dirname,
      "../public/assets/pdf/previousPaper/nda"
    );

    // [ "year" ,  "paper(1/2)" ,  "Subject" , ["Paperurl" , "solutionurl"]]

    let filelist = fs.readdirSync(directoryPath);
    filelist.sort();
    filelist.reverse();
    let paperlist = [];

    filelist.forEach(ele => {
      let year = ele.substr(0, 4);
      let paper = ele.charAt(4);
      if (paper == 1) {
        paper = "I";
      } else if (paper == 2) {
        paper = "II";
      }
      let subject = ele.charAt(5);
      if (subject == "M") {
        subject = "Maths";
      } else if (subject == "G") {
        subject = "GAT";
      }
      let index = IsDataExist(paperlist, year, paper, subject);
      if (ele.length == 10) {
        if (index > -1) {
          paperlist[index][3][0] = ele;
        } else {
          let temparr = [year, paper, subject, [ele]];
          paperlist.push(temparr);
        }
      } else if (ele.length == 11) {
        if (index > -1) {
          paperlist[index][3][1] = ele;
        } else {
          let temparr = [year, paper, subject, ["", ele]];
          paperlist.push(temparr);
        }
      }
    });
    let displayData = {
      url: req.url,
      paperlist
    };
    res.render("previousPapersNda", { displayData });
  },
  Cds: (req, res) => {
    const directoryPath = path.join(
      __dirname,
      "../public/assets/pdf/previousPaper/cds"
    );

    // [ "year" ,  "paper(1/2)" ,  "Subject" , ["Paperurl" , "solutionurl"]]

    let filelist = fs.readdirSync(directoryPath);
    filelist.sort();
    filelist.reverse();
    let paperlist = [];

    filelist.forEach(ele => {
      let year = ele.substr(0, 4);
      let paper = ele.charAt(4);
      if (paper == 1) {
        paper = "I";
      } else if (paper == 2) {
        paper = "II";
      }
      let subject = ele.charAt(5);
      if (subject == "M") {
        subject = "Mathematics";
      } else if (subject == "G") {
        subject = "General Ability";
      } else if(subject == "E"){
        subject = "English";
      }
      let index = IsDataExist(paperlist, year, paper, subject);
      if (ele.length == 10) {
        if (index > -1) {
          paperlist[index][3][0] = ele;
        } else {
          let temparr = [year, paper, subject, [ele]];
          paperlist.push(temparr);
        }
      } else if (ele.length == 11) {
        if (index > -1) {
          paperlist[index][3][1] = ele;
        } else {
          let temparr = [year, paper, subject, ["", ele]];
          paperlist.push(temparr);
        }
      }
    });
    let displayData = {
      url: req.url,
      paperlist
    };
    res.render("previousPapersCds", { displayData });
  }
};

function IsDataExist(arr, year, paper, subject) {
  let ans = -1;
  arr.forEach((ele, index) => {
    if (ele[0] == year && ele[1] == paper && ele[2] == subject) {
      ans = index;
      //break;
    }
  });
  return ans;
}
