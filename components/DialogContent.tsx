import React, { useState, useEffect } from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Eye, EyeOff, ChevronDown } from "lucide-react";

const Component: React.FC = () => {
  const [apiKey, setApiKey] = useState("");
  const [yourLanguage, setYourLanguage] = useState("ja");
  const [partnerLanguage, setPartnerLanguage] = useState("en");
  const [showApiKey, setShowApiKey] = useState(false);

  // localStorageから初期値を取得
  useEffect(() => {
    const storedApiKey = localStorage.getItem("apiKey") || "";
    const storedYourLanguage = localStorage.getItem("yourLanguage") || "ja";
    const storedPartnerLanguage = localStorage.getItem("partnerLanguage") || "en";
    setApiKey(storedApiKey);
    setYourLanguage(storedYourLanguage);
    setPartnerLanguage(storedPartnerLanguage);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("apiKey", apiKey);
    localStorage.setItem("yourLanguage", yourLanguage);
    localStorage.setItem("partnerLanguage", partnerLanguage);
    // 必要ならここで保存処理
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>設定</DialogTitle>
      </DialogHeader>
      <form className="flex flex-col gap-4" onSubmit={handleSave}>
        <label className="flex flex-col gap-1">
          <span>ChatGPT APIキー</span>
          <div className="relative">
            <input
              type={showApiKey ? "text" : "password"}
              className="border rounded px-4 py-2 pr-10 w-full focus:ring focus:ring-ring"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              placeholder="sk-..."
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-100 cursor-pointer"
              onClick={() => setShowApiKey(v => !v)}
              tabIndex={-1}
            >
              {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>
        <label className="flex flex-col gap-1">
          <span>あなたの言語</span>
          <div className="relative">
            <select
              className="border rounded px-4 py-2 focus:ring focus:ring-ring appearance-none w-full pr-8"
              value={yourLanguage}
              onChange={e => setYourLanguage(e.target.value)}
            >
              <option value="ja">日本語</option>
              <option value="en">English</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown size={18} />
            </span>
          </div>
        </label>
        <label className="flex flex-col gap-1">
          <span>相手の言語</span>
          <div className="relative">
            <select
              className="border rounded px-4 py-2 focus:ring focus:ring-ring appearance-none w-full pr-8"
              value={partnerLanguage}
              onChange={e => setPartnerLanguage(e.target.value)}
            >
              <option value="ja">日本語</option>
              <option value="en">English</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown size={18} />
            </span>
          </div>
        </label>
        <DialogFooter>
          <DialogClose asChild>
            <button
              type="submit"
              className="mt-2 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 cursor-pointer"
            >
              保存
            </button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default Component; 