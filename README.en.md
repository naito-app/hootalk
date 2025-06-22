# HooTalk 🦉💬

**HooTalk** is a browser-based voice translation app that leverages OpenAI's speech, translation, and speech synthesis technologies to enable smooth conversations between Japanese and English speakers.

## ✨ Main Features

- 🎙️ Speech recognition (supports Whisper API or Web Speech API)
- 🌐 High-quality translation powered by ChatGPT (GPT-4 / GPT-4o, etc.)
- 🔊 Text-to-speech (TTS) with multiple voice styles to choose from
- 🖱️ Click to start recording, and auto-stop when you finish speaking
- 🧠 Adjustable speech speed (from 0.5x to 2.0x in 0.25 increments)
- 💾 Conversation history saved with LocalStorage
- 📤 Download conversation history in Markdown (`.md`) format

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [OpenAI API](https://platform.openai.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- (Optionally uses [shadcn/ui](https://ui.shadcn.com/) for UI components)

## 🚀 Getting Started (Development)

```bash
git clone https://github.com/naito-app/hootalk.git
cd hootalk
npm install
npm run dev
``` 