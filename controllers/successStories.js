const successStorieshelper = require("../helpers/successStories");
const urlHelper = require("./helper/url");

module.exports = {
    SuccessStories: (req, res) => {
    let pageNo = 0;
    if (req.query.pageNo) pageNo = +req.query.pageNo;

    let noOfBlogAtPage = 3;
    let datalist = successStorieshelper.SuccessStories();

    let totalpages = parseInt(datalist.length / noOfBlogAtPage) - 1;
    if (datalist.length % noOfBlogAtPage != 0) {
      totalpages = totalpages + 1;
    }
    if (pageNo > totalpages) {
      pageNo = 0;
    }

    let paginationUrl = {};
    if (pageNo > 0) {
      paginationUrl.pre = `/blog/?pageNo=${pageNo - 1}`;
    }

    paginationUrl.active = pageNo;

    let start = 0;
    let end = totalpages;

    if (totalpages > 6) {
      if (pageNo < 3) {
        start = 0;
        end = 5;
      } else if (totalpages - pageNo < 3) {
        start = totalpages - 6;
        end = totalpages;
      } else {
        start = pageNo - 3;
        end = pageNo + 3;
      }
    }

    let urlArray = [];
    while (start <= end) {
      urlArray.push(start);
      start++;
    }

    //console.log(urlArray);

    paginationUrl.url = urlArray;

    if (totalpages > pageNo + 1) {
      paginationUrl.next = `${pageNo + 1}`;
    }

    let bloglist = datalist.slice(
      pageNo * noOfBlogAtPage,
      pageNo * noOfBlogAtPage + noOfBlogAtPage
    );

    //console.log(pageNo * noOfBlogAtPage ,  pageNo * noOfBlogAtPage + noOfBlogAtPage);
    //console.log("Blog list :::: ",bloglist);
    let displayData = {
      preUrl: urlHelper.GetPreUrl(req.url),
      url: req.url,
      bloglist,
      paginationUrl
    };
    res.render("blog", { displayData });
  },
  SuccessStoriesDetails: (req, res) => {
    let blogdata = successStorieshelper.SuccessStoriesDetails(req.query.no);
    
    let displayData = {
      preUrl: urlHelper.GetPreUrl(req.url),
      url: req.url,
      blogdata
    };

    if (!blogdata) {
      res.render("home", { displayData });
    } else {
      res.render("blogpost", { displayData });
    }
  }
};
