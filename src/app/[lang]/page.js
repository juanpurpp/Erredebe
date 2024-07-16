import NavBar from "@/components/NavBar";
import Image from "next/image";
import getTexts from './texts.js'
import MainLink from "@/components/MainLink.js";
export default function Home({params}) {
  const {title, description, main_button} = getTexts(params.lang)
  return (
    <main className="flex h-screen flex-col p-0.5 bg-light_background">
      <div className="w-full h-14">
        <NavBar/>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="p-1 sm:p-0 flex max-w-3xl justify-center items-center flex-col w-full h-full space-y-2 m-1">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10">
            <Image className="p-1" src="/erredebe.svg" alt="logo" width={200} height={500} />
            <div className="flex flex-col justify-center items-center sm:items-start space-y-4">
              <h1 className="text-center sm:text-left text-4xl font-bold text-slate-800">{title}</h1>
              <h2 className="text-center sm:text-left text-lg font-light text-slate-800">{description}</h2>
            </div>
          </div>
          <MainLink href={`${params.lang}/app`} label={main_button}></MainLink>
        </div>
      </div>
    </main>
  );
}
