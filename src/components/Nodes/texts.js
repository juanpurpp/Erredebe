
const es = {
  default_table_name: 'Tabla',
  column_label: 'Nombre columna',
  type_label: 'Tipo',
}

const en = {
  default_table_name: 'Table',
  column_label: 'Column name',
  type_label: 'Type',
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
