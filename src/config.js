const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:Admin123@cluster0.ddamp63.mongodb.net/?appName=Cluster0"
// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });

// Define the login schema
const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true // optional, prevents duplicate emails
    },
    password: {
        type: String,
        required: true
    }
});

// Create the model for 'Primary_User' collection
const PrimaryUser = mongoose.model("Primary_User", loginSchema);

module.exports = PrimaryUser;
