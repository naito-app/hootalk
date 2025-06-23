import React, { useEffect, useRef, useState } from "react";

const Main = () => {
  const [chatHistory, setChatHistory] = useState<{ role: string; message: string }[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateHistory = () => {
      const historyStr = localStorage.getItem("chatHistory");
      if (historyStr) {
        setChatHistory(JSON.parse(historyStr));
      } else {
        setChatHistory([]);
      }
    };
    window.addEventListener("chatHistoryUpdated", updateHistory);
    updateHistory(); // 初回マウント時に履歴を取得
    return () => window.removeEventListener("chatHistoryUpdated", updateHistory);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  if (chatHistory.length === 0) {
    return <div className="text-center text-gray-400">履歴がありません</div>;
  }
  return (
    <div className="w-full flex flex-col gap-4">
      {chatHistory.map((item, idx) => (
        <div
          key={idx}
          className={`flex ${item.role === "you" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`px-4 py-2 rounded-xl break-words shadow-sm ${
              item.role === "you"
                ? "bg-blue-600/40 text-white rounded-br-none"
                : "bg-gray-200/40 text-gray-900 rounded-bl-none"
            }`}
          >
            {item.message.split('\n').map((line, i) => (
              line ? (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ) : null
            ))}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default Main; 