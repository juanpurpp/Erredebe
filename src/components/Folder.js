"use client";
const Folder = ({isActive, folder, onClick}) => {
  if(isActive) return(
    <button onClick={onClick} className="w-full overflow-hidden border-2 bg-blue-100 border-blue-200 rounded-lg px-1.5 py-1 hover:bg-blue-200 ">
      <p className="text-center text-sm text-slate-600 font-medium"><span className="text-blue-200 mr-1">•</span>{folder}</p>
    </button>
  )
  return (
    <button onClick={onClick} className="w-full  overflow-hidden border-2 bg-slate-200 border-slate-300 rounded-lg px-1.5 py-1 active:bg-slate-300 hover:border-indigo-200 active:border-slate-300">
      <p className="text-center text-sm text-slate-600 font-medium">{folder}</p>
    </button>
  )
}
export default Folder