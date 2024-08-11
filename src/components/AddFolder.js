import { useState } from 'react'
import {HiFolderPlus} from 'react-icons/hi2'
const AddFolder = ({onAddFolder, children, placeholder}) => {
  const [isWritingName, setIsWritingName] = useState(false)
  const [folderName, setFolderName] = useState('')
  const onClick = () => {
    setIsWritingName(true)
  }
  const endEditing = () => {
    setIsWritingName(false)
    onAddFolder(folderName)
  }
  const valid = folderName.length > 0
  const handleKeyUp = (e) => {
    if(!isWritingName) return
    switch (e.key) {
      case 'Enter':
        if(!valid) return
        endEditing()
        setFolderName('')
        break
      case 'Escape':
        setIsWritingName(false)
        break
    }
  }
  
  return (
    <button onClick={onClick} className="w-full overflow-hidden border-2 bg-slate-100 border-slate-200 rounded-lg px-1.5 py-1 active:bg-slate-300 hover:border-slate-300 active:border-slate-300">
      {
        isWritingName ? (
          <input
            autoFocus='true'
            onBlur={()=>setIsWritingName(false)}
            onKeyUp={(e)=>handleKeyUp(e)}
            onChange={(e)=>setFolderName(e.target.value)}
            type="text"
            placeholder={placeholder}
            aria-invalid={!valid}
            required
            className={`flex flex-row justify-center items-center text-center text-sm bg-slate-50 text-slate-700 w-full outline-none rounded-md ring-1 ring-slate-200 font-normal invalid:ring-pink-600`}
            
          />
        ) : (
          <p className="flex flex-row justify-center items-center text-center text-sm text-slate-700 font-medium space-x-2"><HiFolderPlus /> <span>{children}</span> </p>
        )
      }
    </button>
  )
}
export default AddFolder