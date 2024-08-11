import Api from "@/services/Api";

const createNewProject = async ({name, description, template, lang, folderId, signal}) => await Api.post('/projects/createNewProject', {name, description, folderId, template}, {signal, params:{lang}})
const getProject = async ({projectId, signal}) => await Api.get(`/projects/${projectId}`, {signal})
export {createNewProject, getProject}