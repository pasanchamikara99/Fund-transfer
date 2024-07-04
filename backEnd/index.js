const http = require("http");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const port = process.env.PORT;
const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_DB_URL, {})
  .then(() => {
    const server = http.createServer(app);
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
