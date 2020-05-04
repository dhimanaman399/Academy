module.exports = {
  GetPreUrl: url => {
    let i = url.count("/") - 1;
    let preUrl = "";
    while (i > 0) {
      preUrl = preUrl + "../";
      i--;
    }
    return preUrl;
  }
};

String.prototype.count = function(s1) {
  return (
    (this.length - this.replace(new RegExp(s1, "g"), "").length) / s1.length
  );
};
