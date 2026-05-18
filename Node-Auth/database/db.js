const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("Connected to DB");
  } catch (e) {
    console.log("Error connecting to DB", e);
    process.exit(1);
  }
};

module.exports = connectToDB;
