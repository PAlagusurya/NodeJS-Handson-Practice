require("dotenv").config();

const express = require("express");
const connectToDB = require("./database/db");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/home", homeRoutes);

// Connect to DB
connectToDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
