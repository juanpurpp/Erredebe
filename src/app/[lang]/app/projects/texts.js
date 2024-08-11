
const es = {
  folders_text: 'Carpetas',
  h1: 'Tus proyectos en',
  add_folder: 'Agregar carpeta',
  add_folder_placeholder: 'Nombre de la carpeta',
  create_new_project: 'Crear nuevo proyecto',
  form_project_name: 'Nombre del proyecto',
  form_project_name_placeholder: 'Nuevo proyecto',
  form_project_description: 'Descripción del proyecto',
  form_project_description_placeholder: 'De que se trata tu proyecto',
  form_start_from: 'Empezar con',
  form_empty_project: 'Proyecto vacío',
  form_starter_project: 'Proyecto de inicio',
  form_name_required: ' (requerido)',
  form_submit_button: 'Crear proyecto',
  creating_new_project: 'Creando nuevo proyecto',
  redirecting_message: 'Redirigiendo a tu nuevo proyecto'
}

const en = {
  folders_text: 'Folders',
  h1: 'Your projects in',
  add_folder: 'Add folder',
  add_folder_placeholder: 'Folder name',
  create_new_project: 'Create new project',
  form_project_name: 'Project name',
  form_project_name_placeholder: 'New project',
  form_project_description: 'Project description',
  form_project_description_placeholder: 'What is your project about',
  form_start_from: 'Start from',
  form_empty_project: 'Empty project',
  form_starter_project: 'Starter project',
  form_name_required: ' (required)',
  form_submit_button: 'Create project',
  creating_new_project: 'Creating new project',
  redirecting_message: 'Redirecting to your new project'
}
export default function getTexts(lang){
  switch(lang){
    case "es": return es
    case "en": return en
    default: return es
  }
}
