import getTexts from "./texts";

export default function Page({params}) {
  const {title, message} = getTexts(params.lang);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-4">
      <h1 className="text-3xl font-medium text-sky-950">{title}</h1>
      <p className="text-rose-900">{message}</p>
    </div>
  );
}