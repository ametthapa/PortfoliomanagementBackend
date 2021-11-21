const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const db = require("./utility/db");

var cors = require("cors");

const app = express();
app.use(cors());

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
