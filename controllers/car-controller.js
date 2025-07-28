const path = require("path");
const { rootDir } = require("../utils/path_util");

exports.addCar = (req, res, next) => {
  res.render("pages/add-car");
};

exports.carAddSuccess = (req, res, next) => {
  res.render("pages/car-added");
};
