const { default: Link } = require("next/link")

const MainLink = ({href, label}) => {
  return (
    <Link
      href={href}
      className="w-full border-2 border-slate-400 rounded-lg bg-sky-50 p-2 text-center text-slate-600 font-medium"
    >
      {label}
    </Link>
  )
}
export default MainLink