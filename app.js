const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./routes/userRoutes.js");

const app = express();

//Configurations
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

//middlewares
app.use(bodyParser.json());

//db connect

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running in the PORT ${PORT}`);
    });
  })
  .catch((err) => console.log("Failed to connect database", err));

//routes
app.use("/", router);
