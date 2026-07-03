const express = require("express");
const dotenv = require("dotenv");

const logger = require("./middleware/logger.js");

// Route files
const oses = require("./routes/oses.js");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev logging middleware
if(process.env.NODE_ENV === "development") {
  app.use(logger);
}

app.use("/api/cgl", oses);

const PORT = process.env.PORT || 6969;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`),
);
