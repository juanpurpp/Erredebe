const root_url = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_BASE_URL;



const getGoogleAuthUrl = () => {
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.email', 
  ]

  const options ={
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    redirect_uri: window.location.origin + process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_SUBPATH,
    response_type: 'code',
    scope: scopes.join(''),
    prompt: 'select_account',
    access_type: 'offline',
  }
  
  const qs = new URLSearchParams(options).toString()
  return `${root_url}?${qs}`
}

export default getGoogleAuthUrl