// import { Response } from "@/utils/types/api";
import { User, UpdateUserSchema } from "./types";
// import axiosWithConfig from "../axiosWithConfig";

import axios from "axios";

export const getUser = async () => {
  try {
    const response = await axios.get(
      "https://virtserver.swaggerhub.com/HERUSETIAWAN_1/sosmed/1.0.0/users"
    );

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateUser = async (body: UpdateUserSchema) => {
  try {
    const response = await axios.patch(
      "https://virtserver.swaggerhub.com/HERUSETIAWAN_1/sosmed/1.0.0/users",
      body
    );

    // return response.data as Response;
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteUser = async () => {
  try {
    const response = await axios.delete(
      "https://virtserver.swaggerhub.com/HERUSETIAWAN_1/sosmed/1.0.0/users"
    );

    // return response.data as Response;
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
