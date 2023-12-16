//setting up mongoose
const mongoose = require("mongoose");

const mongo = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/authentication');

    console.log("Database connected successfully");
  } catch (err) {
    console.error("Not connected to the database:", err);
  }
};
mongo();
