export default function Home(){
  return (
    <main className="flex-1">
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
      <div className="flex justify-center items-center my-7 font-bold md:text-sm">
        <a className="flex-1 max-w-[310px] h-[75px] bg-[#FAA307] px-3 rounded-xl flex items-center justify-center font-bold duration-500 hover:scale-110" href="/" target="_blank"><img className="w-[35px] h-[35px] mr-2 justify-self-start" src="/imageicon.svg" alt="Imagem ícone" /> Acessar Galeria</a>
      </div>
    </main>
  )
}

