//redirect using next request and response
import { headers } from "next/headers"
import { NextResponse as res } from "next/server"
const redirectionForLanguage = (req) => {
  const headersList = headers()
  const languageHeader = headersList.get('accept-language')
  switch(languageHeader.slice(0, 2)){
    case 'en': return res.redirect(req.nextUrl.origin+'/en')
    case 'es': return res.redirect(req.nextUrl.origin+'/es')
    default: return res.redirect(req.nextUrl.origin+'/es')
  }
}
export default redirectionForLanguage