const http = require("http");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const transferRouter = require("./routes/transferRoutes");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(transferRouter);

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

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/transfer", transferRouter);
