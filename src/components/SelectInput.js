const SelectInput = ({value, options = [], onValueChange=(()=>{}), placeholder}) => {
  return (
    <div className="w-fit max-w-32 group flex flex-col">
      <input placeholder={placeholder} className="peer max-w-32 bg-slate-50 rounded-lg border border-slate-200 px-1 py-0.5 font-light outline-none focus:border-indigo-400" value={value} onChange={e=>onValueChange(e.target.value)} />
      <div className="z-10 border border-zinc-300 peer-focus:visible mt-1  has-[:active]:visible invisible  absolute top-20 h-fit w-32 bg-gray-200 rounded-md p-0.5">
        {
          options.filter(
            option => option.label.toLowerCase().includes(value.toLowerCase())
          ).map((option, index) => (
            <button
              key={index} 
              className="w-full text-left text-xs text-slate-800 bg-slate-100 border border-slate-200 rounded-md px-1 py-0.5 font-light hover:border-indigo-200 active:bg-indigo-50"
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