"use server"

import { cookies } from "next/headers"

const setCookie = async (name, value) => { cookies().set(name, value)}
const getCookie = async (name) => { cookies().get(name)}
const deleteCookie = async (name) => { cookies().delete(name)}
export { setCookie, getCookie, deleteCookie }