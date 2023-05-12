
export default function Modal({src ,visible, onClick}:any){

  return (
    <>
      <div className={`${visible ? 'flex' : 'hidden'} w-screen z-30 h-screen fixed top-0 bg-[RGBA(1,1,1,0.9)] justify-center items-center`}>
        <img onClick={onClick} className="w-12 h-12 absolute right-5 top-5 z-50 hover:scale-125 duration-150 hover:cursor-pointer" src="/closeicon.svg"/>
        <section className="flex w-full h-screen max-w-[900px] max-h-[900px] my-5">
          <img className="w-full h-full" src="/leao.svg"/>
        </section>
      </div>
    </>
  )
}