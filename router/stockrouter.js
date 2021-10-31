const express = require("express");
const route = express.Router();
const stockController = require("../controller/stockController");

route.get("/stock", stockController.getAllStock);

route.post("/insert", stockController.insertStock);

route.patch("/update", stockController.updateStock);

route.delete("/delete/:id", stockController.deleteStock);

module.exports = route;
