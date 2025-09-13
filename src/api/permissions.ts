import axios, { endpoints } from "@/utils/axios";

export const createPermission = async (permissionData: any) => {
  try {
    const URL = endpoints.permissions.createPermissions;
    const response = await axios.post(URL, permissionData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const assignPermission = async (permission: any) => {
  try {
    const URL = endpoints.permissions.assignPermissions;
    const response = await axios.post(URL, permission);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPermissionById = async (permissionId: number) => {
  try {
    const URL = `${endpoints.permissions.getPermissionById}/${permissionId}`;
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePermissionById = async (permissionId: number) => {
  try {
    const URL = `${endpoints.permissions.deletePermissionById}/${permissionId}`;
    const response = await axios.delete(URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
