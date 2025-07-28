const { saveDataToFile, readDataFromFile } = require("../services/car-service");

module.exports = class Car {
  constructor(brandName, modelName, price, imageUrl) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  async save() {
    await saveDataToFile("car-data.json", this);
  }

  static async listCars() {
    const carData = await readDataFromFile("car-data.json");
    return carData.map(
      (car) => new Car(car.brandName, car.modelName, car.price, car.imageUrl)
    );
  }
};
