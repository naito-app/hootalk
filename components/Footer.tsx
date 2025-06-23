import React, { useState } from "react";
import { Mic, Volume2 as Speaker } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    // チャット履歴を取得
    const historyStr = localStorage.getItem("chatHistory");
    const chatHistory = historyStr ? JSON.parse(historyStr) : [];

    // ユーザーのメッセージを履歴に追加（roleを'you'に変更）
    chatHistory.push({ role: "you", message });

    // 履歴をlocalStorageに保存
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    window.dispatchEvent(new Event("chatHistoryUpdated"));

    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSend();
    }
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
          className="-mr-18 flex-1 w-full pr-22 px-4 py-2 rounded-xl border border-gray-900 bg-gray-100/60 text-gray-800 focus:outline-none"
          minRows={3}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="メッセージを入力..."
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
        />
        <button
          className="mr-6 p-3 text-blue-700 hover:text-blue-700/60 rounded-full hover:bg-blue-100/20 cursor-pointer transition z-2"
          onClick={handleSend}
          disabled={!message.trim()}
          type="button"
          children={<Speaker className="w-6 h-6" />}
        />
      </div>
    </footer>
  );
};

export default Footer; 