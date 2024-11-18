// app/components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#4A90E2] text-white p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">Quiz App</Link>
        <ul className="flex space-x-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/signin">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  )
}