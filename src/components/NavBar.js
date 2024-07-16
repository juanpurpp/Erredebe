import Image from "next/image"

const NavBar = () => {
  return (
    <div className="w-full grid grid-cols-2 px-4">
      <div className="flex justify-start items-center p-0.5 space-x-2">
        <Image src="/erredebe.svg" alt="logo" width={50} height={50} />
        <h2 className="text-md font-medium">Erredebe</h2>
      </div>
      <div className="flex justify-end items-center p-1">
      </div>
    </div>
  )
}
export default NavBar