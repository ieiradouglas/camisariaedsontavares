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
        <header className="flex flex-wrap md:flex-col md:gap-4 items-center justify-center py-8 border-solid border-b-2 border-[#EFF6E0]">
          <div className="flex flex-1 justify-center ml-44 md:ml-0">
            <img className="w-[152px] ml-[150px] md:ml-0" src="/logo.svg" alt="logo" />
          </div>
          <div className="flex justify-end mr-20 md:mr-3 md:mt-4 md:text-sm">
            <a className="h-[45px] bg-[#FAA307] px-3 rounded-xl flex items-center justify-center font-bold duration-500 hover:scale-110" href="https://api.whatsapp.com/send/?phone=%2B5522999401838&text&type=phone_number&app_absent=0"><img className="w-[35px] h-[35px] mr-2 justify-self-start" src="/wppicon.svg" alt="Whatsapp ícone" /> Enviar mensagem</a>
          </div>
        </header>
      
        {children}
      
        <footer className="h-[70px] flex justify-center items-center">
          <p className="text-[#FFFFFF] text-xs md:text-[10px] font-bold text-center">₢ Douglas Vieira da Silva. 2023 All rights reserved</p>
        </footer>
      </body>
    </html>
  )
}
