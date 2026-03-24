const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const logger = require("./middlewares/logger");

const productRoute = require("./routes/productRoute");

const app = express();
app.use(express.json());
app.use(logger);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB Connection Error: ",err));

app.use("/products", productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

const errorHandler = require("./middlewares/errorHandler");

app.use(errorHandler);