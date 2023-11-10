const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the DB");
  } catch (error) {
    console.error("Error connecting to the DB:", error);
  }
};

module.exports = connectDB;
