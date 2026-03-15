const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/productRoute");

const app = express();
app.use(express.json());

mong