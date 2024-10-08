import { getGoogleTokens, createNewToken, newUserVerification } from "@/services/User"
import getAcceptedLang from "@/utils/getAcceptedLang"
import { decode } from "jsonwebtoken"
import { headers, cookies } from "next/headers"
import { NextResponse } from "next/server"
export async function GET(request, params) {
  try {
    const headersList = headers()
    const languageHeader = headersList.get('accept-language')
    const searchParams = request.nextUrl.searchParams
    const code = searchParams.get('code')
    const google_tokens = await getGoogleTokens(code)
    const lang = cookies().get('lang')?.value
    const { id_token, refresh_token } = google_tokens
    const decodedToken = decode(id_token)
    const acceptedLang = lang ?? getAcceptedLang(languageHeader)
    if (!decodedToken.email_verified) return NextResponse.redirect(request.nextUrl.origin + `/${acceptedLang}/auth/error/not-verified`)
    const user = await newUserVerification({ email: decodedToken.email }, lang)
    cookies().set('token', createNewToken(user), {sameSite:'lax', path:'/', expires: '7d', maxAge: '7d', })
    return NextResponse.redirect(request.nextUrl.origin + `/${acceptedLang}/app/projects`)
  }
  catch(error){
    console.error('SERVER ERROR', error)
    return NextResponse.json({ error: 'SERVER ERROR' }, { status: 500 })
  }

}