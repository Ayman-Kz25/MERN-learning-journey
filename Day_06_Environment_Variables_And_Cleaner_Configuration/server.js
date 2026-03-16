const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoute = require("./routes/productRoute");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

app.use("/products", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
