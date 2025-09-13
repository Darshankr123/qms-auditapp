import axios, { endpoints } from "@/utils/axios";

export const createUser = async (userData: any) => {
  try {
    const URL = endpoints.user.createUser;
    const response = await axios.post(URL, userData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUserById = async (userId: number) => {
  try {
    const URL = `${endpoints.user.deleteUserById}/${userId}`;
    const response = await axios.delete(URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
