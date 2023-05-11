


export default function Card({onClick}:any){

  return(
    <>
      <figure onClick={onClick} className="flex max-w-[220px] max-h-[220px] border-solid border-[10px] border-[#ffffff] hover:scale-110">
        <img src="/leao.svg" alt="imagem"/>
      </figure>
    
    </>
  )
}