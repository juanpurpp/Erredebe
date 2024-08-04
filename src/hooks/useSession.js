"use server"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
const useSession = () => {
  try{
    const token = cookies().get('token').value
    const data = verify(token, process.env.JWT_SECRET)
    const expired = data.exp < Date.now()
    return {
      data,
      expired,
      invalid: false
    }
  }
  catch(verificationError){
    return {
      data: null,
      expired: false,
      invalid: true,
    }
  }
  
}
export default useSession