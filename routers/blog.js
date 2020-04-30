const blogController = require("../controllers/blog");

module.exports = {
  Blog: (req, res) => {
    console.log(req.query.no);
    if (req.query.no) {   //    blog/?no=123
      blogController.BlogPost(req, res);
    } else {
      blogController.Blog(req, res);
    }
  }
};
