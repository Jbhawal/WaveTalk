const mongoose = require ("mongoose");

const chatModel= mongoose.Schema(
    {
        chatName: {type: String, trime: true},
        isGroupChat: {type: Boolean, default: false},
        users: [{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        ],
        latestMessgae: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
        {
            timestamps: true,
        }
);

const Chat =mongoose.model("Chat", chatModel);

module.exports = Chat;