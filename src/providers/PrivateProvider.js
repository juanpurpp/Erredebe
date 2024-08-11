"use server"
import useSession from "@/hooks/useSession"
import { redirect } from 'next/navigation'
const PrivateProvider = ({children, params}) => {
  const {lang} = params
  const {expired, invalid} = useSession()
  if(invalid) redirect(`/${lang}/auth/login`)
  //if(!invalid && expired) console.log('EXPIRED TOKEN')
  return <>{children}</>
}
export default PrivateProvider