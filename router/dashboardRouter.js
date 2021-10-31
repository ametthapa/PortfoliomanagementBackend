const express = require("express");
const route = express.Router();
const dashboardController = require("../controller/dashboardController.js");

route.get("/", dashboardController.getAllStocks);

module.exports = route;
