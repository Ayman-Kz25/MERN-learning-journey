const express = require("express");

const productRoutes = require("./routes/productRoute");

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

app.listen(5000, () => {
  console.log("Server is running");
});
