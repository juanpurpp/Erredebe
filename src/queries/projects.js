import Api from "@/services/Api";

const createNewProject = async ({name, description, template, lang, folderId, signal}) => await Api.post('/projects/createNewProject', {name, description, folderId, template}, {signal, params:{lang}})

export {createNewProject}