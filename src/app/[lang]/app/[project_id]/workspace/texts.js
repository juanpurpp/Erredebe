
const es = {
  new_table_label: 'Nueva tabla',
}

const en = {
  new_table_label: 'New table',
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
