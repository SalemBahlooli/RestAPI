// File: src/scripts/populateDummyData.js
const mongoose = require("mongoose");
const config = require("../config");
const User = require("../models/userModel");

const dummyUsers = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Smith", email: "jane@example.com" },
  { name: "Bob Johnson", email: "bob@example.com" },
  { name: "Alice Williams", email: "alice@example.com" },
  { name: "Charlie Brown", email: "charlie@example.com" },
];

async function populateDummyData() {
  try {
    await mongoose.connect(config.databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    await User.deleteMany({});
    console.log("Cleared existing users");

    const createdUsers = await User.create(dummyUsers);
    console.log(`Created ${createdUsers.length} dummy users`);

    console.log("Dummy data population complete");
  } catch (error) {
    console.error("Error populating dummy data:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
}

populateDummyData();
