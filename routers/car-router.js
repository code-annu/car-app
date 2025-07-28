const express = require("express");
const carController = require("../controllers/car-controller");

const carRouter = express.Router();

carRouter.get("/add-car", carController.addCar);

carRouter.post("/add-car", carController.carAddSuccess);

exports.carRouter = carRouter;
