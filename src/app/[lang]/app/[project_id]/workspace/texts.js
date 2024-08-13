
const es = {
  new_table_label: 'Nueva tabla',
  first_table: 'Primera tabla',
  second_table: 'Segunda tabla',
  column_label: 'Nombre columna',
  loading_project: 'Cargando proyecto',
  forbidden_message: 'No tienes permisos para ver este proyecto',
}

const en = {
  new_table_label: 'New table',
  first_table: 'First table',
  second_table: 'Second table',
  column_label: 'Column name',
  loading_project: 'Loading project',
  forbidden_message: 'You do not have permission to view this project',
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
