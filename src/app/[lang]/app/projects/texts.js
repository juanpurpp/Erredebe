
const es = {
  folders_text: 'Carpetas',
  h1: 'Tus proyectos en',
}

const en = {
  folders_text: 'Folders',
  h1: 'Your projects in',
}
export default function (lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
