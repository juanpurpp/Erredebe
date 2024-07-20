import redirectionForLanguage from "./middlewares/redirectionForLanguage"

export default function middleware(req ) {
  if(req.nextUrl.pathname === '/') return redirectionForLanguage(req)
}