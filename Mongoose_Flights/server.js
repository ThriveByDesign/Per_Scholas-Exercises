require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 8080;
const connectDB = require("./config/database");
connectDB();
const { createEngine } = require("jsx-view-engine");
const methodOverride = require('method-override')
const routes = require("./routes/flightRoutes");
app.set("view engine", "jsx");
app.engine("jsx", createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use("/flights", routes);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});




// const Flight = mongoose.model('Flight', flightSchema);

// module.exports = Flight;

// const express = require('express');
// const app = express();
// const Flight = require('./models/flight');
// const db = require('./config/database');

// // routes and middleware go here

// app.listen(3000, () => console.log('Server started on port 3000'));
