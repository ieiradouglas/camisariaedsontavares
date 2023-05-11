import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const inter = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Camisaria Edson Tavares',
  description: 'Portifólio da Camisaria do Edson Tavares.',
  content: 'width=device-width, initial-scale=1',
  name: 'viewport',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} flex flex-col h-screen`}>
        <header className="flex items-center justify-center py-8 border-solid border-b-2 border-[#EFF6E0]">
          <div className="flex flex-1 justify-center">
            <img className="w-[200px]" src="/logo.svg" alt="logo" />
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="h-[70px] py-5 flex justify-center items-center">
          <p className="text-[#FFFFFF] text-xs md:text-[10px] font-bold text-center">₢ Douglas Vieira da Silva. 2023 All rights reserved</p>
        </footer>
      </body>
    </html>
  )
}
