const path = require("path");
const { rootDir } = require("../utils/path_util");

exports.getHome = (req, res, next) => {
  res.render("pages/home");
};
