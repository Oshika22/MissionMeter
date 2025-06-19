import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await axios.post('http://127.0.0.1:5000/chat', {
        message: input
      });

      setMessages([
        ...newMessages,
        { role: 'assistant', content: res.data.response }
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: "⚠️ Chatbot error, please try again." }
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    // Auto-scroll to bottom
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-3xl mx-auto mt-20 mb-10 p-4 bg-white rounded-xl shadow-lg flex flex-col h-[75vh]">
      <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-3">🛰️ MissionMeter ChatBot</h2>

      <div className="flex-1 overflow-y-auto px-2 py-3 bg-gray-100 rounded-md space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg text-sm ${
              msg.role === 'user'
                ? 'ml-auto bg-indigo-600 text-white'
                : 'mr-auto bg-gray-200 text-gray-800'
            }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={chatRef}></div>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your mission query..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
