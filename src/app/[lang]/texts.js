
const es = {
  title: 'Diagramar y documentar base de datos',
  description: 'Una herramienta para la documentación limpia de bases de tus datos',
  main_button: 'Comenzar'
}

const en = {
  title: 'For diagram and document databases',
  description: 'A tool for clean database documentation',
  main_button: 'Get started'
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
