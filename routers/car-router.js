const express = require("express");
const carController = require("../controllers/car-controller");

const carRouter = express.Router();

carRouter.get("/add-car", carController.addCarForm);

carRouter.post("/add-car", carController.addCar);

exports.carRouter = carRouter;
