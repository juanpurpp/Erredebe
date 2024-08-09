import Api from "@/services/Api"

const getFolders = async ({signal}) => await Api.get('/user/getFolders', {signal})
const addFolder = async ({name, signal}) => await Api.post('/user/addFolder', {name}, {signal})
export {getFolders, addFolder}