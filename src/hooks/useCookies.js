"use server"

import { cookies } from "next/headers"

const useCookies = async () => {
  return {
    get   : async (name) => cookies().get(name),
    set   : async(name, value) => cookies().set(name, value),
    delete: async(name) => cookies().delete(name)
  }
}
export default useCookies