import getCookie from "@/utils/getCookie";
import axios from "axios";

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
Api.interceptors.request.use(
  config => ({
    ...config,
    headers: {
      ...config.headers,
      'authorization': getCookie("token"),
    },
  }),
)
export default Api