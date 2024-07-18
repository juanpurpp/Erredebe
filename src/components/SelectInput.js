const SelectInput = ({value, options = [], onValueChange=(()=>{})}) => {
  return (
    <div className="w-fit max-w-32 group flex flex-col">
      <input className="peer max-w-32 bg-slate-50 rounded-lg border border-slate-200 px-1 py-0.5 font-light outline-none focus:border-indigo-400" value={value} onChange={e=>onValueChange(e.target.value)} />
      <div className="z-10 peer-focus:visible mt-1 focus-within:visible invisible  absolute top-20 h-fit w-32 bg-gray-200 rounded-md p-0.5 space-y-0">
        {
          options.map((option, index) => (
            <button
              key={index} 
              className="w-full text-left text-xs text-slate-800 bg-slate-100 border border-slate-200 rounded-md px-1 py-0.5 font-light "
              onClick={() => onValueChange(option.value)}
            >
              {option.label}
            </button>
          ))
        }
      </div>
    </div>
  )
}
export default SelectInput