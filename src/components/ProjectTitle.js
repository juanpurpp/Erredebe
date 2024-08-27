import { useState } from "react"
import { HiOutlinePencilSquare } from "react-icons/hi2"
import Loading from "./Loading"

const ProjectTitle = ({ title, onSaveTitle = () => { console.log('saving') }, isLoading=false },) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const handleKeyUp = (e) => {
    switch (e.key) {
      case 'Enter':
        setIsEditing(false)
        onSaveTitle(newTitle)
        break
      case 'Escape':
        setIsEditing(false)
        break
    }
  }
  console.log('islad',isLoading)
  return (
    <div
      onDoubleClick={() => setIsEditing(true)}
      className={`flex flex-row items-center space-x-1 font-medium text-slate-700 rounded-md overflow-hidden min-w-fit max-w-fit ${isEditing && 'bg-slate-50 border-blue-500 border'}`}
      onKeyUp={handleKeyUp}
    >
      {
        isLoading ? (
          <Loading className={isEditing ? 'text-blue-600 min-w-8 ' : "text-slate-300 min-w-8"}/>
        ):(
          <HiOutlinePencilSquare className={isEditing ? 'text-blue-600 min-w-8 ' : "text-slate-300 min-w-8" }/>
        )
      }
      {
        isEditing ? (
          <input
            autoFocus
            value={newTitle}
            onBlur={() => setIsEditing(false)}
            onChange={(e) => setNewTitle(e.target.value)}
            className=" outline-none font-normal"
          />  
        ):(
          <h1>{ isLoading ? newTitle : title }</h1>
        )
      }       
    </div >
  )
}
export default ProjectTitle