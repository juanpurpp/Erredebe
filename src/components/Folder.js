"use client";

import { HiFolderOpen } from "react-icons/hi2";

const Folder = ({isActive, folder, onClick}) => {
  if(isActive) return(
    <button onClick={onClick} className="w-full overflow-hidden border bg-blue-100 border-blue-200 rounded-lg px-1.5 py-1 hover:bg-blue-200 ">
      <p className="text-center text-sm text-slate-600 font-medium flex flex-row justify-center items-center">
        <HiFolderOpen className="text-blue-400 mr-1"/>
        <span className="">{folder}</span>
        
      </p>
    </button>
  )
  return (
    <button onClick={onClick} className="w-full  overflow-hidden border bg-slate-200 border-slate-300 rounded-lg px-1.5 py-1 active:bg-slate-300 hover:border-indigo-200 active:border-sky-200">
      <p className="text-center text-sm text-slate-600 font-medium">{folder}</p>
    </button>
  )
}
export default Folder