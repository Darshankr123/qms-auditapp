import axios, { endpoints } from "@/utils/axios";

export const createPlant = async (plantData: any) => {
  try {
    const URL = endpoints.plant.createPlant;
    const response = axios.post(URL, plantData);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPlantById = async (plantId: number) => {
  try {
    const URL = `${endpoints.plant.getPlantById}/${plantId}`;
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePlantById = async (plantId: number) => {
  try {
    const URL = `${endpoints.plant.deletePlantById}/${plantId}`;
    const response = await axios.delete(URL);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
