const galleryhelper = require("../helpers/gallery");

module.exports = {
  SelectedCandidates: (req, res) => {
    //TODO : Get Data [year , name , Gender , school , ssbtype , ssbcenter , image]
    //D! using helper function
    let datalist = galleryhelper.SelectedCandidates();
    let yearsList = uniqueYearList(datalist);

    let displayData = {
      url: req.url,
      yearsList,
      datalist
    };
    res.render("selectedCandidatesGallery", { displayData });
  },
  Activity: (req, res) => {
    let datalist = galleryhelper.Activity();
    let displayData = {
      url: req.url,
      datalist
    };
    res.render("activityGallery", { displayData });
  },
  Seminar: (req, res) => {
      
    let datalist = galleryhelper.Seminar();
    let displayData = {
      url: req.url,
      datalist
    };
    res.render("seminarGallery", { displayData });
  }
};

function uniqueYearList(data) {
  let years = [];
  data.forEach(ele => {
    let isyearExist = years.includes(ele[0]);
    if (!isyearExist) {
      years.push(ele[0]);
    }
  });
  years.sort((a, b) => b - a);
  return years;
}
