"use server"
import getTexts from "./texts";
import LoginLink from "@/components/LoginLink";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default async function Page({ params }) {
  const {lang} = params
  const { login_with_google, login_with_apple, h1_title } = getTexts(lang)
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-sky-100 space-y-8">
      <h1 className="text-3xl font-medium text-sky-950">{h1_title}</h1>
      <div className="flex flex-col space-y-4 items-stretch w-96 px-4">
        <LoginLink icon={<FaGoogle/>} >{login_with_google}</LoginLink>
        <LoginLink  icon={<FaApple/>} >{login_with_apple}</LoginLink>
      </div>
    </div>
  );
}