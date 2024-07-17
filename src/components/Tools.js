const Tools = ({langSet, onCreateNewTable}) => {
  const {new_table_label} = langSet
  return (
    <div className="h-10 bg-slate-50 w-full rounded-t-none rounded-b-2xl border border-t-0 border-slate-200 flex flex-row space-x-2 items-center justify-start px-4 py-2">
      <button onClick={onCreateNewTable} className=" bg-slate-100 hover:bg-slate-200 rounded-md text-sm border border-slate-200 px-1.5 py-0.5 text-slate-600">{new_table_label}</button>
    </div>
  )
}
export default Tools