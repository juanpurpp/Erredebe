const acceptedLangs = [
  'en',
  'es',
]

const getAcceptedLang = (lang) => {
  if(acceptedLangs.includes(lang)) return lang
  else return 'en'
}
export default getAcceptedLang