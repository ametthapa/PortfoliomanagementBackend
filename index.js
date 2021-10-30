const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const db = require("./utility/db");

const app = express();

const stockRoutes = require("./router/stockrouter.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", stockRoutes);

db.then(() => {
  app.listen(process.env.port, "0.0.0.0", () => {
    console.log("connected to the port");
  });
}).catch((err) => {
  console.log(err);
});
