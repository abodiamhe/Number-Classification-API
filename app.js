const express = require("express");
const bodyParser = require("body-parser");

const env = require("dotenv");
env.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const numberRoutes = require("./routes/number");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.use(numberRoutes);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Not found' });
});
 
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  res.status(status).json({ message: "An error occured" });
});

app.listen(process.env.PORT || 3000);
