"use server"
import useSession from "@/hooks/useSession"
import { redirect } from 'next/navigation'
const PrivateProvider = ({children, params}) => {
  console.log('paramsitos', params)
  const {lang} = params
  const {expired, invalid} = useSession()
  console.log(useSession())
  if(invalid) redirect(`/${lang}/auth/login`)
  if(expired) console.log('esta expirao :v')
  return <>{children}</>
}
export default PrivateProvider