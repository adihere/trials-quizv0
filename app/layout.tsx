// app/layout.tsx
import { Inter, Roboto_Slab } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz App for UK School Entrance Exams',
  description: 'Prepare for UK grammar and private school entrance exams with our interactive quiz app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${robotoSlab.variable}`}>{children}</body>
    </html>
  )
}