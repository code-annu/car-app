const path = require("path");
const { rootDir } = require("../utils/path_util");
const fs = require("fs");

exports.saveDataToFile = async function saveDataToFile(filename, data) {
  try {
    const filepath = path.join(rootDir, "database", filename);
    fs.appendFileSync(filepath, JSON.stringify(data) + "\n", "utf8");
  } catch (e) {
    console.log("error is ", e);
  }
};

exports.readDataFromFile = async function readDataFromFile(filename) {
  try {
    const filepath = path.join(rootDir, "database", filename);
    const data = fs.readFileSync(filepath, "utf8");
    return data
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => JSON.parse(line));
  } catch (e) {
    console.log("error reading data from file", e);
    return [];
  }
};
