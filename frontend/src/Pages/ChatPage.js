import React, { useEffect, useState } from 'react';
import axios from "axios";
// 12mins
const ChatPage = () => {
const [chats, setChats]= useState([]);
    const fetchChats =async()=>{
        const {data}= await axios.get("/api/chat");
        setChats(data);
    };

    useEffect(()=>{
        fetchChats();
            
    }, []);
    
  return (
    <div>
      {chats.map((chat)=>(
        <div key={chat._id}>{chat.ChatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
