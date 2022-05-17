import React, { useEffect, useState } from 'react';
import styles from './message.module.css';

export const Message = ({ msg }) => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({
    autor: '',
    text: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageList([...messageList, message]);
  };
  useEffect(() => {
    let lastElement = messageList[messageList.length - 1];
    if (lastElement?.autor === 'Me') {
      setMessageList([
        ...messageList,
        {
          autor: 'Bot',
          text: 'Thanks for contacting me',
        },
      ]);
    }
  }, [messageList]);

  return (
    <div className={styles.msg}>
      {msg}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message.text}
          onChange={(e) => setMessage({ autor: 'Me', text: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
      {messageList?.map((el, idx) => (
        <div key={idx} className={el?.autor === 'Me' ? styles.box : styles.boxBot}>
          <p>{el?.text}</p>
          <span>{el?.autor}</span>
        </div>
      ))}
    </div>
  );
};
