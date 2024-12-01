// SocketChat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const SocketChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = io('http://localhost:7170'); // Connect to the Socket.IO server

  useEffect(() => {
    // Listen for 'receive_message' events from the server
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup the socket connection when the component is unmounted
    return () => {
      socket.off('receive_message');
    };
  }, [socket]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('send_message', message); // Send message to the server
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Socket.IO Chat</h1>
      <input
        id="message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send Message</button>

      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocketChat;
