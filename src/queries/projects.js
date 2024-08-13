import Api from "@/services/Api";

const createNewProject = async ({name, description, template, lang, folderId, signal}) => await Api.post('/projects/createNewProject', {name, description, folderId, template}, {signal, params:{lang}})
const getProject = async ({projectId, signal}) => await Api.get(`/projects/${projectId}`, {signal})
const saveProject = async ({structure, projectId, signal}) => await Api.post(`/projects/${projectId}/save`, {structure, projectId},{signal})
export {createNewProject, getProject, saveProject}