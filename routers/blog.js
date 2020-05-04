const blogController = require("../controllers/blog");

module.exports = {
  Blog: (req, res) => {
    if (req.query.no) {   //    blog/?no=123
      blogController.BlogPost(req, res);
    } else {
      blogController.Blog(req, res);
    }
  }
};
