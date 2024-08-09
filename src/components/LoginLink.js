"use client"

import { setCookie } from "@/actions/cookies"
import getGoogleAuthUrl from "@/utils/getGoogleAuthUrl"
import Link from "next/link"
import { useEffect, useState } from "react"

const LoginLink = ({ children, icon }) => {
  //saving lang 
  const onClick =()=> setCookie('lang', 'en')
  const [href, setHref] = useState('')
  useEffect(()=>{
    setHref(getGoogleAuthUrl())
  },[])
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg text-slate-50 bg-orange border border-dark_orange text-center align-middle py-1.5 px-1 text-lg flex flex-row justify-center items-center space-x-5 ">
      <div>{children}</div>
      <div>{icon}</div>
    </Link>
  )
}

export default LoginLink