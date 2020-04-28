const express = require("express");
const AdminCRUD = require("../db/crud/admin");
module.exports = {
  ssb: (req, res) => {
    res.render("adminssb");
  },
  ssbSave: (req, res) => {
    console.log(req.body);

    //TODO : SAve
    AdminCRUD.saveFormData(req.body, (err, result)=>{
      if (err) {
        return res.send("ERROR");
      }
      console.log(result);
      return res.send("SAVED");
    })

    let displayData = {
      url: "/"
    };
    // res.render("index", { displayData });
  }
};
