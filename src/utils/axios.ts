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
    login: "http://65.2.49.82:7370/audit/api/users/login",
    register: "",
  },
  orgs: {
    getOrgs: "http://65.2.49.82:7370/user/api/organizations",
    createOrg: "http://65.2.49.82:7370/user/api/organizations",
    deleteOrgById: "http://65.2.49.82:7370/api/organizations/1",
  },
  plant: {
    createPlant: "http://65.2.49.82:7370/user/api/plants",
    getPlantById: "http://65.2.49.82:7370/user/api/plants/1",
    deletePlantById: "http://65.2.49.82:7370/api/plants/2",
  },
  permissions: {
    createPermissions: "http://65.2.49.82:7370/user/api/permissions",
    assignPermissions: "http://65.2.49.82:7370/user/api/roles/1/permissions",
    getPermissionById: "http://65.2.49.82:7370/user/api/permissions/1",
    deletePermissionById: "http://localhost:7370/user/api/permissions/6",
  },
  user: {
    createUser: "http://65.2.49.82:7370/user/api/user",
    deleteUserById: "http://65.2.49.82:7370/api/users/1",
  },
  roles: {
    getRolesById: "http://65.2.49.82:7370/user/api/roles",
    deleteRoleById: "http://65.2.49.82:7370/api/roles/2",
  },
};
