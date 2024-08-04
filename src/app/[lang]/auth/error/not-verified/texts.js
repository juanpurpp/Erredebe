
const es = {
  title: 'Error',
  message: 'Tu cuenta no ha sido verificada',
}

const en = {
  title: 'Error',
  message: 'Your account has not been verified',
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
