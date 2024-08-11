import { useState } from "react"
import { HiMiniRectangleGroup } from "react-icons/hi2"
import { TbRectangle } from "react-icons/tb";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
const NewProjectForm = ({ title, texts, onSubmit, onBack }) => {
  const {
    form_project_name,
    form_project_name_placeholder,
    form_project_description,
    form_project_description_placeholder,
    form_start_from,
    form_empty_project,
    form_starter_project,
    form_name_required,
    form_submit_button
  } = texts
  const [selected, setSelected] = useState('empty')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, description, selected })
  }

  const nameIsValid = name.length > 0
  return (
    <div className="w-full h-full flex justify-start flex-col bg-slate-200">
     <button onClick={onBack} className="asbolute rounded-lg bg-slate-50 w-fit flex justify-start px-4 py-1 my-2 mx-2 border border-slate-200 hover:ring-1 hover:ring-slate-400 active:bg-slate-200">
      <PiArrowBendUpLeftBold className="  w-5 h-5 text-slate-600 " />
     </button>
      <div className="flex w-full  py-6 h-full flex-col justify-center items-center overflow-hidden space-y-4">
        <h2 className="text-2xl text-slate-800 font-medium">{title}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col justify-start items-center w-full max-w-96 px-2 space-y-1">
          <div className="flex flex-col-reverse w-full space-y-2">
            <input
              className="peer rounded-md text-sm font-light w-full border border-slate-300 placeholder:text-sm p-0.5 outline-none placeholder:font-light px-1 invalid:ring-1 invalid:ring-pink-500 focus:ring-0 focus:border-indigo-300"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={form_project_name_placeholder}
              autoFocus
            />
            <h3 className="font-light text-sm text-slate-700 w-full text-left peer-invalid:text-pink-600">{form_project_name}<span className={nameIsValid ? 'hidden' : 'visible'}>{form_name_required}</span>:</h3>
          </div>
          <div className="flex flex-col-reverse w-full space-y-2">
            <textarea
              className="rounded-md text-sm font-light w-full border border-slate-300 placeholder:text-sm p-0.5 outline-none placeholder:font-light px-1 min-h-8 h-12 max-h-64 focus:border-indigo-300"
              placeholder={form_project_description_placeholder}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h3 className="font-light text-sm text-slate-700 w-full text-left">{form_project_description}:</h3>
          </div>
          <div className="flex flex-col-reverse w-full space-y-2">

            <div className="w-full flex flex-row justify-center items-stretch border border-slate-200 bg-slate-300 p-1 rounded-lg">
              <button
                type="button"
                className={`${selected === 'empty' ? 'bg-slate-100 text-slate-600 ring-1 hover:ring-slate-200' : 'bg-slate-400 text-slate-300 hover:ring-1 hover:ring-slate-400'} flex flex-row justify-center items-center space-x-2 py-2 px-1.5 rounded-l-md w-full text-center text-sm  active:ring-sky-500 active:text-sky-500 active:bg-slate-200`}
                onClick={() => setSelected('empty')}
              >
                <span><TbRectangle /></span>
                <span>{form_empty_project}</span>
              </button>
              <button
                type="button"
                className={`${selected === 'starter' ? 'bg-slate-100 text-slate-600 ring-1 hover:ring-slate-200' : 'bg-slate-400 text-slate-300 hover:ring-1 hover:ring-slate-400'}  flex flex-row justify-center items-center space-x-2 py-2 px-1.5 rounded-r-md w-full text-center text-sm  active:ring-sky-500 active:text-sky-500 active:bg-slate-200`}
                onClick={() => setSelected('starter')}
              >
                <span ><HiMiniRectangleGroup /></span>
                <span> {form_starter_project}</span>
              </button>
            </div>
            <h3 className="font-light text-sm text-slate-700 w-full text-left">{form_start_from}</h3>
          </div>
          <div className="flex w-full">
            <button className="bg-slate-50 rounded-md w-full py-2 px-1 text-slate-600 border border-slate-300 mt-4 hover:border-indigo-200 active:border-indigo-300 active:text-sky-500">{form_submit_button}</button>
          </div>
        </form>
      </div>
    </div>

  )
}
export default NewProjectForm