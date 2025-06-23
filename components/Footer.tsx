import React, { useState } from "react";
import { Mic, Send } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // ここに送信処理を記述
    alert(`送信: ${message}`);
    setMessage("");
  };

  return (
    <footer className="w-full py-4">
      <div className="flex items-center gap-4 mx-8">
        <button
          className="p-3 mr-8 bg-red-800 rounded-full border border-red-900 hover:bg-red-700 hover:bg-red-600 cursor-pointer transition"
          onClick={() => alert('録音開始（ダミー）')}
          aria-label="録音"
        >
          <Mic className="w-8 h-8" />
        </button>
        <TextareaAutosize
          className="-mr-24 flex-1 w-full pr-22 px-4 py-2 rounded-xl border border-gray-900 bg-gray-100/60 text-gray-800 focus:outline-none"
          minRows={3}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="メッセージを入力..."
        />
        <button
          className="p-4 bg-blue-700 rounded-xl hover:bg-blue-900 cursor-pointer transition"
          onClick={handleSend}
          disabled={!message.trim()}
          type="button"
        >
          <Send className="w-8 h-8" />
        </button>
      </div>
    </footer>
  );
};

export default Footer; 