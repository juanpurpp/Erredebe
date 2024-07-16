
const es = {
  title: 'Diagramar y documentar base de datos',
  description: 'Una herramienta para una documentación limpia de bases de datos',
  main_button: 'Comenzar'
}

const en = {
  title: 'Diagram and document databases',
  description: 'A tool for clean database documentation',
  main_button: 'Get started'
}
export default function (lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
