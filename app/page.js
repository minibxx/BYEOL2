"use client"
import './globals.css'
import pageSt from './page.module.css'
import Login from './comp/Login'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    const footerSt = document.getElementsByClassName('link')
    footerSt[0].classList.add(pageSt.hidden)
})
  return(
    <>
        <Login/>
    </>
  )
}


