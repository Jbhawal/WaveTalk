const mongoose =require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String,required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        pic: {type: String, required: true, default: "https://tinyurl.com/dykkwuhf"},
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;