const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    }, 
    {
    collation: "users"
    }
)



exports.user = mongoose.model("USER" , userSchema);
