const Car = require("../models/car");

exports.addCarForm = (req, res, next) => {
  res.render("pages/add-car");
};

exports.addCar = async (req, res, next) => {
  console.log(req.body);
  const { brandName, modelName, price, imageUrl } = req.body;
  const car = new Car(brandName, modelName, price, imageUrl);
  await car.save();
  res.render("pages/car-added");
};
