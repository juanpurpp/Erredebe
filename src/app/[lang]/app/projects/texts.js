
const es = {
  folders_text: 'Carpetas',
  h1: 'Tus proyectos en',
  add_folder: 'Agregar carpeta',
  add_folder_placeholder: 'Nombre de la carpeta',
}

const en = {
  folders_text: 'Folders',
  h1: 'Your projects in',
  add_folder: 'Add folder',
  add_folder_placeholder: 'Folder name',
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
