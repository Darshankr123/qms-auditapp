import axios, { endpoints } from "@/utils/axios";

export const getRolesById = async (roleId: number) => {
  try {
    const URL = `${endpoints.roles.getRolesById}/${roleId}`;
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteRoleById = async (roleId: number) => {
  try {
    const URL = `${endpoints.roles.deleteRoleById}/${roleId}`;
    const response = await axios.delete(URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
