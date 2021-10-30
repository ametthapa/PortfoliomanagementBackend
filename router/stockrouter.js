const express = require("express");
const route = express.Router();
const stockController = require("../controller/stockController");

route.get("/stock", stockController.getAllStock);

route.post("/insert", stockController.insertStock);

module.exports = route;
