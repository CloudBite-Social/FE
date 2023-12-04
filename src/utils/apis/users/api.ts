// import { Response } from "@/utils/types/api";
import { User, UpdateUserSchema } from "./types";
// import axiosWithConfig from "../axiosWithConfig";

import axios from "axios";

export const getUser = async () => {
  try {
    const response = await axios.get("/users");

    // return response.data as Response<User>;
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateUser = async (body: UpdateUserSchema) => {
  try {
    const response = await axios.put("/users/", body);

    // return response.data as Response;
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteUser = async () => {
  try {
    const response = await axios.delete("/users/");

    // return response.data as Response;
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
