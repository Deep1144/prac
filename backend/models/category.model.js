const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name:String,
        // parent:mongoose.Types.ObjectId
        parent : String
    }, 
    {
    collation: "category"
    }
)



exports.category = mongoose.model("CATEGORY" , categorySchema);
