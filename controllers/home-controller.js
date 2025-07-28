const path = require("path");
const { rootDir } = require("../utils/path_util");
const Car = require("../models/car");

exports.getHome = async (req, res, next) => {
  const carData = await Car.listCars();
  console.log("Car data is", carData);
  res.render("pages/home", { cars: carData });
};
