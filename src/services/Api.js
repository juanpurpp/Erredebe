import getCookie from "@/utils/getCookie";
import axios from "axios";

console.log('base',process.env.NEXT_PUBLIC_API_URL)
const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
Api.interceptors.request.use(
  config => ({
    ...config,
    headers: {
      ...config.headers,
      'authorization': !console.log('t',getCookie("token")) &&getCookie("token"),
    },
  }),
)
export default Api