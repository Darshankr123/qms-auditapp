import axios, { endpoints } from "@/utils/axios";

export const getOrgs = async () => {
  try {
    const URL = endpoints.orgs.getOrgs;
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createOrg = async (orgData: any) => {
  try {
    const URL = endpoints.orgs.createOrg;
    const response = axios.post(URL, orgData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteOrg = async (orgId: number) => {
  try {
    const URL = `${endpoints.orgs.deleteOrgById}/${orgId}`;
    const response = await axios.delete(URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
