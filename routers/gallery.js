const galleryController = require("../controllers/gallery");

module.exports = {
  SelectedCandidates: (req, res) => {
    galleryController.SelectedCandidates(req, res);
  },
  Activity: (req, res) => {
    galleryController.Activity(req, res);
  },
  Seminar: (req, res) => {
    galleryController.Seminar(req, res);
  }
};
