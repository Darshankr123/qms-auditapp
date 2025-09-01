import { HOST_API } from "@/config-global";
import { paths } from "@/routes/paths";
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log(error.response);
      logout();
    }
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

const logout = () => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("userId");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userId");

  window.location.href = paths.auth.session_expired;
};

export default axiosInstance;

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

export const postData = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.post(url, { ...config });

  return res.data;
};

export const endpoints = {
  auth: {
    me: "",
    login: "",
    register: "",
  },
};
