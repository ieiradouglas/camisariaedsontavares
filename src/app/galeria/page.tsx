'use client';

import { useState } from 'react'
import Card from  '../../components/Card'
import Modal from '../../components/Modal'

export default function Galeria(){
  const [isVisible, setIsVisible] = useState(false)


  return (
    <>
      <section className="flex flex-wrap gap-4 p-4 justify-center items-start h-full m-3">
        <Modal onClick={()=>setIsVisible(false)} visible={isVisible}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
        <Card onClick={()=>setIsVisible(true)}/>
      </section>
      <a className=" fixed bottom-2 right-2 w-[55px] h-[55px] bg-[#FAA307] rounded-xl flex items-center justify-center z-50 duration-150 hover:scale-110 _blank" href="https://api.whatsapp.com/send/?phone=%2B5522999401838&text&type=phone_number&app_absent=0"><img className="w-[35px] h-[35px]" src="/wppicon.svg" alt="Whatsapp ícone" /></a>
    </>
  )
}