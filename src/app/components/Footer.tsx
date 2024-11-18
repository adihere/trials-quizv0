// app/components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#4A90E2] text-white p-4 mt-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p>&copy; 2023 Quiz App. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/terms">Terms & Conditions</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  )
}