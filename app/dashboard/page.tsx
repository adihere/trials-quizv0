// app/dashboard/page.tsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex">
        <Sidebar />
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
              {/* Add progress visualization here */}
              <p>Progress visualization coming soon...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Start a Quiz</h2>
              <div className="space-y-4">
                <Link href="/quiz" className="block w-full text-center bg-[#4A90E2] text-white px-4 py-2 rounded-full hover:bg-[#3A80D2] transition-colors">
                  Interactive Quiz
                </Link>
                <Link href="/mock-exam" className="block w-full text-center bg-[#50E3C2] text-white px-4 py-2 rounded-full hover:bg-[#40D3B2] transition-colors">
                  Timed Mock Exam
                </Link>
                <Link href="/accuracy-improvement" className="block w-full text-center bg-[#F5A623] text-white px-4 py-2 rounded-full hover:bg-[#E59613] transition-colors">
                  Accuracy Improvement
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}