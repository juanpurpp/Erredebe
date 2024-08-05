
const es = {
  folder_default_title: 'Mi espacio de trabajo',
  folder_default_description: 'Para organizar tus proyectos',
}

const en = {
  folder_default_title: 'My workspace',
  folder_default_description: 'To organize your projects',
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
