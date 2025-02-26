import { useEffect, useState } from "react";
import io from "socket.io-client";

const API_URL = import.meta.env.VITE_BACKEND_URL;
const socket = io(API_URL, { withCredentials: true });

const DiscussionChat = ({ roomId, user }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!roomId || !user) return;

    socket.emit("joinRoom", roomId);

    const handleMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
      socket.emit("leaveRoom", roomId);
    };
  }, [roomId, user]);

  const sendMessage = () => {
    if (message.trim()) {
      const msgData = { roomId, user, text: message };
      socket.emit("sendMessage", msgData);
      setMessages((prev) => [...prev, msgData]);
      setMessage("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Discussion Room: <span className="text-blue-500">{roomId}</span>
      </h3>

      {/* Chat Box */}
      <div className="h-64 overflow-y-auto bg-gray-100 p-3 rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded-lg w-fit max-w-xs ${
              msg.user === user
                ? "ml-auto bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            <p className="text-sm font-bold">{msg.user}</p>
            <p className="text-md">{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex mt-3 space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 text-blue-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default DiscussionChat;