const express = require("express");
const dotenv = require("dotenv");

// Route files
const oses = require("./routes/oses.js");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/cgl", oses);

const PORT = process.env.PORT || 6969;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`),
);
