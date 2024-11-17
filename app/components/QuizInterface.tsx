// app/components/QuizInterface.tsx
'use client'

import { useState } from 'react'

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Which of these is a fruit?",
    options: ["Carrot", "Broccoli", "Apple", "Potato"],
    correctAnswer: 2
  },
  // Add more sample questions here
]

export default function QuizInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    if (index === sampleQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      alert(`Quiz finished! Your score: ${score}/${sampleQuestions.length}`)
    }
  }

  const question = sampleQuestions[currentQuestion]

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
      <p className="text-lg mb-4">{question.text}</p>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`w-full text-left p-2 rounded ${
              selectedAnswer === index
                ? 'bg-[#4A90E2] text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={selectedAnswer === null}
        className="mt-6 bg-[#50E3C2] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#40D3B2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  )
}