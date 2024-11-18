// app/components/ChatbotInterface.tsx
'use client'

import { useState } from 'react'

export default function ChatbotInterface() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your quiz assistant. What would you like to know?", isBot: true }
  ])
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }])
      // Here you would typically send the input to your backend or AI service
      // and get a response. For now, we'll just echo the input.
      setTimeout(() => {
        setMessages(msgs => [...msgs, { text: `You said: ${input}`, isBot: true }])
      }, 500)
      setInput('')
    }
  }

  return (
    <div className="max-w-md mx-auto border rounded-lg overflow-hidden">
      <div className="h-80 overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.isBot ? 'text-left' : 'text-right'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.isBot ? 'bg-white' : 'bg-[#4A90E2] text-white'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 border rounded-lg"
        />
      </form>
    </div>
  )
}