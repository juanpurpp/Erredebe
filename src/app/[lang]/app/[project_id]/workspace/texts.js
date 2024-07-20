
const es = {
  new_table_label: 'Nueva tabla',
  first_table: 'Primera tabla',
  second_table: 'Segunda tabla',
  column_label: 'Nombre columna',
}

const en = {
  new_table_label: 'New table',
  first_table: 'First table',
  second_table: 'Second table',
  column_label: 'Column name',
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
