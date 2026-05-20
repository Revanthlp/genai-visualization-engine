"use client";

import { useState } from "react";

export default function AIChat() {

  const [messages,setMessages] = useState([
    "Hello 👋 I am your GenAI Assistant"
  ]);

  const [input,setInput] = useState("");

  const sendMessage = () => {

    if(!input) return;

    setMessages([
      ...messages,
      `You: ${input}`,
      "AI: Generating marketing recommendations..."
    ]);

    setInput("");
  };

  return (
    <section className="section">

      <h2 className="text-5xl font-bold mb-16">
        AI Assistant
      </h2>

      <div className="card">

        <div className="h-[300px] overflow-y-auto mb-6">

          {messages.map((msg,index)=>(
            <p
              key={index}
              className="mb-4 text-lg"
            >
              {msg}
            </p>
          ))}

        </div>

        <div className="flex gap-4">

          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Ask AI..."
            className="flex-1 p-4 rounded-xl bg-black border border-gray-700"
          />

          <button
            onClick={sendMessage}
            className="btn"
          >
            Send
          </button>

        </div>

      </div>

    </section>
  );
}