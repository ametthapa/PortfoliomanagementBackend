const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const db = require("./utility/db");

const app = express();

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const stockRoutes = require("./router/stockrouter.js");
const dashboardRoutes = require("./router/dashboardRouter.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", stockRoutes);
app.use("/api/v1", dashboardRoutes);

db.then(() => {
  app.listen(process.env.port, "0.0.0.0", () => {
    console.log("connected to the port");
  });
}).catch((err) => {
  console.log(err);
});
