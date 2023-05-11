import Link from 'next/link'

export default function Home(){
  return (
    <>
      <section className="flex justify-center">
        <div className="my-16 flex flex-wrap  justify-center gap-24">
          <div className="max-w-4xl text-center text-6xl md:text-2xl font-bold text-[#FFFFFF] flex flex-col justify-center gap-24">
            <h2 className="">Que tal usar estampas que expressam o seu imenso amor por Cristo?</h2>
            <h3 className="">Vista a palavra de Deus!</h3>
          </div>
          <div>
            <img className="min-h-[443px]"  src="/leao.svg" alt="Foto de um leão"/>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center gap-7 items-center my-7 font-bold md:text-sm">
        <Link className="w-[280px] h-[55px] bg-[#FAA307] px-3 rounded-xl flex items-center justify-center duration-500 hover:scale-110" href="/galeria" target="_self"><img className="w-[35px] h-[35px] mr-2 justify-self-start" src="/imageicon.svg" alt="Imagem ícone" /> Acessar Galeria</Link>
        <a className="w-[280px] h-[55px] bg-[#FAA307] px-3 rounded-xl flex items-center justify-center duration-500 hover:scale-110" href="https://api.whatsapp.com/send/?phone=%2B5522999401838&text&type=phone_number&app_absent=0"><img className="w-[35px] h-[35px] mr-2 justify-self-start" src="/wppicon.svg" alt="Whatsapp ícone" /> Enviar mensagem</a>
      </div>
    </>
  )
}

