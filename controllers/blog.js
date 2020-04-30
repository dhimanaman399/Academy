module.exports = {
  Blog: (req, res) => {
    let displayData = {
      url: req.url
    };
    res.render("blog", { displayData });
  },
  BlogPost: (req, res) => {
    res.send("I am in post  :: " + req.query.no);
  }
};
