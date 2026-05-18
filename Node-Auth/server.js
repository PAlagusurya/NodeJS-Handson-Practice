require("dotenv").config();

const express = require("express");
const connectToDB = require("./database/db");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Connect to DB
connectToDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
