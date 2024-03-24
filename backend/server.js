const express = require("express");
const dotenv = require("dotenv");
const {chats}= require("./data/data");

const app= express();
dotenv.config();

//Creating an API
app.get('/', (req, res)=>{   //highlighted part means the address of the page. which page will sgow what
    res.send("API is Running"); //what will be displayed on the page mentioned in the '' in get
});

app.get('/api/chat', (req, res)=>{
    res.send(chats);
});
app.get('/api/chat/:id', (req,res)=>{
    // res.send(chats)
    // console.log(req.params.id);
    const singleChat= chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
});

const PORT= process.env.PORT || 5000;
app.listen(PORT, console.log(`server has started on port ${PORT}`));









