import React from 'react';
import styles from './chatArea.module.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function ChatArea({ messages }) {
  return (
    <>
      <div className={styles.chatArea}>
        {messages.map((message, index) => {
          const userIndex = user_list.indexOf(message.username);
          const userClass = `user${userIndex + 1}`;

          return (
              <>
              <span className={styles.username}>{message.username}: </span>
            <div key={index} className={`${styles.message} ${styles[userClass]}`}>
              <div className={styles.messageContent}>{message.message}</div>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ChatArea;
