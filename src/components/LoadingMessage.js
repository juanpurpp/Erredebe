import Loading from "./Loading"

const LoadingMessage = ({children}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
      <Loading className="w-6 h-6" />
      <p className="font-light text-md text-slate-700">{children}</p>
    </div>
  )
}
export default LoadingMessage