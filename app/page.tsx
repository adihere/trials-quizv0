// app/page.tsx
import Header from './components/Header'
import Footer from './components/Footer'
import ChatbotInterface from './components/ChatbotInterface'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-16">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Prepare for UK School Entrance Exams</h1>
          <p className="text-xl mb-8">Interactive quizzes and personalized learning for grammar and private school admissions</p>
          <button className="bg-[#4A90E2] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#3A80D2] transition-colors">
            Start Chatbot
          </button>
        </section>
        <ChatbotInterface />
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to excel?</h2>
          <p className="text-xl mb-8">Sign up now to access full features and track your progress!</p>
          <Link href="/signup" className="bg-[#50E3C2] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#40D3B2] transition-colors">
            Sign Up
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}