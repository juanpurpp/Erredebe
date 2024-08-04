
const es = {
  login_with_google: 'Iniciar sesión con Google',
  login_with_apple: 'Iniciar sesión con Apple',
  h1_title: 'Iniciar sesión en Erredebe',
}

const en = {
  login_with_google: 'Login with Google',
  login_with_apple: 'Login with Apple',
  h1_title: 'Login in Erredebe',
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
