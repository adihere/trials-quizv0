// app/components/Sidebar.tsx
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-6">
      <nav>
        <ul className="space-y-4">
          <li><Link href="/dashboard" className="text-[#4A90E2] hover:underline">Home</Link></li>
          <li><Link href="/quiz" className="text-[#4A90E2] hover:underline">Interactive Quiz</Link></li>
          <li><Link href="/mock-exam" className="text-[#4A90E2] hover:underline">Timed Mock Exam</Link></li>
          <li><Link href="/accuracy-improvement" className="text-[#4A90E2] hover:underline">Accuracy Improvement</Link></li>
          <li><Link href="/profile" className="text-[#4A90E2] hover:underline">Profile</Link></li>
          <li><Link href="/progress" className="text-[#4A90E2] hover:underline">Progress</Link></li>
        </ul>
      </nav>
    </aside>
  )
}