import Image from "next/image"
import Link from "next/link"

const AppNavBar = ({lang = 'es'}) => {
  return (
    <div className="w-full grid grid-cols-2 bg-slate-100 border px-2 border-slate-200">
      <div className="flex justify-start items-center p-0.5 space-x-2">
        <Link className="flex flex-row items-center space-x-2" href={`/${lang}`}>
          <Image src="/erredebe.svg" alt="logo" width={50} height={50} />
          <h2 className="text-md font-medium">Erredebe</h2>
        </Link>
      </div>
      <div className="flex justify-end items-center p-1">
      </div>
    </div>
  )
}
export default AppNavBar