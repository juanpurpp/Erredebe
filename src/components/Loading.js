import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Loading = ({className}) => {
  return (
    <AiOutlineLoading3Quarters className={"animate-spin "+className}/>
  )
}
export default Loading