const mongoose = require("mongoose");

const connectDB = async () => { 
    await mongoose.connect(process.env.CONNEXION_String)
    .then(() => {
        console.log("Database connected successfully");
    })
}
module.exports = connectDB;

