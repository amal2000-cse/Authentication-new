//setting up mongoose
const mongoose = require("mongoose");

const mongo = async () => {
  try {
    await mongoose.connect('mongodb+srv://amal:suvarnam123@cluster0.yv0jz11.mongodb.net/?retryWrites=true&w=majority');

    console.log("Database connected successfully");
  } catch (err) {
    console.error("Not connected to the database:", err);
  }
};
mongo();
