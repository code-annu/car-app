const express = require("express");
const path = require("path");
const { rootDir } = require("./utils/path_util");

const { homeRouter } = require("./routers/home_router");
const { carRouter } = require("./routers/car-router");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter);
app.use(carRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
