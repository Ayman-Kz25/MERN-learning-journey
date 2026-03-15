const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/productRoute");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mernLearning")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

app.use("/products", productRoute);

app.listen(5000, () => {
  console.log("server running on port 5000");
});
