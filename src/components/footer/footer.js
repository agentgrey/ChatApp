import Style from "./footer.module.css";
import React, { useState } from 'react';
import ChatArea from "../../components/chatArea/chatArea";


const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function Footer() {
    
  const [messages, setMessages] = useState([]);
    
    const handleMessageSubmit = (event) => {
        event.preventDefault();
        const inputMessage = event.target.message.value;
        const randomUser = user_list[Math.floor(Math.random() * user_list.length)];

        if (inputMessage.trim() !== "") {
        const newMessage = {
            username: randomUser,
            message: inputMessage,
        };

        setMessages([...messages, newMessage]);
        event.target.reset();
        }
    };

    return (
        <>
            <ChatArea messages={messages} />
            <form onSubmit={handleMessageSubmit} className={Style.sendBar}>
                <input type="text" name="message" placeholder="Type a message" className={Style.input} />
                <button type="submit" className={Style.sendButton}>Send</button>
            </form>
        </>
    )
}

export default Footer;