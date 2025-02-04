const express = require("express");

const app = express();

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

app.use("/api", numberRoutes);

app.use((error, req, res, next) => { 
  const status = error.statusCode || 500; 
  res.status(status).json({ message: "An error occured" });
});

app.listen(8080);
