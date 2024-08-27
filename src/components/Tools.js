import Loading from "@/components/Loading"
import { AiFillCheckCircle } from "react-icons/ai"

const Tools = ({ langSet, onCreateNewTable, isSaving, wasSavedCorrectly, projectName = '' }) => {
  const { new_table_label, is_saving, saved_correctly } = langSet
  const statusMessage = isSaving ? is_saving : wasSavedCorrectly ? saved_correctly : ''
  return (
    <div className="flex flex-row justify-between items-center h-10 bg-slate-50 w-full rounded-t-none rounded-b-2xl border border-t-0 border-slate-200 space-x-2  px-4 py-2">
      <div className="flex flex-row items-center justify-start">
        <h1 className="text-md text-slate-700">{projectName}</h1>
        <button onClick={onCreateNewTable} className=" bg-slate-100 hover:bg-slate-200 rounded-md text-sm border border-slate-200 px-1.5 py-0.5 text-slate-600">{new_table_label}</button>
      </div>
      <div className="flex flex-row items-center text-xs text-slate-500 space-x-2">
        <p className="">{statusMessage}</p>
        {isSaving && <Loading className="min-w-3 max-w-3 min-h-3 max-h-3" />}
        {wasSavedCorrectly && <AiFillCheckCircle className="min-w-3 max-w-3 min-h-3 max-h-3" />}
      </div>
    </div>
  )
}
export default Tools